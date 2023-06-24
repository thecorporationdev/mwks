
import React from 'react'
import { useState, useEffect } from "react";
import {
  Navbar, MobileNav, Typography
 
} from "@material-tailwind/react";
import {BiMenu, BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';



const Header = ({ openNav, setOpenNav}) => {
 const[scrollPosition, setScrollPosition] = useState(0);

 useEffect(() =>{
  const updatePosition = () => {
    setScrollPosition(window.pageYOffset)
  }

  window.addEventListener('scroll', updatePosition);
  updatePosition()
  return ()=> window.removeEventListener('scroll', updatePosition)
 }, [])
 
  const navList = (
    <ul className="m-0 h-screen text-white lg:text-green-950  lg:h-0 lg:flex   gap-2  p-6  lg:p-2 justify-items-auto" >
       
      <Typography
        as="li"
        variant="small"
        className=" content-center p-2 pb-2 mb-2 text-lg font-semibold "
        
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/company" className="flex items-center">
         Home
        </Link>
      
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-2 pb-2 mb-2 text-lg font-semibold "
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/blueprint"  className="flex items-center">
         About Us
        </Link>
     
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-2 pb-2 mb-2 text-lg font-semibold "
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/clientele"  className="flex items-center">
          Projects
        </Link>
       
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-2 pb-2 mb-2 text-lg font-semibold "
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/capabilities"  className="flex items-center">
       Services
        </Link>  
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-2 pb-2 mb-2 text-lg font-semibold "
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/insights"  className="flex items-center">
          Contacts
        </Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        className=" pt-2 mb-2 lg:text-xs md:text-lg min-[100px]:text-lg   "
      >
        <div className='group '>
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/insights"  className="duration-1000 group-hover:bg-black p-2 px-10 md:px-5 min-[100px]:px-5 lg:bg-green-950 md:bg-black min-[100px]:bg-black text-white lg:flex lg:items-center ">
          Start a Project
        </Link>
       
        </div>
      </Typography>
    
    </ul>
  );
 
  return (
   <div>
      <Navbar className="  items-center mx-auto max-w-screen-xl  px-4 md:px-20 ">
    
      <div className=" group fixed z-10 top-0 left-0 w-screen p-4 px-6 mx-auto flex items-center justify-between text-black md:px-32 ">
      <div className='flex  z-20  w-full justify-between ' >
        <Link to="/" className=" z-20 font-optien  text-green-950 text-3xl mr-4 cursor-pointer py-1.5 font-semibold lg:text-5xl">
         ORTILANE
        </Link>
        
        <div>
        < BiMenu   onClick={() =>{ setOpenNav(!openNav)} } size={30} className='lg:hidden md:flex cursor-pointer'/>
        </div>
        <div className='min-[100px]:hidden md:hidden sm:hidden lg:flex lg:text-xs'>{navList}</div>
        </div>
        <div className={(scrollPosition > 0 ? 'onscreen' : 'offscreen')}  ></div>
    </div>
   

    </Navbar>
    <MobileNav open={openNav}  className='absolute  mx-auto    bg-green-950  top-0  z-20  '>
        <div className="  ">
        <div className='flex  items-center justify-between absolute right-6 top-6 text-white m-0 ' >
      
        <AiOutlineClose  onClick={() => setOpenNav(!openNav)} size={30} className='cursor-pointer '/>
        </div>
        <div className=" gap-2 p-2 justify-items-auto">
        <div
        className=" content-center pt-2 mb-2  text-white text-2xl font-semibold "
        
      >
      
      </div >
          {navList}
          </div>
         </div>
      </MobileNav>
     
    </div>
  )
}

export default Header
