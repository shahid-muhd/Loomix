import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Sessions/About/About'
import Banner from '../../Sessions/Banner/Banner'
import Process from '../../Sessions/Process/Process'
import Services from '../../Sessions/Services/Services'


function Home() {
  return (
    <div className='homeContainer'>
   <header>
      
   


        <Banner/>
   </header>
        <About/>
        <section ref={Navbar.scollToRef} id='services'>

        <Services/>
        </section>

        <section>

      <Process/>
        </section>
        
    </div>

    
  )
}

export default Home