import React from 'react'
import '../index.css';
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'


const ImageStackii = () => {

  useEffect(()=>{
    AOS.init({duration:1000})
 }, [])


  return (
    <div className=' '>
      <div className='mb-20  p-8  bg-green-950  text-white  ' >
        <img src={img2}/>
        <div>
          <span className='text-6xl p-4  flex flex-col text-center items-center justify-between' data-aos="fade-up">The first effect.</span>
          <span  className='text-xl p-2 flex text-center items-center justify-between' data-aos="fade-up">“There is no second chance for your brand to be able to give the first effect right.”</span>
          <span className='text-sm p-4 flex text-center items-center justify-between'>That’s why we aim to bring out only the best result while creating unique brands and designs with my creative team. We make the projects we prepare stand out in their markets.
              <br/> <br/>
              We create a passionate bond between target audiences and projects. One day, we believe that your path and our path will come across and we believe that we will make you reach the excellence.
              <br/> <br/>
             Mustafa Akülker  / Founder, Creative Director</span>
        </div>
      
      </div>
      <div className='py-10'>
        <span className='text-6xl p-8  text-green-950  ' data-aos="fade-up">Partners</span>
        <div className='grid grid-cols-2 gap-4 mt-10'>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
          <div className='p-20 bg-slate-100'></div>
        </div>
      </div>
    
       
    </div>
  )
}

export default ImageStackii
