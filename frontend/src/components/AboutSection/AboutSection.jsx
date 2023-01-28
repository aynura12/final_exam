import React from "react";
import "./about.scss";
const AboutSection = () => {
  return (
    <section className="container about">
      <h1 style={{ textAlign: "center", fontFamily: "Syne, sans-serif" }}>
        ABOUT US
      </h1>
      <div className="about_cards">
        <div className="row cards">
          <div className="col-3 first_card">
            <i class="fa-regular fa-heart"></i>
            <h4 id="card_title">MADE WITH LOVE</h4>
            <p id="card_content">
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </p>
          </div>
          <div className="col-3 second_card">
            <i class="fa-regular fa-face-smile"></i>
            <h4 id="card_title">FOR YOUR HAPPINESS</h4>
            <p id="card_content">
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </p>
          </div>
          <div className="col-3 third_card">
            <i class="fa-regular fa-sun"></i>
            <h4 id="card_title">NATURAL CARE</h4>
            <p id="card_content">
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
