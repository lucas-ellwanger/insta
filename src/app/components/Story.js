import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/20/solid';

export default function Story({ img, userName, isUser }) {
  return (
    <div className='relative group cursor-pointer'>
      <div className='relative h-14 w-14'>
        <Image
          className='rounded-full p-[1.5px] border-red-500 border-2 hover:scale-110 transition-transform duration-200 ease-out'
          src={img}
          alt=''
          sizes='33vw'
          fill
        />
      </div>
      {isUser && <PlusIcon className='h-6 absolute top-4 left-4 text-white' />}
      <p className='text-center text-xs w-14 truncate'>{userName}</p>
    </div>
  );
}
