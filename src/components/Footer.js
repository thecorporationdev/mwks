import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Footer = ({ openNav, setOpenNav}) => {
  return (
    <div className= {openNav ? "open" : "close"} >
    <div className='bg-green-950 pt-10 m-0 pb-8 md:p-20 '>
      <div className=' flex flex-col items-center justify-between text-white  border-solid  border-white border-b-1 py-24 '>
        <p className='text-2xl p-4 text-center'>Have a project in mind?</p>
        <p className='text-4xl p-4 text-center'> Start your project now  </p>
        <BsArrowRight className='flex flex-col text-6xl item-center justify-between'/>
      </div>
      <div className='md:grid md:grid-cols-4  '>
         <div  className=" m-4 p-4 text-xl border-solid  border-white border-t-2 md:pb-10 ">
            <h1 className=" text-lg text-white  pb-4 ">Instagram</h1>
            <h1 className=" text-lg text-white  pb-4 ">Twitter</h1>
            <h1 className=" text-lg text-white  pb-4 ">LinkedIn</h1>
           </div>
         <div  className=" m-4 p-4 text-xl  border-solid  border-white border-t-2 md:pb-10">
           <h1 className=" text-lg text-white  pb-4 "> Privacy Policy </h1>
           <h1 className=" text-lg text-white  pb-4 ">Terms & Conditions</h1>
            
            
          </div>
         <div  className=" m-4 p-4 text-xl border-solid   border-white border-t-2 md:pb-10  ">
          <h1 className=" text-lg text-white  pb-4 ">For new business enquiries  Email: </h1>
         </div>
         <div  className=" m-4 p-4 text-xl border-solid  border-white border-t-2 md:pb-10  ">
          <h1 className=" text-lg text-white  pb-4 ">8 IBM Haruna Str, Utako District, Abuja 900211</h1>
         </div>
      
         </div>
         <div  className=" m-4 p-4 py-24  text-xl border-solid  border-white border-t-2 md:pb-10  ">
          <p className='text-5xl mb-24 text-white '> ORTILANE</p>
          <h1 className=" text-lg text-white  pb-4 ">All Rights Reserved 2023</h1>
         </div>
    </div>
    </div>
  )
}

export default Footer
