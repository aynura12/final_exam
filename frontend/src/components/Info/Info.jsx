import React from "react";
import "./info.scss";
const Info = () => {
  return (
    <div className="info container">
      <div className="info_img">
        <img
          src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg"
          alt="info"
        />
      </div>
      <div className="info_content">
        <h1 id="info_title">DEVOTED TO WONDERFUL BEAUTY</h1>
        <p style={{ fontFamily: "EB Garamond, serif", fontSize:"25px" }}>
          With 30-minute premium treat
        </p>
        <p id="info_text">
          Phasellus faucibus vehicula rutrum in ante ligula vel arcu quis
          lacinia posuere metus eget ligula ipsum maximus lobortis nec
          imperdiet.
        </p>
        <button id="info_btn">READ MORE</button>
      </div>
    </div>
  );
};

export default Info;
