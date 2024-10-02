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
      className="my-6 w-[201px] h-[101px] md:w-[164px] md:h-[83px] lg:w-[130px] lg:h-[70px]"
      style={{backgroundColor:"transparent"}}
      />
      
    </div>
  );
};

export default CustomSlide;
