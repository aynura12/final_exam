import React from "react";
import "./header.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Swiper
        //   navigation={true}
          modules={[Autoplay,Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide className="swiper">
            <div className="swiper-left_side">
              <h3 id="swiper_title">ONLY EXQUISITE REFRESHING</h3>
              <p id="swiper_text">
                Phosfluorescently maintain impactful process.
              </p>
              <button id="swiper_btn">READ MORE</button>
            </div>
            <div className="swiper-right_side">
              <img
                style={{ width: "650px", height: "650px" }}
                src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image2.jpg"
                alt="swiper_img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <div className="swiper-left_side">
              <h3 id="swiper_title">ONLY EXQUISITE REFRESHING</h3>
              <p id="swiper_text">
                Phosfluorescently maintain impactful process.
              </p>
              <button id="swiper_btn">READ MORE</button>
            </div>
            <div className="swiper-right_side">
              <img
                style={{ width: "650px", height: "650px" }}
                src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg"
                alt="swiper_img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <div className="swiper-left_side">
              <h3 id="swiper_title">ONLY EXQUISITE REFRESHING</h3>
              <p id="swiper_text">
                Phosfluorescently maintain impactful process.
              </p>
              <button id="swiper_btn">READ MORE</button>
            </div>
            <div className="swiper-right_side">
              <img
                style={{ width: "650px", height: "650px" }}
                src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image2.jpg"
                alt="swiper_img"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
