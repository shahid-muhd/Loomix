import React from "react";
import "./Process.css";
function Process() {
  return (
    <div className="processContainer">
      <div className="processOne">
        <div className="processOneContent  processContent">
          <img src={process.env.PUBLIC_URL + '/Images/strategy.svg'} alt="" />
          <h3 className="processHeadings">First We Plan</h3>
        <p> Its the strategies that make all the difference. Rather
          than just putting together pretty colour combinations, we develop
          strategies to help achieve the business outcomes you really want to
          happen. </p>
        </div>
        <div className="blank">blank</div>

      </div>

      <div className="processTwo">
      <div className="blank">blank</div>


        <div className="processTwoContent  processContent">
          <img src={process.env.PUBLIC_URL + '/Images/idea.svg'} alt="" />
          
          <h3 className="processHeadings" >Then We Create</h3>
         <p> With a clear plan in mind, we are able to create something magnificent
          that not only appeals visually, but is carefully crafted to have the
          biggest chance of a successful outcome.</p>
        </div>
      </div>

      <div className="processThree">
        <div className="processThreeContent   processContent">
          <img src={process.env.PUBLIC_URL + '/Images/grow.svg'} alt="" />
          <h3 className="processHeadings" >So You Grow</h3> 
          
         <p> With our signature blueprint approach, we help our clients
          successfully reach new heights in their businesses. Your business
          dreams can come true.</p>
        </div>
        <div className="blank">blank</div>
      </div>
    </div>
  );
}

export default Process;
