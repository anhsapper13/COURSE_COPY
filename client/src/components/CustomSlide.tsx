import React from "react";

type CustomSlide = {
  className: string;
  imageSlide: string;
};
const CustomSlide: React.FC<CustomSlide> = ({ className, imageSlide }) => {
  return (
    <div className={className}>
      <img 
      src={imageSlide}
      className="mx-6 w-28 h-16 md:w-52 md:h-24"
      />
    </div>
  );
};

export default CustomSlide;
