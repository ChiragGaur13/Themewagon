import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BiMenu } from "react-icons/bi";
import Navbar from './components/ui/navbar';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import Body from './components/ui/body';


function App() {
  const [show, setShow] = useState(false);
  const clickIcon = () =>{
    setShow(!show);
  }

  return (
    <>

    <Navbar/>
    <Header/>

    <div className='w-full'>


      <Body/>

      <Footer/>



    </div>


    </>
  )
}

export default App


