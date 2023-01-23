import React, { useState, useEffect } from "react";
import Hamburger from "./HamburgerMenu/Hamburger";


import './Navbar.css'


function Navbar() {

  

  let navLinksStyle = {
    color: "white",
    textDecoration: "none",
  };

const options={
  delay:0,
  smooth:true
}

  
  

 
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

  



  return (
    <div>
      
      <div className="navContainer" >
        {dimensions.width > 880 ? (
          <nav className="navbar" >
           <a href="/" style={{textDecoration:'none'}}><div style={navLinksStyle} className="logo">
              LOOMI<span className="fed" >X</span>
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

                  <li  style={{cursor:'pointer'}}>
            
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
