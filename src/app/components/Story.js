import Image from 'next/image';

export default function Story({ img, userName }) {
  return (
    <div>
      <div className='relative h-14 w-14'>
        <Image
          className='rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out'
          src={img}
          alt=''
          sizes='33vw'
          fill
        />
      </div>
      <p className='text-xs w-14 truncate'>{userName}</p>
    </div>
  );
}
