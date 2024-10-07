import React, { useCallback, useState } from "react";
import { Image } from "antd";
import ButtonComponent from "../button/button";
import { DownOutlined, UpOutlined, MenuOutlined } from "@ant-design/icons";
import InputSearch from "../input/InputSearch";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const naviagte = useNavigate()
  const [isHover, setIsHover] = useState<boolean>(false)
  //handle hover
  const handleHover =()=>{
    setIsHover(true)
  }
  const handleBlur =()=>{
    setIsHover(false)
  }
  const handleLogin = () =>{
    naviagte("/auth/login")
  }
  const handleRegister = () =>{
    naviagte("/auth/register")
  }
  return (
    <div>
      <div className="flex justify-between items-center h-[75px] ">
        {/* LEFT */}
        <div className="flex justify-between w-full lg:justify-normal">
          {/* SIDE BAR MOBILE */}
          <div className="mx-3">
            <div className="px-5 lg:hidden">
              {/* INSERT BUTTON HERE */}
              <ButtonComponent
                icon={<MenuOutlined style={{ fontSize: "20px" }} />}
                shape="circle"
                variant="text"
                className="hover:!bg-black hover:!text-white"
              />
            </div>
          </div>
          {/* LOGO */}
          <Image src="./src/assets/edx-logo.jpg" width={100} height={64} />

          {/* SIDE BAR DESKTOP */}
          <div className="flex lg:w-[402px]">
            <div className="hidden lg:block">
              <ButtonComponent
                text={"Learn"}
                color={"default"}
                shape={"round"}
                variant={"solid"}
                icon={isHover ?<UpOutlined style={{ fontSize: "14px" }} /> :<DownOutlined style={{ fontSize: "14px" }} />}
                className="!p-5"
                onHover={useCallback(handleHover,[])}
                onBlur={useCallback(handleBlur,[])}
              />
            </div>
            <InputSearch text={""} onChange={() => console.log("hi")} />
          </div>
          {/* SEARCH INPUT */}
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex">
          {/* EDX FOR BUSINESS */}
          <div className="px-3">
            <ButtonComponent
              text={"edx For Business"}
              shape={"round"}
              variant={"solid"}
              className="!p-5 !text-[#454545] !font-medium !text-sm !bg-white remove-border !text-black hover-bg-white"
            />
          </div>
          {/* AUTH  */}
          <div className="flex">
            {/* REGISTER */}
            <div className="px-3">
              <ButtonComponent
                text={"Sign In"}
                shape={"round"}
                variant={"solid"}
                className="!p-5 !text-[#454545] !font-medium !text-sm !bg-white remove-border !text-black hover-bg-white"
                onclick={handleRegister}
              />
            </div>
            {/* LOGIN */}
            <div className="px-3">
              <ButtonComponent
                text={"Register for free"}
                shape={"round"}
                color="danger"
                variant={"solid"}
                className="!p-5 !text-base hover-bg-red"
                onclick={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
