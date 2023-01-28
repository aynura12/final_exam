import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <img
          src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png"
          alt="footer_icon"
        />
        <ul className="page">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">PRODUCTS</a>
          </li>
          <li>
            <a href="#">TERMS</a>
          </li>
          <li>
            <a href="#">POLICY</a>
          </li>
        </ul>
        <ul className="social_medias">
          <li>
            <a href="#">INSTAGRAM</a>
          </li>
          <li>
            <a href="#">TWITTER</a>
          </li>
          <li>
            <a href="#">FACEBOOK</a>
          </li>
          <li>
            <a href="#">PINTEREST</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
        </ul>
        <div className="subrscribe">
          <h6 id="subs-title">SUBSCRIBE TO OUR NEWSLETTER</h6>
          <input id="subs_input" type="email" placeholder="Your Email" />
          <button id="subs_btn">SEND</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
