
function Header() {

  return (
    <>


    <div className='w-full'>
      
      <div className='lg:flex  bg-emerald-800 xl:h-[36vw] lg:h-[38vw] w-full'>
          <div className='xl:w-3/5 lg:w-[53vw] pl-5 pt-7 md:pt-24 xl:pl-20 lg:pl-15 md:px-20 sm:px-20'>
            <h1 className='text-white text-4xl font-bold xl:text-6xl lg:text-4xl xl:font-bold lg:font-bold sm:text-4xl'>Modern Interior Design Studio</h1>
            <p className='text-gray-400 pt-8'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className='pt-8 flex'>
              <button className=' h-12 mr-2 px-8 rounded-full bg-yellow-500'>Shop Now</button>
              <button className='border-2 border-gray-400 h-12 px-8 rounded-full text-white font-semibold'>Explore</button>
            </div>
          </div>
          <div className='h-full min-w  pt-0 '><img src='../public/couch.png' className=' min-w-[55vw] max-w-full'></img></div>
      </div>

      
    </div>


    </>
  )
}

export default Header


