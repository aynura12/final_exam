import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <section className="container contact">
      <div className="contact_left_side">
        <h3 id="contact_title">CONTACT US</h3>
        <p style={{ fontFamily: "EB Garamond, serif" , fontSize:"30px"}}>
          To get special offers to your email
        </p>
        <p id="contact">Amsterdam CA 90291</p>
        <p id="contact">email@site.com</p>
        <p id="contact">+1 (234) 56-78</p>
        <p id="contact">@natural.cosmetic</p>
      </div>
      <div className="contact_right_side">
        <form action="">
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />
        </form>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="contact_btn">SEND MESSAGE</button>
      </div>
    </section>
  );
};

export default Contact;
