import React from 'react'

function CreationNavBar() {
  return (
    <nav className='flex flex-col sm:flex-row items-center md:justify-between'>
        <h1 className='font-light text-4xl sm:text-5xl'>OUR CREATIONS</h1>
        <button className='uppercase border-2 border-black hover:bg-black hover:text-white transition-all duration-200 px-10 py-4 font-semibold'>See All</button>
    </nav>
  )
}

export default CreationNavBar