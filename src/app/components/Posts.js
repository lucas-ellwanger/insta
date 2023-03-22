import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      userName: 'lucasdev',
      userImg: 'https://avatars.githubusercontent.com/u/11988465?v=4',
      img: 'https://images.unsplash.com/photo-1679459905598-79db89b707f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      caption: 'Nice picture',
    },
    {
      id: '2',
      userName: 'lucas945',
      userImg: 'https://avatars.githubusercontent.com/u/11988465?v=4',
      img: 'https://images.unsplash.com/photo-1679436230537-46111d0c70a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      caption: 'New picture',
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userName={post.userName}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
