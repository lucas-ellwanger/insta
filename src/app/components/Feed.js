import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

export default function Feed() {
  return (
    <main className='grid grid-cols-1 mx-10 md:mx-auto md:max-w-2xl lg:grid-cols-3  xl:max-w-6xl'>
      <section className='md:col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section className='hidden lg:inline-grid lg:col-span-1'>
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
