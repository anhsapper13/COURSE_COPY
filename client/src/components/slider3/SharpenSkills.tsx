import React from "react";
import ButtonComponent from "../button/button";
import { CourseList } from "../../models/course";
import CardComponent from "../card/Card";

const SharpenSkills: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 text-lg border border-stone-200 bg-white">
      <div className="">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-1/3">
            <h3 className="mb-2 pb-5 font-bold text-3xl">
              Hone your skills and explore your interests
            </h3>
            <div>
              <p className="mb-4">
                <span className="link-primary font-bold">
                  Professional certificates
                </span>{" "}
                help you deepen your expertise and build practical skills.
              </p>
              <ul className="list-disc pl-10 mb-4">
                <li>
                  <p>
                    Choose from 400+ programs in subjects like computer science,
                    software engineering, and leadership.
                  </p>
                </li>
                <li>
                  <p>
                    Earn a valuable credential you can use to showcase your
                    skills and share on professional profiles like LinkedIn.
                  </p>
                </li>
                <li>
                  <p>
                    Stack certificates to earn university credit and, if you
                    choose, build a pathway to a degree.
                  </p>
                </li>
                <li>
                  <p>
                    Learn on your schedule with flexible, self-paced program
                    curricula.
                  </p>
                </li>
              </ul>
            </div>
            <h5 className="italic">
              Honing your leadership skills? Explore{" "}
              <span className="link-primary font-bold ">
                executive education programs.
              </span>{" "}
            </h5>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center my-5 lg:w-2/3 lg:items-start ">
            {CourseList.map((list) => {
              return <CardComponent key={list.title} courseList={list} />;
            })}
          </div>
        </div>
        <ButtonComponent
          text="Register Now"
          shape="round"
          color="danger"
          className="!py-5 mt-4 hover:hover-bg-red"
        />
      </div>
    </div>
  );
};

export default SharpenSkills;
