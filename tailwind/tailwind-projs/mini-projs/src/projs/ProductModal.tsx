import React from 'react';

export default function ProductModal() {
  return (
    <>
      <div className='flex justify-center min-h-screen items-center'>
        {/* card container */}
        <div className='flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16'>
          {/* img container */}
          <div className=''>
            <img src={require('../assets/headphone.png')} alt='headphone' className='hover:scale-105 duration-200 mx-auto w-60' />
          </div>
          {/* main content container */}
          <div className='flex flex-col space-y-6'>
            {/* label and description container */}
            <div className='flex flex-col mb-4 space-y-6 text-center md:text-left'>
              <div>
                <span className='bg-black text-white rounded-full px-3 py-1 inline-block'>Free shipping</span>
              </div>

              {/* title */}
              <p className='text-2xl font-medium max-w-sm'>Razer Kraken Kitty Edt Gaming Headset Quartz</p>
              {/* price container */}
              <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
                <p className='line-through'>$799</p>
                <p className='text-5xl font-bold'>$599</p>
                <p className='text-sm font-light text-gray-400'>This offer is valid until April 3rd or as long as stock lasts!</p>
              </div>

              {/* button group */}
              <div className='group'>
                <button className='w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg transition-all duration-150 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg'>
                  <div className='bg-blue-500 rounded-lg px-8 py-4 duration-150 group-hover:bg-blue-700'>
                    Add to cart
                  </div>
                </button>
              </div>

              {/* stock */}
              <div className='flex items-center space-x-3 group'>
                <div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping' />
                <p className='text-sm'>50+ pcs in stock</p>
              </div>

              {/* bottom buttons container */}
              <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
                <button className='border-2 border-gray-300 flex items-center justify-center py-3 px-5 space-x-3 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                  <span className='text-5xl mb-2'>𐄷</span>
                  <span className=''>Add to cart</span>
                </button>
                <button className='border-2 border-gray-300 flex items-center justify-center py-3 px-5 space-x-3 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                  <span className='text-4xl mb-2'>♥</span>
                  <span className=''>Add to wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}