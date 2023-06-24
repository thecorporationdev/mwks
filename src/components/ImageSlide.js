import { useEffect, useState } from 'react'
import '../index.css';
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import React from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight, BsDashLg} from 'react-icons/bs'
import { BsTriangleFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper';
import AOS from 'aos'
import 'aos/dist/aos.css'






const ImageSlide = () => {
 

  
 
  
  useEffect(()=>{
    AOS.init({duration: 1000})
 }, [])

  return (
    <div className=''>
      <div className='max-w-[1400px] m-auto  relative group md:p-4 ' data-aos="fade-up"></div>  
       <div className='  w-full p-12 mb-12 bg-green-950 '>
       <span className='text-6xl p-8 pt-12 mb-10 text-white flex flex-col items-center justify-between text-center ' data-aos="fade-up">What they said?</span>
       <div className=''>
       <Swiper
      breakpoints={{
        640:{

          slidesPerView: 1
        },
       
        1024:{
        
          slidesPerView: 3
        }
       }}
      spaceBetween={10}
      loop={true}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ el:'.swiper-pagination' ,clickable:true}}
      navigation={{
        nextEl: '.swiperR',
        prevEl: '.swiperL',
        clickable: true,
      }}
      modules={[Pagination, Navigation ]}
    >
      <SwiperSlide>
        <div>
      <div  className=" grid grid-col-1  m-12 relative">
             <div className="py-32  m-0 bg-white"></div>
             <div className='mt-6 '> <BsTriangleFill size={30} className='mt-32 rotate-180 bottom-0 absolute  text-white left-0 right-0 m-auto'/></div>
           
      </div>
      <div className=" flex flex-col items-center justify-between mb-20">
               <p className='text-sm  mb-2 '>Lorem Ipsum</p>
               <p className='text-xs'>lorem</p>
             </div>
      </div>
      </SwiperSlide>
     <SwiperSlide>
        <div>
      <div  className=" grid grid-col-1  m-12 relative">
             <div className="py-32 m-0 bg-white"></div>
             <div className='mt-6 '> <BsTriangleFill size={30} className='mt-32 rotate-180 bottom-0 absolute  text-white left-0 right-0 m-auto'/></div>
           
      </div>
      <div className=" flex flex-col items-center justify-between mb-20">
               <p className='text-sm  mb-2 '>Lorem Ipsum</p>
               <p className='text-xs'>lorem</p>
             </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
      <div  className=" grid grid-col-1  m-12 relative">
             <div className="py-32 m-0 bg-white"></div>
             <div className='mt-6 '> <BsTriangleFill size={30} className='mt-32 rotate-180 bottom-0 absolute  text-white left-0 right-0 m-auto'/></div>
           
      </div>
      <div className=" flex flex-col items-center justify-between mb-20">
               <p className='text-sm  mb-2 '>Lorem Ipsum</p>
               <p className='text-xs'>lorem</p>
             </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
      <div  className=" grid grid-col-1  m-12 relative">
             <div className="py-32 m-0 bg-white"></div>
             <div className='mt-6 '> <BsTriangleFill size={30} className='mt-32 rotate-180 bottom-0 absolute  text-white left-0 right-0 m-auto'/></div>
           
      </div>
      <div className=" flex flex-col items-center justify-between mb-20">
               <p className='text-sm  mb-2 '>Lorem Ipsum</p>
               <p className='text-xs'>lorem</p>
             </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
      <div  className=" grid grid-col-1  m-12 relative">
             <div className="py-32 m-0 bg-white"></div>
             <div className='mt-6 '> <BsTriangleFill size={30} className='mt-32 rotate-180 bottom-0 absolute  text-white left-0 right-0 m-auto'/></div>
           
      </div>
      <div className=" flex flex-col items-center justify-between mb-20">
               <p className='text-sm  mb-2 '>Lorem Ipsum</p>
               <p className='text-xs'>lorem</p>
             </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
      <div  className=" grid grid-col-1  m-12 relative">
             <div className="py-32 m-0 bg-white"></div>
             <div className='mt-6 '> <BsTriangleFill size={30} className='mt-32 rotate-180 bottom-0 absolute  text-white left-0 right-0 m-auto'/></div>
           
      </div>
      <div className=" flex flex-col items-center justify-between mb-20">
               <p className='text-sm  mb-2 '>Lorem Ipsum</p>
               <p className='text-xs'>lorem</p>
             </div>
      </div>
      </SwiperSlide>
      <div className='sliderController w-full absolute z-10 top-0 bottom-0 m-auto  text-white flex items-center justify-between'>
      <div className='swiperL'><BsChevronCompactLeft size={30} /></div>
       <div className='swiperR '><BsChevronCompactRight size={30} /></div>
      
      
      </div>
      <div className='swiper-pagination text-sm p-8 absolute bottom-0 left-0 right-0 m-auto'></div>
     
    </Swiper>
    </div>
       </div>
     
      <div className=''>
        <span className='text-3xl flex flex-col items-center justify-between'>Featured on</span>
      </div>
    </div>
  )
}

export default ImageSlide
