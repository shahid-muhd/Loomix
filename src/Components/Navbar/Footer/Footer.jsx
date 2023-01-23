import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-instagram" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-12 col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"></div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <a
                  href="/sitemap"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {" "}
                  <h4 className="text-uppercase fw-bold">Sitemap</h4>{" "}
                </a>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                
                <div style={{display:'flex', justifyContent:'space-between'}}>

                <p>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-white">
                    About
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-white">
                    Contact
                  </a>
                </p>
                </div>
             
              </div>
              {/* Grid column */}
              {/* Grid column */}
              {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="#!" className="text-white">About</a>
            </p>
            <p>
              <a href="#!" className="text-white">Services</a>
            </p>
            <p>
              <a href="#!" className="text-white">Contact</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div> */}
              {/* Grid column */}
              {/* Grid column */}
              <div  className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h5 className="text-uppercase fw-bold">Contact</h5>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <i className="fas fa-home mr-3" /> Loomix Digital Solutions, Tradelinks And
                  Services, Pandalam, Pathanamthitta, Kerala - 689515
                </p>
                <a href="mailto:prostack21@gmail.com">
                  {" "}
                  <p>
                    <i className="fas fa-envelope mr-3" /> prostack21@gmail .com
                  </p>
                </a>
                <p>
                  <i className="fas fa-phone mr-3" /> +91 8089851572
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          <div style={{ paddingLeft: "10%" , paddingRight:'10%'}}>
            <iframe
            title="map"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5650.732651747673!2d76.67774568320411!3d9.209701839244211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x63cf71df98b8454d%3A0x8275557d13256c51!2sProStack!5e0!3m2!1sen!2sin!4v1668753181399!5m2!1sen!2sin"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}

        {/* Copyright */}
      </footer>
      {/* Footer */}

      {/* End of .container */}
    </div>
  );
}

export default Footer;
