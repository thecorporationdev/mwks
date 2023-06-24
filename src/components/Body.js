
import ImageSlide from './ImageSlide'
import ImageStack from './ImageStack'
import ImageStackii from './ImageStackii'
import img1 from "../images/img1.png"
import ImageStackx from './ImageStackx'

import { useState, useEffect } from 'react'





const Body = ({ openNav, setOpenNav}) => {
 
  return (
    
    <div className= {openNav ? "open" : "close"} >
      <div>
      <div>
      <ImageStackx />
      </div>
        
      <div >
         <ImageStack />
      </div>
      <div>
        <ImageStackii />
      </div>
      <div className='mb-40'>
       <ImageSlide />
      </div>
     
     
      </div>
    
    </div>
  )
}

export default Body
