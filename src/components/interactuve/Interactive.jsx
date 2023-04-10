import vr from '../../store/images/desktop/image-interactive.jpg'
const Interactive = ()=>{
    return(
        <section className="container max-w-6xl mx-auto py-[8rem] px-6 md:relative">
            <figure className='w-full md:w-[65%]'>
                <img src={vr} alt="interactive" className='w-full' />
            </figure>
            <article className='md:absolute py-12  md:pr-0 md:p-20 md:w-[65%] text-center md:text-left lg:w-3/6 md:max-w-5xl right-0 bottom-20 bg-white space-y-4'>
                <h2 className='font-light text-4xl sm:text-5xl'>
                THE LEADER IN INTERACTIVE VR
                </h2>
                <p className='text-md tracking-wide text-gray-400 font-light'>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </article>
        </section>
    )
}
export default Interactive;