'use client';

import { useRecoilState } from 'recoil';
import { modalState } from '../../../atom/modalAtom';
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  async function uploadPost() {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, 'posts'), {
      caption: captionRef.current.value,
    });
  }

  function addImageToPost(event) {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  return (
    <div>
      {open && (
        <Modal
          className='absolute max-w-lg w-[90%] p-6 top-56 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-md shadow-md'
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className='flex flex-col justify-center items-center h-[100%]'>
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt=''
                className='w-full max-h-[300px] object-cover cursor-pointer'
              />
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className='cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500'
              />
            )}

            <input
              type='file'
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type='text'
              maxLength='150'
              placeholder='Please enter your caption...'
              className='m-4 border-none text-center placeholder:text-gray-400 w-full focus:ring-0'
              ref={captionRef}
            />
            <button
              disabled={!selectedFile || loading}
              onClick={uploadPost}
              className='w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'
            >
              Upload post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
