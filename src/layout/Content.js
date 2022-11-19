import React from 'react';
import Divider from '../components/Divider';
import TweetBox from '../components/TweetBox';
import { PopulerIcon } from "../icons/Icon";

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className='sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className='flex px-4 py-3 space-x-4'>
        <img src="https://pbs.twimg.com/profile_images/1255638738379706369/-pt2QZZb_400x400.jpg" alt="Profile" className='w-11 h-11 rounded-full' />
        <div>
          <TweetBox />
        </div>
      </div>
      <Divider/>
    </main>
  )
}

export default Content