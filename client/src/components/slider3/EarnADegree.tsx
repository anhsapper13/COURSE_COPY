import React from "react";
import { CourseList } from "../../models/course";
import CardComponent from "../card/Card";
import ButtonComponent from "../button/button";

const EarnADegree = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 text-lg border border-stone-200 bg-white">
      <div>
        <div className="flex flex-col justify-between lg:flex-row">
          {/* 1 */}
          <div className="lg:w-1/3">
            <h3 className="mb-2 pb-5 font-bold text-3xl">
              Open new doors with a degree
            </h3>
            <div>
              <p className="mb-4">
                <span className="link-primary font-bold">
                  {" "}
                  Master’s degrees, doctorate degrees, and undergraduate degrees
                </span>{" "}
                help you unlock career opportunities.{" "}
                <span className="font-bold">
                  Flexible schedules and financial aid available.
                </span>
              </p>
              <ul className="list-disc pl-10 mb-4">
                <li>
                  <p>
                    Learn from renowned faculty at the world’s best
                    universities.
                  </p>
                </li>
                <li>
                  <p>
                    Discover programs with flexible schedules, designed
                    specifically for working professionals.
                  </p>
                </li>
                <li>
                  <p>
                    Apply with the help of a dedicated admissions counselor.
                  </p>
                </li>
                <li>
                  <p>
                    Get ongoing student and academic support, as well as 24/7
                    technical support.
                  </p>
                </li>
                <li>
                  <p>
                    Connect with university alumni networks and career services.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/*  2 */}
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
            className="!py-5 hover:hover-bg-red"
          />
      </div>
    </div>
  );
};

export default EarnADegree;
