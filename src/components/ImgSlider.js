import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Slider1 from "../images/slider-badging.jpg";
import Slider2 from "../images/slider-badag.jpg";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: 1,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={Slider1} alt="" />
      </Wrap>
      <Wrap>
        <img src={Slider2} alt="" />
      </Wrap>
    </Carousel>
  );
};
const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
  }
  &:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;
export default ImgSlider;
