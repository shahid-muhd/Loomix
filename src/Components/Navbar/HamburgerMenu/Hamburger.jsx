import React,{useState} from 'react'
import './Hamburger.css'
import {  animateScroll as scroll } from 'react-scroll'

function Hamburger() {
      const [hamState, setHamState] = useState(false)

    const clickHamIcon=()=>{
       setHamState(!hamState)
    }
   
  


    const ScrollToPosition =()=>{
      scroll.scrollTo(1600);
  
    }


  
  return (
    <div>

   
    <div className="hamburgerContainer">
     
    <a href="/" style={{textDecoration:'none'}}>
    <div style={{color:'white'}}  className="logo">
   
              Pro<span className="fed">Stack</span>
            </div>
</a>

    <div onClick={clickHamIcon} className="hamburgerIconContainer">
      
      <img className='hamburgerIcon' src={process.env.PUBLIC_URL + 'hamburgerIcon.svg'} alt="menu" />
    </div>
    </div>
    
{ hamState &&
    <div className="hamburgerMenuContainer">
    <ul className="hamNav-links" >
             
             
               <li>
                 <a className='hamMenuLink' href="/">Home</a>
               </li>
               <li>
                 <a className='hamMenuLink' href="/about">About</a>
               </li>

               <li onClick={()=>ScrollToPosition()}  >
                 <a className='hamMenuLink' >Services</a>
               </li>
               <li>
                 <a className='hamMenuLink' href="/contact">Contact</a>
               </li>
           
           </ul>
    </div>}
    </div>
  )
}

export default Hamburger