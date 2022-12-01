import React from "react";
import "./Services.css";
import { Slide } from "react-awesome-reveal";
function Services() {
  return (
    <React.Fragment>
      <section className="services">
        <div className="serviceContainer">
          <h2>Our Services</h2>
        </div>

        <div className="servicesBottom">

          <div class="main-container">
            <div class="cards">
              <div class="card card-1">
                <div class="card__icon">
                  <i class="fas fa-bolt"></i>
                </div>

                <h2 class="card__title">Web Design</h2>

                <p class="card__apply"></p>
              </div>

              <div class="card card-2">
                <div class="card__icon">
                  <i class="fas fa-bolt"></i>
                </div>

                <h2 class="card__title">Web Development.</h2>
                <p class="card__apply"></p>
              </div>

              <div class="card card-3">
                <div class="card__icon">
                  <i class="fas fa-bolt"></i>
                </div>

                <h2 class="card__title">SEO.</h2>
                <p class="card__apply"></p>
              </div>

              <div class="card card-4">
                <div class="card__icon">
                  <i class="fas fa-bolt"></i>
                </div>

                <h2 class="card__title">Digital Marketing</h2>
                <p class="card__apply"></p>
              </div>
            </div>
          </div>
     
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
