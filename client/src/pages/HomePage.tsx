import React from "react";
import ButtonComponent from "../components/button/button";
import InputSearch from "../components/input/InputSearch";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
      {/*SLIDER 1 */}
      <div></div>
      {/*SLIDER 1 */}
      <div></div>
    </div>
  );
};

export default HomePage;
