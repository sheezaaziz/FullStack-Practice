import React from 'react';

interface CardProps {
  active?: boolean
}

function Card({ active = false}: CardProps) {
  return (
    <>
      {/* card container */}
      <div className={`rounded-xl text-white ${active ? 'bg-violet-600' : 'bg-slate-700'}`}>
        
        {/* upper container */}
        <div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800 text-center'>
          <p className='uppercase'>
            Basic
          </p>
          <h2 className='mt-10 font-serif text-5xl'>
            100GB
          </h2>
          <h5 className='mt-2'>$1.99/month</h5>
          <a href='#.com' className={`inline-block px-10 py-3 my-6 border border-violet-600  rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800 ${active ? 'bg-violet-600' : ''}`}>Purchase</a>
        </div>

        {/* border */}
        <div className='border-t border-slate-700' />

        {/* lower container */}
        <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
          {/* list container */}
          <div className='flex flex-col space-y-2'>
            <div className='flex justify-center space-x-2'>
              <span>✓</span>
              <span>100 GB of storage</span>
            </div>
            <div className='flex justify-center space-x-2'>
              <span>✓</span>
              <span>Option to add members</span>
            </div>
            <div className='flex justify-center space-x-2'>
              <span>✓</span>
              <span>Extra member benefits</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Pricing() {
  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0'>
          <Card />
          <Card active/>
          <Card/>
        </div>
      </div>
    </>
  )
}