'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function Signin() {
  const [providers, setProviders] = useState({});

  useEffect(() => {
    const getAllProviders = async () => {
      const response = await getProviders();
      return setProviders(response);
    };
    getAllProviders();
  }, []);

  return (
    <div className='flex justify-center space-x-7 mt-20'>
      <img
        src='https://mlabs-wordpress-site.s3.amazonaws.com/wp-content/uploads/2022/09/programar-post-instagram-mLabs.png'
        alt='instagram-art'
        className='hidden object-cover rotate-6 md:inline-flex md:w-48'
      />
      <div className=''>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className='flex flex-col items-center'>
            <img
              src='https://www.careeractivate.com/wp-content/uploads/2019/04/Instagram-1.png'
              alt='instagram-logo'
              className='w-32 object-cover'
            />
            <p className='text-sm italic my-10 text-center'>
              This app was created for learning purposes.
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 transition-colors ease-out'
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const providers = await getProviders();

//   return {
//     props: {
//       providers,
//     },
//   };
// }

export const dynamic = 'force-dynamic';
