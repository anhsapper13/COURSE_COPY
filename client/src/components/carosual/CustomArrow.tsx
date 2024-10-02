import React, { RefObject } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Slider from "react-slick";

type CustomArrowProps = {
  sliderRef?: RefObject<Slider>;
};

export const CustomArrow: React.FC<CustomArrowProps> = ({ sliderRef }) => {
  return (
    <div className="absolute w-full h-full flex items-center justify-between">
      <button
        className="p-2 z-[1] rounded-full bg-stone-100 shadow hover:bg-black hover:text-white"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <ArrowLeftOutlined style={{fontSize:"30px"}} />
      </button>

      <button
        className="p-2 z-[1] float-right bg-stone-100 rounded-full hover:bg-black hover:text-white"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <ArrowRightOutlined style={{fontSize:"30px"}} />
      </button>
    </div>
  );
};
