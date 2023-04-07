'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { db } from '../../../firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import {
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';

export default function Post({ id, userName, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts', id, 'comments')),
      orderBy('timestamp', 'desc'),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts', id, 'likes'),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  }

  async function sendComment(event) {
    event.preventDefault();

    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

  return (
    <div className='mx-auto bg-white my-7 border rounded-md'>
      {/* Post Header */}
      <div className='flex items-center p-5'>
        <img
          className='h-12 rounded-full object-cover border p-1 mr-3'
          src={userImg}
          alt={userName}
        />
        <p className='font-bold flex-1'>{userName}</p>
        <EllipsisHorizontalIcon className='h-5' />
      </div>

      {/* Post Image */}
      <img className='object-cover w-full' src={img} alt='' />

      {/* Post Buttons */}

      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className='text-red-400 btn'
              />
            ) : (
              <HeartIcon onClick={likePost} className='btn' />
            )}
            <ChatBubbleOvalLeftEllipsisIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/* Post Comments */}
      <p className='p-5 truncate'>
        {likes.length > 0 && (
          <p className='font-bold mb-1'>{likes.length} likes</p>
        )}
        <span className='font-bold mr-2'>{userName}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
          {comments.map((comment) => (
            <div
              className='flex items-center space-x-2 mb-2'
              key={comment.data().timestamp}
            >
              <img
                className='h-7 rounded-full object-cover'
                src={comment.data().userImage}
                alt='user-image'
              />
              <p className='font-semibold'>{comment.data().username}</p>
              <p className='flex-1 truncate'>{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/* Post input box */}
      {session && (
        <form className='flex items-center p-4'>
          <FaceSmileIcon className='h-7' />
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className='border-none flex-1 focus:ring-0'
            type='text'
            placeholder='Enter your comment...'
          />
          <button
            type='submit'
            onClick={sendComment}
            disabled={!comment.trim()}
            className='text-blue-400 font-bold disabled:text-blue-200'
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
