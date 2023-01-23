import React,{useState} from 'react'
import './Hamburger.css'


function Hamburger() {
      const [hamState, setHamState] = useState(false)

    const clickHamIcon=()=>{
       setHamState(!hamState)
    }
   
  


  


  
  return (
    <div>

   
    <div className="hamburgerContainer">
     
    <a href="/" style={{textDecoration:'none'}}>
    <div style={{color:'white'}}  className="logo">
   
              LOOMI<span className="fed">X</span>
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

               <li  >
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