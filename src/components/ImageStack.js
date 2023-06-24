import React, { useEffect, useState } from 'react';

import '../index.css';
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import {RxCross1} from 'react-icons/rx'
import { BsArrowDownRight } from 'react-icons/bs';
import AOS from 'aos'
import 'aos/dist/aos.css'





const ImageStack = () => {
 
 
  useEffect(()=>{
    AOS.init({duration: 5000})
 }, [])
 
  return (
    <div className='  '>
         <div className=' grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-4 md:p-4' data-aos="fade-up">

           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
           
           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
           
           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
           
           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
           
           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
           
           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
           
           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
           
           <div className='group relative  items-center justify-center overflow-hidden cursor-pointer  ' >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-700'>
                 <div  className='text-white text-lg p-10 ' >
               <div className='text-white text-lg p-0 border-solid overflow-hidden'>
                <p className=' p-4 text-xs opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>BRANDING</p>
               </div> 
               <div className='text-white text-lg p-0  border-solid overflow-hidden'>
                <p className=' p-4 text-lg opacity-100 translate-y-[70%] group-hover:translate-y-[40%] group-hover:opacity-100 transition-all duration-1000'>LOREM</p>
               </div>
               <div className=" absolute font-semibold bottom-2 right-2 p-10  group-hover:bottom-0 group-hover:right-0 transition-all duration-1000"><BsArrowDownRight  size={30}/></div> 
                </div>
              </div>
             <div>
               <img   src= {img3} />
            </div>
           </div>
         
        </div>
        <div className='flex flex-col items-center'><a href = "#" className='text-gray-800 text-sm m-12 p-4   underline' > View All Case Studies</a></div>
     
    </div>
  )
  
}



 

export default ImageStack
