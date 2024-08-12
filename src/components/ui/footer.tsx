
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {


  return (
    <>

    <div className='w-full'>
      
        <div className=' pt-52 lg:pt-20 pl-5 xl:pl-20 lg:pl-15 md:pl-10 sm:pl-5'>
        <div className='flex'>
          <img src='../public/envelope-outline.svg'></img>
          <h1 className='text-lg font-semibold pl-1 text-emerald-800'>Subscribe to Newsletter</h1>
        </div>
        <div className='sm:flex gap-4 pt-2'>
          <div className='flex gap-4'>
            <input type='text' placeholder='Enter your name' className='border-2 h-12 w-60 rounded-xl pl-2'></input>
            <input type='text' placeholder='Enter your email' className='border-2 h-12 w-60 rounded-xl pl-2'></input>
          </div>
          <div className='relative flex justify-center pl-8 pt-5 sm:pt-0'>
            <div className='h-12 w-20 bg-emerald-800 rounded-xl  absolute z-0'></div>
            <FaPaperPlane className='h-10 text-white z-10 '/>
          </div>
        </div>
      </div>

      <div className='pt-20 pl-5 xl:pl-20 lg:pl-15 md:pl-10 sm:pl-5'>
        <h1 className='text-3xl font-semibold text-emerald-800'>Furni.  </h1>
        <div className='md:flex xl:gap-24 lg:gap-16 sm:gap-20 pt-10 pr-5 md:gap-7 '>
          <div className=' xl:w-96 lg:w-80 md:w-64 pb-20 md:pb-0'>
            <h1>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</h1>
            <div className='flex pt-10'>
              <a href='' className='relative flex justify-center pl-8'>
                <div className='h-10 w-10 bg-zinc-200 rounded-full absolute z-0'></div>
                <FaFacebookF className='h-6 pt-3 text-emerald-800 z-10 '/>
              </a>
              <a href='' className='relative flex justify-center pl-8'>
                <div className='h-10 w-10 bg-zinc-200 rounded-full absolute z-0'></div>
                <FaTwitter className='h-6 pt-3 text-emerald-800 z-10 '/>
              </a>
              <a href='' className='relative flex justify-center pl-8'>
                <div className='h-10 w-10 bg-zinc-200 rounded-full absolute z-0'></div>
                <FaInstagram className='h-6 pt-3 text-emerald-800 z-10 '/>
              </a>
              <a href='' className='relative flex justify-center pl-8'>
                <div className='h-10 w-10 bg-zinc-200 rounded-full absolute z-0'></div>
                <FaLinkedin  className='h-6 pt-3 text-emerald-800 z-10 '/>
              </a>
            </div>
          </div>
          <div className='flex gap-36 md:gap-7 lg:gap-20'>
            <div className=''>
              <a href=''>About us</a><br></br>
              <a href=''>Services</a><br></br>
              <a href=''>Blog</a><br></br>
              <a href=''>Contact us</a><br></br>
            </div>
            <div className=''>
              <a href=''>Support</a><br></br>
              <a href=''>Knowledge base</a><br></br>
              <a href=''>Live chat</a><br></br>
            </div>
          </div>
          <div className='flex pt-10 md:pt-0 gap-36 md:gap-7 lg:gap-20'>
            <div className=''>
              <a href=''>Jobs</a><br></br>
              <a href=''>Our team</a><br></br>
              <a href=''>Leadership</a><br></br>
              <a href=''>Privacy Policy</a><br></br>
            </div>
            <div className=''>
              <a href=''>Nordic Chair</a><br></br>
              <a href=''>Kruzo Aero</a><br></br>
              <a href=''>Ergonomic Chair</a><br></br>
            </div>
          </div>
        </div>  

        <div className='py-20 w-full'>
          <div className='lg:flex border-t-2 py-20 pr-20 w-full'>
            <h1 className='w-[96vw] '>Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co Distributed By ThemeWagon</h1>
            <div className='flex gap-10 justify-center lg:justify-end w-full pt-4 lg:pt-0'>
              <a href=''>Terms & Conditions</a>
              <a href=''>Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>

      



      

      
    </div>


    </>
  )
}

export default Footer


