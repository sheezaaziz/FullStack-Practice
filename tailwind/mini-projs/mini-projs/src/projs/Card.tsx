import React from 'react';

function Card() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        {/* card */}
        <div className='bg-zinc-800 flex rounded-2xl p-2'>
          {/* flex container */}
          <div className='flex flex-col md:flex-row rounded-l-xl'>
            {/* img */}
            <img src={require('../assets/image.jpg')} alt='random img' className='rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200' />
            {/* text container */}
            <div className='p-6 md:p-12'>
              <h1 className='text-white text-xl font-serif text-center md:text-left'>Get diet and fitness tips in your inbox</h1>
              <p className='max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left'>Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
              {/* input+btn container */}
              <div className='flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0'>
                <input type='text' placeholder='Enter your email address' className='p-2 px-4 text-center rounded-md focus:outline-none text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left' />
                <button className='px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
