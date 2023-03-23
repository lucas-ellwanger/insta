'use client';

import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

export default function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid ${
        session
          ? 'grid-cols-1 mx-10 md:mx-auto md:max-w-2xl xl:max-w-3xl lg:grid-cols-3'
          : 'grid-cols-1 mx-10 md:mx-auto md:max-w-2xl xl:max-w-3xl lg:grid-cols-2'
      }`}
    >
      <section className='md:col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section className='hidden ml-2 xl:ml-6 2xl:ml-10 lg:inline-grid lg:col-span-1'>
        <div className='fixed w-[380px]'>
          {/* Mini Profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
