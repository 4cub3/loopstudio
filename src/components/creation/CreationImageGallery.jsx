import React from 'react'

function CreationImageGallery({image, text,imageMobile}) {
  return (
    <figure className=' md:w-[23%] mx-auto my-3 overflow-hidden md:h-90 z-1 relative after:absolute after:top-0 after:bottom-0 after:-z-1 after:w-full after:bg-gradient-to-t after:from-slate-800 after:to-slate-transparent group hover:after:hidden before:hidden hover:before:block before:absolute before:top-0 before:bottom-0 before:z-10 before:opacity-80 before:w-full before:bg-white before:transition-all before:duration-300 after:transition-all after:duration-300 transition-all duration-300 '>
      <img src={image} alt="" className='w-full h-full bg-cover relative hidden md:block group-hover:scale-125  transition-all duration-300' />
      <img src={imageMobile} alt="" className='w-full h-full bg-cover relative md:hidden group-hover:scale-125  transition-all duration-300' />
      <h3 className='absolute px-6 font-light left-5  bottom-10 text-white uppercase text-2xl group-hover:text-3xl w-3/4 z-10 group-hover:text-black transition-all duration-300 '>{text}</h3>
    </figure>
  )
}

export default CreationImageGallery