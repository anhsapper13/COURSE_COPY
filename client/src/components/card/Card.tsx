import React from "react";
import { Card } from "antd";
import "./Card.css";
import createTransformer from "tailwind-group-variant"
import { CourseType } from "../../models/course";
const expandVariants = createTransformer()

type ListProps = {
  courseList : CourseType
}

const CardComponent: React.FC<ListProps> = ({courseList}) => {
  const {title,image,type, university } = courseList
  return (
    <Card
      className={expandVariants("w-[270px] h-[332px] hover:(shadow-lg cursor-pointer) lg:(w-[270] h-[104]) ")}
      cover={
        <img
          src={image}
          alt={title}
          className="!shadow-lg h-28  !object-cover !object-top"
        />
      }
    >
      <img
        src={university.logo}
        alt=""
        className="bg-white w-[116px] h-[66px] absolute -top-12 rounded-md shadow-xl"
      />

      <div className="h-32">
        <h4 className="font-bold">{title}</h4>
        <p className="font-light">{university.name}</p>
      </div>
      {/* Footer */}
      <div className="ant-card-footer flex justify-between items-center mt-4">
        <p className="bg-gray-300 rounded py-1 px-2">{type}</p>
        {/* <button className="bg-blue-500 text-white py-1 px-3 rounded">Enroll</button> */}
      </div>
    </Card>
  );
};

export default CardComponent;
