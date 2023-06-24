import React from 'react';

import '../index.css';
import img1 from "../images/img1.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'





const ImageStackx = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
 }, [])

  const [text] = useTypewriter({
    words: ['Hello', 'Hola', 'Bonjour', 'Merhaba', 'Nin hao'],
    loop: 1000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
 
  return (
  <div>
     <div data-aos="fade-up">
         <div>
        <img  className='  top-0' src= {img1} />
        </div> 
      <div className=' mb-10 text-gray-800 font-semibold p-10' data-aos="fade-up">
       <div className=" flex p-2 items-center justify-center  text-6xl font-semibold " >
       <span  >{text}</span>
      <Cursor cursorColor='black'   />
      </div>
      <div className=" flex p-2 items-center justify-center text-center  text-6xl font-semibold ">
     <span  > We create brands that make a difference.</span>
      </div>
      <div className=" flex p-2 items-center justify-center text-center  text-lg">
          <span  >
          We are a global branding agency that creates outstanding brands worldwide. <br/> <br/>
           We believe in the power of creativity and ideas. We use these to build brands that people will love.  <br/> <br/>
           LET’S WORK TOGETHER!
           </span>
      </div>
      
       </div>
       </div>
  </div>
  )
  
}



 

export default ImageStackx
