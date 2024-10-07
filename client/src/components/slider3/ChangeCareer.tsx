import React from "react";
import CardComponent from "../card/Card";
import ButtonComponent from "../button/button";
import { CourseList } from "../../models/course";
// import createTransformer from "tailwind-group-variant";
// const expandVariants = createTransformer();

const ChangeCareer = () => {
  return (
    <div>
      {/* 1 */}
      <div className="flex justify-center items-center py-8 px-4 text-lg border border-stone-200 bg-white">
        <div>
          <div className="flex flex-col justify-between lg:flex-row">
            {/* 1 */}
            <div className="lg:w-1/3">
              <h3 className="mb-2 pb-5 font-bold text-3xl">
                Launch, change, or advance your career
              </h3>
              <div>
                <p className="mb-4">
                  <span className="link-primary font-bold">Boot camps</span>{" "}
                  prepare you to start or advance your career in technical
                  fields.
                </p>
                <ul className="list-disc pl-10 mb-4">
                  <li>
                    <p>
                      Build in-demand skills in AI, cybersecurity, coding, and
                      more.
                    </p>
                  </li>
                  <li>
                    <p>
                      Develop a professional portfolio to share with prospective
                      employers.
                    </p>
                  </li>
                  <li>
                    <p>
                      Choose from full- and part-time options, and night and
                      weekend classes.
                    </p>
                  </li>
                  <li>
                    <p>
                      Earn a university-backed certificate in 12, 18, or 24
                      weeks.
                    </p>
                  </li>
                  <li>
                    <p>
                      Access career coaching and job referrals from a network of
                      250+ employers.
                    </p>
                  </li>
                </ul>
              </div>
              <h5 className="italic mb-4">
                Strengthening your résumé? Explore{" "}
                <span className="link-primary font-bold ">
                  professional certificates
                </span>
              </h5>
            </div>
            {/* 2 */}
            <div className="flex flex-wrap gap-6 justify-center items-center my-5 lg:w-2/3 lg:items-start ">
                {CourseList.map((list) => {
                  return <CardComponent key={list.title} courseList={list}/>
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
      {/* 2 */}
      {/* 3 */}
    </div>
  );
};

export default ChangeCareer;
