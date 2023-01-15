import React from 'react'
import './Banner.css'
import { Fade , Slide} from "react-awesome-reveal";

function Banner() {
  return (
    <div className="bannerContainer ">
      
    <div className="bannerTxt">
    <Slide direction='up' cascade damping={0.1}> 
      <h1 className="bannerHeading " >

      SCALE UP YOUR BUSINESS
      </h1>
     <br />
     <h3>
      <span className='fed'>
      your complete digital expert
      </span>
     </h3>
    <br />
   <a style={{textDecoration:'none'}} href="/contact"> <button className="joinBtn">
    <span> join us </span>  
    </button>
    </a>
    </Slide>
    </div>


   
  </div>
  )
}

export default Banner