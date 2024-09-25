import React from "react";
import { Image } from "antd";
import ButtonComponent from "../button/button";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import InputSearch from "../input/InputSearch";
const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-[75px]">
        {/* LEFT */}
        <div className="flex">
          {/* LOGO */}
          <Image src="./src/assets/edx-logo.jpg" width={100} height={64} />
          {/* SIDE BAR MOBILE */}
          <div></div>
          {/* SIDE BAR DESKTOP */}
          <div className="flex w-[402px]">
            <div>
              <ButtonComponent
                text={"Learn"}
                color={"default"}
                shape={"round"}
                variant={"solid"}
                icon={<DownOutlined style={{fontSize:"14px"}}/>}
              />
            </div>
            <InputSearch text={""} onChange={() => console.log("hi")} />
          </div>
          {/* SEARCH INPUT */}
        </div>
        {/* RIGHT */}
        <div className="flex">
          {/* EDX FOR BUSSINESS */}
          <div>
            <ButtonComponent
              text={"edx For Bussiness"}
              shape={"round"}
              variant={"solid"}
              className="!bg-white !shadow-none !text-black hover-bg-white"
            />
          </div>
          {/* AUTH  */}
          <div className="flex">
            {/* REGISTER */}
            <div>
              <ButtonComponent
                text={"Sign In"}
                shape={"round"}
                variant={"solid"}
                className="!bg-white !shadow-none !text-black hover-bg-white"
              />
            </div>

            {/* LOGIN */}
            <div>
              <ButtonComponent
                text={"Register for free"}
                shape={"round"}
                color="danger"
                variant={"solid"}
                className="hover-bg-red"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
