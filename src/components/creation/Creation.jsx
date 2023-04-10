import React from 'react'
import CreationNavBar from './CreationNavBar'
import CreationImageGallery from './CreationImageGallery'
import { DUMMY_DATA } from './creationImages'
function Creation() {
    const imageList = DUMMY_DATA.map(data =>(
        <CreationImageGallery
        key={data.id}
        image= {data.image}
        text={data.text}
        imageMobile={data.imageMobile}
        />
    ))
  return (
    <section className='container max-w-6xl px-6 mx-auto space-y-16'>
        <CreationNavBar />
        <div className='flex flex-col sm:flex-row flex-wrap w-full items-center'>
            {imageList}
        </div>
    </section>
  )
}

export default Creation