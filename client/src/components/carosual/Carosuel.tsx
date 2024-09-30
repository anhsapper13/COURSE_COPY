import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LOGO } from "./university-logo";
import CustomSlide from "../CustomSlide";

const Carousel: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center items-center p-8 md:px-10 md:py-4">
      <Slider {...settings}>
        {LOGO.map((logo, index) => {
          return (
            <div className="p-4" key={index}>
              <CustomSlide imageSlide={logo.url} className="p-1"  />
            </div>
          );
          0;
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
