import Image from 'next/image';

export default function Header() {
  return (
    <div className=''>
      {/* Left */}

      <div className='flex items-center justify-between max-w-6xl'>
        <div className='h-24 w-24 relative cursor-pointer hidden lg:inline-grid'>
          <Image
            src='http://jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png'
            alt='Logo'
            fill
            className='object-contain'
          />
        </div>
        <div className='h-24 w-10 relative cursor-pointer lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
            alt='Logo'
            fill
            className='object-contain'
          />
        </div>

        <h1>Right side</h1>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  );
}
