import React from "react";

const LevelUp = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 text-lg border border-stone-200 bg-white">
      <div>
        <h3 className="mb-2 pb-5 font-bold text-3xl">
          Reach the next level of leadership
        </h3>
        <div>
          <p className="mb-4">
            <span className="link-primary font-bold">
              {" "}
              Executive education programs
            </span>{" "}
            prepare you to lead initiatives, teams, and organizations.
          </p>
          <ul className="list-disc pl-10 mb-4">
            <li>
              <p>
                Build advanced capabilities in career-relevant subjects like
                leadership, supply chain management, and sustainability.
              </p>
            </li>
            <li>
              <p>
                Learn, engage, and network with a small cohort of fellow
                professionals.
              </p>
            </li>
            <li>
              <p>
                Get personalized feedback and guidance from course tutors,
                student success advisors, and career coaches.
              </p>
            </li>
            <li>
              <p>
                Earn a valuable certificate of completion from leading
                universities.
              </p>
            </li>
          </ul>
        </div>
        <h5 className="italic">
          Seeking a degree? Explore{" "}
          <span className="link-primary font-bold ">master’s degrees</span> and{" "}
          <span className="link-primary font-bold ">doctorate degrees.</span>
        </h5>
      </div>
    </div>
  );
};

export default LevelUp;
