import React from "react";
import ButtonComponent from "../components/button/button";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Carousel from "../components/carosual/Carosuel";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* WRAPPER*/}
      {/*SLIDER 1 */}
      <div className="bg-black py-16 px-20 md:bg-[url('./src/assets/homepage.jpg')]">
        <div className="flex flex-col justify-center items-center md:flex md:justify-start md:items-start md:w-1/2">
          <div className="text-white mb-7">
            <h1 className="italic font-bold md:text-8xl">
              Bring your goals <span className="text-pink-300">into focus</span>
            </h1>
          </div>
          <h3 className="text-white font-bold mb-7">
            edX offers online courses and programs that prepare you for every
            career moment
          </h3>
          <div className="flex justify-between w-full md:w-[400px] ">
            <div className="bg-white rounded w-full">
              <div className="border-solid border-neutral-950 border-2 rounded  ">
                <div className="flex p-2 justify-end md:justify-normal ">
                  <Input
                    placeholder="Search for 4000+ courses"
                    className="remove-border w-full "
                  />
                  <Button
                    className="remove-border "
                    variant="text"
                    icon={
                      <SearchOutlined
                        style={{ fontSize: "20px", color: "gray" }}
                      />
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <ButtonComponent
                text={"Search"}
                shape="round"
                variant="solid"
                color="danger"
                className="p-[20px] hover-bg-red"
              />
            </div>
          </div>
        </div>
      </div>
      {/*SLIDER 2 */}
      <div className="">
        <Carousel />
      </div>
      {/*SLIDER 3 */}
      <div className="flex justify-center items-center px-4 py-10 md:px-10 md:py-16">
        {/* HEADER SLIDE 3 */}
        <div className="flex flex-col pb-8 lg:flex-row">
            <h2 className="basic-1/2 italic font-extrabold mr-8 mb-4 lg:text-6xl lg:w-1/2">
            You set the goal. We'll mark the path.
            </h2>
            <p className="basic-1/2 mb-4 text-xl lg:w-1/2 lg:mt-2 lg:mb-4">
            Career progress isn't always linear. So when your industry evolves or your plans change, edX is the education destination that works as hard as you. Explore thousands of job-relevant online courses that empower you to ramp up, reroute, or start fresh. We'll be with you every step of the way.
            </p>
        </div>
        {/* CONTENTS SLIDE 3 */}
        <div>
          
        </div>
        
      </div>
      {/*SLIDER 1 */}
      <div></div>
      {/*SLIDER 1 */}
      <div></div>
      {/*SLIDER 1 */}
      <div></div>
      {/*SLIDER 1 */}
      <div></div>
      {/*SLIDER 1 */}
      <div></div>
      {/*SLIDER 1 */}
      <div></div>
      {/*SLIDER 1 */}
      <div></div>
    </div>
  );
};

export default HomePage;
