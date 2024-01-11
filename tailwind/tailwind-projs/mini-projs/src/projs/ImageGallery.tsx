import React from 'react';

export default function ImageGallery() {
  return (
    <>
      {/* card container */}
      <div className='bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40'>
        {/* menu container */}
        <div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
          {/* group item */}
          <div className='group'>
            <a href='#'>Vector</a>
            <div className='border-black border-b-2 mx-2 mt-1 duration-500 opacity-0 group-hover:opacity-100' />
          </div>
          {/* group item */}
          <div className='group'>
            <a href='#'>Illustrations</a>
            <div className='border-black border-b-2 mx-2 mt-1 duration-500 opacity-0 group-hover:opacity-100' />
          </div>
          {/* group item */}
          <div className='group'>
            <a href='#'>Images</a>
            <div className='border-black border-b-2 mx-2 mt-1 duration-500 opacity-0 group-hover:opacity-100' />
          </div>
          {/* group item */}
          <div className='group'>
            <a href='#'>Icons</a>
            <div className='border-black border-b-2 mx-2 mt-1 duration-500 opacity-0 group-hover:opacity-100' />
          </div>
        </div>
      </div>
    </>
  )
}