'use client';

import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      userName: minifaker.username({ locale: 'en' }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <>
      {session ? (
        <div className='mt-4 ml-10'>
          <div className='flex justify-between mb-5 text-sm'>
            <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600 font-semibold'>See all</button>
          </div>
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className='flex items-center justify-between mt-3'
            >
              <img
                src={`https://i.pravatar.cc/150?img=${Math.ceil(
                  Math.random() * 70
                )}`}
                alt='user-image'
                className='h-10 rounded-full border p-[2px]'
              />
              <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>{suggestion.userName}</h2>
                <h3 className='text-gray-400 text-sm truncate w-[230px]'>
                  {suggestion.jobTitle}
                </h3>
              </div>
              <button className='font-semibold text-blue-400 text-sm'>
                Follow
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
