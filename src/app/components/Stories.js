'use client';

import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';
import Story from './Story';

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      userName: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
  }, []);

  return (
    <div className='flex space-x-2 p-6 mx-auto bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-md scrollbar-none'>
      {storyUsers.map((user) => (
        <Story key={user.id} userName={user.userName} img={user.img} />
      ))}
    </div>
  );
}
