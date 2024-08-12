import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Body() {

  return (
    <>

    <div className='w-full'>

    <div className='bg-gray-100'>
        <div className='lg:flex pl-5 pt-24 xl:pl-20 lg:pl-15 md:px-20 sm:px-20 py-24' >
          <div className='lg:w-80'>
            <h1 className='text-4xl font-medium'>Crafted with excellent material.</h1>
            <p className='text-gray-400 text-base py-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <button className='h-12 mr-2 px-8 rounded-full bg-gray-800 text-white'>Explore</button>
          </div>
          <div className='md:flex pt-20 lg:pt-0'>
            <a href="" className='text-center pb-10'>
            <img src='../public/product-1.png' className='h-120 md:h-80 hover:-translate-y-12'></img>
            <div className=''></div>
              <p className='pt-5'>Nordic Chair</p>
              <p className="text-xl font-bold pt-4">$50.00</p>
            </a>
            <a href=""  className='text-center pt-20 md:pt-0 pb-10 md:h-80 '>
            <img src='../public/product-2.png' className='h-120 md:h-80 hover:-translate-y-12'></img>
              <p className='pt-5'>Kruzo Aero Chair</p>
              <p className="text-xl font-bold pt-4">$78.00</p>
            </a>
            <a href="" className='text-center pt-20 md:pt-0 pb-10 md:h-80 '>
              <div className=" ">
                <img src='../public/product-3.png' className='h-120 md:h-80 hover:-translate-y-12'></img>
                <p className='pt-5 '>Erganomic Chair</p>
                <p className="text-xl font-bold pt-4">$43.00</p>
              </div>
            </a>
          </div>
        </div>



        <div className='lg:flex pl-5 pt-80 sm:pt-96 md:pt-16 xl:pl-20 lg:pl-15 md:px-20 sm:px-20 py-24'>
          <div className='lg:w-8/12'>
            <h1 className='text-3xl font-medium'>Why Choose Us</h1>
            <p className='pt-5  pr-15'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

            <div className='pt-8 flex gap-3'>
              <div className='w-2/4'>    
                <div className='relative '>  
                  <img src='../public/truck.svg' className='absolute z-10 top-0 left-0 rounded-md'></img>
                  <div className='relative h-8 w-8 bg-gray-300 rounded-full pt-5 pl-15 z-0 top-3 left-5'></div>                  
                </div>            
                <h2 className='text-gray-800 pt-3'>Fast & Free Shipping</h2>
                <p className='text-gray-400 text-sm pt-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>

              <div className='w-2/4'>
                <div className='relative '>  
                  <img src='../public/bag.svg' className='absolute z-10 top-0 left-0'></img>
                  <div className='relative h-8 w-8 bg-gray-300 rounded-full pt-5 pl-15 z-0 top-3 left-5'></div>                  
                </div>            
                <h2 className='text-gray-800 pt-3'>Easy to Shop</h2>
                <p className='text-gray-400 text-sm pt-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>            
            </div>

            <div className='pt-8 flex gap-3 '>
              <div className='w-2/4'>    
                <div className='relative '>  
                  <img src='../public/support.svg' className='absolute z-10 top-0 left-0'></img>
                  <div className='relative h-8 w-8 bg-gray-300 rounded-full pt-5 pl-15 z-0 top-3 left-5'></div>                  
                </div>            
                <h2 className='text-gray-800 pt-3'>24/7 Support</h2>
                <p className='text-gray-400 text-sm pt-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>

              <div className='w-2/4'>
                <div className='relative '>  
                  <img src='../public/return.svg' className='absolute z-10 top-0 left-0'></img>
                  <div className='relative h-8 w-8 bg-gray-300 rounded-full pt-5 pl-15 z-0 top-3 left-5'></div>                  
                </div>            
                <h2 className='text-gray-800 pt-3'>Hassle Free Returns</h2>
                <p className='text-gray-400 text-sm pt-2'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>  
          </div>

          <div className='4/12 pt-20 lg:pt-0'><img src='../public/why-choose-us-img.jpg' className='px-5 lg:px-20 :plgl-40 w-full'></img></div>
        </div>


        <div className='lg:flex py-24 gap-20 xl:gap-36 px-5 xl:px-20 lg:pl-15 md:pl-20 sm:pl-20  '>
          <div className='flex w-full h-full lg:w-7/12  relative sm:px-20 lg:px-0 '>
            <img src='../public/img-grid-1.jpg' className='w-[40vw] lg:w-[34vw] absolute rounded-3xl'></img>
            <img src='../public/img-grid-2.jpg' className='w-[20vw] lg:w-[15vw] h-36 md:h-44 lg:h-60 relative left-[43vw] lg:left-[35.5vw] rounded-3xl'></img>
            <img src='../public/img-grid-3.jpg' className='relative w-[33vw] lg:w-[25.5vw] left-[10vw] top-[21vw] lg:top-[17vw] rounded-3xl'></img>
          </div>
          <div className='w-full lg:w-7/12 pl-20 md:pt-10 lg:pt-0 '>
            <h1 className='text-3xl font-medium pt-44 lg:pt-0'>We Help You Make Modern Interior Design</h1>
            <p className='text-gray-400 pt-5'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
            <div className='pl-5'>
              <ul className='text-gray-400 pt-5 flex flex-wrap list-disc pr-0 pb-10 md:gap-10'>
                <li className='w-2/5'>Donec vitae odio quis nisl dapibus malesuada</li>
                <li className='w-2/5 '>Donec vitae odio quis nisl dapibus malesuada</li>
                <li className='w-2/5'>Donec vitae odio quis nisl dapibus malesuada</li>
                <li className='w-2/5'>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
            </div>
            <button className='h-12 mr-2 px-8 rounded-full bg-gray-800 text-white'>Explore</button>
          </div>
        </div>


        <div className='lg:flex pt-10 md:pt-10 lg:pt-60 pl-5  xl:pl-20 lg:pl-15 md:px-20 sm:px-20 py-24 w-full '>
          <div className='flex lg:w-[33%] py-15'>
            <div className=''>
              <img src='../public/product-1.png' className='w-32 absolute z-10'></img>
              <div className='relative h-24 w-24 bg-gray-200 rounded-xl pt-5 pl-15 z-0 top-4 left-5'></div>
            </div>
            <div className='pl-10 w-full md:w-80'>
              <h1 className='font-semibold'>Nordic Chair</h1>
              <p className='text-gray-400 '>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
              <a className='pt-5 text-gray-500'>Read More</a>
            </div>
          </div>
          <div className='flex pt-14 md:pt-0 lg:w-[33%] py-15 '>
            <div className=''>
              <img src='../public/product-2.png' className='w-32 absolute z-10'></img>
              <div className='relative h-24 w-24 bg-gray-200 rounded-xl pt-5 pl-15 z-0 top-4 left-5'></div>
            </div>
            <div className='pl-10 w-full md:w-80'>
              <h1 className='font-semibold'>Nordic Chair</h1>
              <p className='text-gray-400 '>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
              <a className='pt-5 text-gray-500'>Read More</a>
            </div>
          </div>
          <div className='flex pt-14 md:pt-0 lg:w-[33%] py-15'>
            <div className=''>
              <img src='../public/product-3.png' className='w-32 absolute z-10'></img>
              <div className='relative h-24 w-24 bg-gray-200 rounded-xl pt-5 pl-15 z-0 top-4 left-5'></div>
            </div>
            <div className='pl-10 w-full md:w-80'>
              <h1 className='font-semibold'>Nordic Chair</h1>
              <p className='text-gray-400 '>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
              <a className='pt-5 text-gray-500'>Read More</a>
            </div>
          </div>
        </div>


        <section className='container px-10 md:px-20 lg:px-32'>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
              <div className=' pl-5 pt-7 md:pt-24 xl:pl-20 lg:pl-15 md:px-20 sm:px-20'>
                      <div className=' flex flex-col items-center gap-1'>
                        <h1 className='text-3xl font-semibold text-center'>Testimonials</h1>
                        <p className='text-xl font-normal text-center text-gray-500 w-7/12 py-10'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                        <img src='../public/person-1.png' className='w-20 h-20 rounded-full'></img>
                        <h1 className='font-semibold'>Maria Jones</h1>
                        <p className='text-gray-500'>CEO, Co-Founder, XYZ Inc.</p>
                      </div>
                    </div>
              </CarouselItem>
              <CarouselItem>
              <div className=' pl-5 pt-7 md:pt-24 xl:pl-20 lg:pl-15 md:px-20 sm:px-20'>
                      <div className=' flex flex-col items-center gap-1'>
                        <h1 className='text-3xl font-semibold text-center'>Testimonials</h1>
                        <p className='text-xl font-normal text-center text-gray-500 w-7/12 py-10'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                        <img src='../public/person-1.png' className='w-20 h-20 rounded-full'></img>
                        <h1 className='font-semibold'>Maria Jones</h1>
                        <p className='text-gray-500'>CEO, Co-Founder, XYZ Inc.</p>
                      </div>
                    </div>
              </CarouselItem>
              <CarouselItem>
              <div className=' pl-5 pt-7 md:pt-24 xl:pl-20 lg:pl-15 md:px-20 sm:px-20'>
                      <div className=' flex flex-col items-center gap-1'>
                        <h1 className='text-3xl font-semibold text-center'>Testimonials</h1>
                        <p className='text-xl font-normal text-center text-gray-500 w-7/12 py-10'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                        <img src='../public/person-1.png' className='w-20 h-20 rounded-full'></img>
                        <h1 className='font-semibold'>Maria Jones</h1>
                        <p className='text-gray-500'>CEO, Co-Founder, XYZ Inc.</p>
                      </div>
                    </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>     
          </section>

              {/* <div className=' pl-5 pt-7 md:pt-24 xl:pl-20 lg:pl-15 md:px-20 sm:px-20'>
                      <div className=' flex flex-col items-center gap-1'>
                        <h1 className='text-3xl font-semibold text-center'>Testimonials</h1>
                        <p className='text-xl font-normal text-center text-gray-500 w-7/12 py-10'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                        <img src='../public/person-1.png' className='w-20 h-20 rounded-full'></img>
                        <h1 className='font-semibold'>Maria Jones</h1>
                        <p className='text-gray-500'>CEO, Co-Founder, XYZ Inc.</p>
                      </div>
                    </div>        */}
          


        <div className='px-20 pl-5 pt-7 md:pt-40 xl:pl-20 lg:pl-15 md:px-20 sm:px-20'>
          <div className='flex'>
            <h1 className='w-2/4 font-semibold text-3xl'>Recent Blog</h1>
            <a href='' className='w-2/4 text-right'>View All Posts</a>
          </div>
          <div className='sm:flex  gap-6 pt-16'>
            <div className=''>
              <img src='../public/post-1.jpg' className='w-full lg:h-64 xl:h-72 rounded-xl'></img>
              <div className='pt-4'>
                <a href='' className=''>First Time Home Owner Ideas</a><br></br>            
                <span className='text-gray-500'>by </span>
                <a href=''>Kristin Watson </a>
                <span className='text-gray-500'>on </span>
                <a href=''>Dec 19, 2021</a>
              </div>
            </div>
            <div className=''>
            <img src='../public/post-2.jpg' className='w-full lg:h-64 xl:h-72 rounded-xl'></img>
              <div className='pt-4'>
                <a href=''>How To Keep Your Furniture Clean</a><br></br>            
                <span className='text-gray-500'>by </span>
                <a href=''>Robert Fox </a>
                <span className='text-gray-500'>on </span>
                <a href=''>Dec 15, 2021</a>
              </div>
            </div>
            <div className=''>
            <img src='../public/post-3.jpg' className=' w-full lg:h-64 xl:h-72 rounded-xl'></img>
              <div className='pt-4 '> 
                <a href=''>Small Space Furniture Apartment Ideas</a><br></br>           
                <span className='text-gray-500 '>by </span>
                <a href=''>Kristin Watson</a>
                <span className='text-gray-500'>on </span>
                <a href=''>Dec 12, 2021</a>
              </div>
            </div>
          </div>
        </div>

        <div className='relative bg-gray-100 h-48'>
          <div className='px-20 pt-20 flex absolute right-0 top-0'>
            <img src='../public/sofa.png' className='h-80  '></img>
          </div>
        </div>

        </div>

      
    </div>


    </>
  )
}

export default Body


