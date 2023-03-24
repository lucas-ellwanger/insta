'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/20/solid';
import { useSession, signIn } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atom/modalAtom';

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className='shadow-sm sticky top-0 bg-white z-30'>
      <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        {/* Left */}
        <Link href='/' className='h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src='http://jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png'
            alt='Logo'
            sizes='33vw'
            fill
            className='object-contain'
          />
        </Link>

        <div className='h-24 w-10 relative cursor-pointer lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
            alt='Logo'
            sizes='33vw'
            fill
            className='object-contain'
          />
        </div>

        {/* Middle */}
        <div className='relative mt-1'>
          <div className='absolute top-2 left-2'>
            <MagnifyingGlassIcon className='h-5 text-gray-500' />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
          />
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <Link href='/'>
            <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
          </Link>
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className='h-6 mt-[2px] cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'
              />
              <div className='relative h-10 w-10 cursor-pointer'>
                <Image
                  src={session.user.image}
                  alt=''
                  className='rounded-full'
                  sizes='33vw'
                  fill
                />
              </div>
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
