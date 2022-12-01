import "./AboutPage.css";
import React from "react";

function AboutPage() {
  return (
    <React.Fragment>
      <div className="AboutContainer ">
        <section className="mission">

          <h2>Our Mission</h2>
          <div className="missionContainer ">
          <div className="AbtLeft">
            <h3 style={{fontSize:'40px'}}>Powerful Solution For Your Startup Business</h3>
            <br />
            <br />

            <p>
              Being a professional web development company. Our mission is to
              provide customer-centric, result-oriented, cost-competitive
              innovative & functional IT Solutions to our valuable global
              clients. We believe we can help you grow your start-up business
              with our creativity and talent.
            </p>
          </div>

          <div className="AbtRight">
<img style={{maxWidth:'100% '}} src={process.env.PUBLIC_URL + '/Images/rocket.svg'} alt="" />

          </div>

          </div>
        </section >

        {/* <section style={{ backgroundColor: "#2a2929" }} className="ourClients">
          <div className="ourClientsContainer container">
            <h2>Our clients</h2>

            <div className="ourClientsBottomSec">
              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/nodejs.png"}
                  alt="Node JS"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">Node JS</h3>
              </div>

              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/react.png"}
                  alt="React JS"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">React JS</h3>
              </div>

              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/firebaseicon.png"}
                  alt="Firebase"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">Firebase</h3>
              </div>

              <div className="toolsImgHolder">
                <img
                  src={process.env.PUBLIC_URL + "/Images/figmaicon.png"}
                  alt="Figma"
                  className="toolsImg"
                />
                <h3 className="toolsImgTxt">Figma</h3>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </React.Fragment>
  );
}

export default AboutPage;
