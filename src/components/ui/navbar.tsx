import { useState } from 'react'
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const [show, setShow] = useState(false);
  const clickIcon = () =>{
    setShow(!show);
  }

  return (
    <>

    <div className='w-full'>

          {
            show ? (
              // <div className='flex flex-col justify-center items-center'>
              
              // <BiMenu className='h-11 w-20 md:hidden text-gray-300 ' onClick={clickIcon}/>
              //   <ul className=' text-gray-400 gap-8 px-16 flex flex-col md:hidden'>
              //     <li><a className='text-white ' href=''>Home</a></li>
              //     <li><a className='hover:text-white' href=''>Shop</a></li>
              //     <li><a className='hover:text-white' href=''>About us</a></li>
              //     <li><a className='hover:text-white ' href=''>Services</a></li>
              //     <li><a className='hover:text-white ' href=''>Blog</a></li>
              //     <li><a className='hover:text-white ' href=''>Contact us</a></li>
              //   </ul>
              //   </div>

              <div className=''>  
                <nav className='flex bg-emerald-800 py-6'>
                  <div className='flex w-full items-center'>
                    <h1 className='text-white text-4xl pl-10 font-semibold xl:pl-20 lg:pl-15 md:pl-20 sm:pl-20 '>Furni</h1>
                    <div className='flex justify-end items-center w-full'>
                      <BiMenu className='h-11 w-20 md:hidden text-gray-300' onClick={clickIcon}/>
                    </div>
                  </div>
                </nav>
                  <div className='bg-emerald-800 px-20'>
                      <ul className=' text-gray-400  flex flex-col md:hidden gap-5'>
                        <li><a className='text-white ' href=''>Home</a></li>
                        <li><a className='hover:text-white' href=''>Shop</a></li>
                        <li><a className='hover:text-white' href=''>About us</a></li>
                        <li><a className='hover:text-white ' href=''>Services</a></li>
                        <li><a className='hover:text-white ' href=''>Blog</a></li>
                        <li><a className='hover:text-white ' href=''>Contact us</a></li>
                      </ul>
            
                      <ul className='flex gap-5 pt-6 pb-10'>
                        <li><a className='page' href=''><img src={"../public/index.svg"}></img></a></li>
                        <li><a className='page' href=''><img src="../public/cart.svg"></img></a></li>
                      </ul>
                  </div>  
              </div>

            ) : (     
              <div className=''>  
                <nav className='flex bg-emerald-800 py-6'>
                  <div className='flex w-full items-center'>
                    <h1 className='text-white text-4xl pl-10 font-semibold xl:pl-20 lg:pl-15 md:pl-20 sm:pl-20 '>Furni</h1>
          

                    <div className='flex justify-end items-center w-full'>
                      <BiMenu className='h-11 w-20 md:hidden text-gray-300' onClick={clickIcon}/>
                      <ul className=' text-gray-400 xl:gap-8 xl:px-16 md:px-10  md:gap-4 hidden md:flex'>
                        <li><a className='text-white border-b-4 p-2  border-yellow-500' href=''>Home</a></li>
                        <li><a className='hover:text-white hover:border-b-4 p-2  border-yellow-500 ' href=''>Shop</a></li>
                        <li><a className='hover:text-white hover:border-b-4 p-2  border-yellow-500' href=''>About us</a></li>
                        <li><a className='hover:text-white hover:border-b-4 p-2  border-yellow-500' href=''>Services</a></li>
                        <li><a className='hover:text-white hover:border-b-4 p-2  border-yellow-500' href=''>Blog</a></li>
                        <li><a className='hover:text-white hover:border-b-4 p-2  border-yellow-500' href=''>Contact us</a></li>
                      </ul>
            
                      <ul className=' lg:gap-10 gap-5 md:gap-3 pr-10 lg:pr-20 hidden md:flex'>
                        <li><a className='page' href=''><img src={"../public/index.svg"}></img></a></li>
                        <li><a className='page' href=''><img src="../public/cart.svg"></img></a></li>
                      </ul>
                    </div>
          
                  </div>
                </nav>
              </div>       
            )
          }
          
                 
    </div>

    </>
  )
}

export default Navbar


