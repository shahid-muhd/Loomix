import React from "react";
import "./About.css";
import { Slide } from "react-awesome-reveal";

function About() {
  return (
    <div>
      <section className="whoSec">
        <div className="whoContainer">
          <div className="whoLeft">
            <h2 className="whoTxt" style={{ marginTop: "5%" }}>
              Who We <br />
              Are ?
            </h2>
          </div>

          <div className="whoRight">
            <p>
              We are digital marketers. We are here to help you grow your
              business online.
              <br /> <br />
              We deliver outstanding websites and digital marketing strategies.
            </p>
       <a href="/about"> <button className="moreBtn">
        More About Us <i class="fas fa-arrow-right"></i>
        </button>
        </a>
          </div>
     
        </div>

      </section>

      {/* TOOLS */}

      <section style={{ backgroundColor: "#2a2929" }} className="tools">
        <div className="toolsContainer container">
          <h2>We use modern tech stack</h2>

          <div className="toolsBottomSec">
            <Slide>
              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/nodejs.png"}
                  alt="Node JS"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">Node JS</h3>
              </div>
            </Slide>

            <Slide>
              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/react.png"}
                  alt="React JS"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">React JS</h3>
              </div>
            </Slide>

            <Slide direction="right">
              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/firebaseicon.png"}
                  alt="Firebase"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">Firebase</h3>
              </div>
            </Slide>

            <Slide direction="right">
              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/figmaicon.png"}
                  alt="Figma"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">Figma</h3>
              </div>
            </Slide>
          </div>
        </div>
      </section>

     
 
    </div>
  );
}

export default About;
