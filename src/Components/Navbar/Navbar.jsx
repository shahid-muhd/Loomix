import React, { useState, useEffect,useRef } from "react";
import Hamburger from "./HamburgerMenu/Hamburger";
import {  animateScroll as scroll } from 'react-scroll'

import './Navbar.css'
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function Navbar() {

  const scollToRef = useRef();

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  let navLinksStyle = {
    color: "white",
    textDecoration: "none",
  };

const options={
  delay:0,
  smooth:true
}

  const ScrollToPosition =()=>{
    scroll.scrollTo(1600,options);

  }
  

  // Dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  

  // Dimensions

  return (
    <div>
      
      <div className="navContainer" >
        {dimensions.width > 880 ? (
          <nav className="navbar" >
           <a href="/" style={{textDecoration:'none'}}><div style={navLinksStyle} className="logo">
              Pro<span className="fed" >Stack</span>
            </div> </a> 

            <div className="navRightSide">
              <ul className="nav-links" >
                <div className="menu">
                  <li>
                    <a  href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a  href="/about">
                      About
                    </a>
                  </li>

                  <li onClick={()=>ScrollToPosition()} style={{cursor:'pointer'}}>
            
                 Services 
                    
                  </li>
                  <li>
                    <a  href="/contact">
                      Contact
                    </a>
                  </li>
                </div>
              </ul>

     
            </div>
          </nav>
        ) : (
     
            <Hamburger/>
        
        )}
      </div>
    </div>
  );
}

export default Navbar;
