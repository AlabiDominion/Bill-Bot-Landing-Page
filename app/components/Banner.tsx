import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none'>
        <div className='aspect-square w-125 rounded-full bg-blue-400'/>
      </div>
      <div className='absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20 pointer-events-none'>
        <div className='aspect-square w-125 rounded-full bg-emerald-400'/>
      </div>



    </>
  )
}

export default Banner