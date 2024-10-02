import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LOGO } from "./university-logo";
import CustomSlide from "./CustomSlide";
import { CustomArrow } from "./CustomArrow";


const Carousel: React.FC = () => {
  const slider = useRef<Slider>(null);
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-white p-8 md:px-10 md:py-4">
      <div className="relative mt-1">
        {/* Pass the slider reference to the CustomArrow component */}
        <CustomArrow sliderRef={slider} />
        <div className="">
          <Slider ref={slider} {...settings}>
            {LOGO.map((logo, index) => (
              <div className="p-4" key={index}>
                <CustomSlide imageSlide={logo.url} className="p-1" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="text-center font-extrabold text-base mb-8">
        Take online courses from{" "}
        <a className="link-primary">
          260+ world-class universities and companies
        </a>
      </div>
    </div>
  );
};

export default Carousel;
