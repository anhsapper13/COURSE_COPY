import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface DropDownProps {
  items: MenuProps["items"];
  handleClick: MenuProps["onClick"];
  selectedDropdown: string;
  selectedSection: JSX.Element;
}

const DropDown: React.FC<DropDownProps> = ({
  items,
  handleClick,
  selectedDropdown,
  selectedSection,
}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowSize >= 1024 ? (
        <div>
          <Menu
            onClick={handleClick}
            mode="horizontal"
            selectedKeys={[selectedDropdown]}
            defaultSelectedKeys={["Sharpen your skills"]} // Default selected key
            items={items}
            className="!border !border-solid !border-slate-100 !rounded-tr-xl rounded-tl-xl py-2.5"
          />
          <div>{selectedSection}</div>
        </div>
      ) : (
        <div>
          {/* Dropdown */}
          <Dropdown menu={{ items, onClick: handleClick }} trigger={["click"]}>
            <a className="!py-4" onClick={(e) => e.preventDefault()}>
              <Button className="!text-white !py-7 !font-light !text-base rounded-none !remove-border !w-full !bg-[#1F453D] md:text-medium md:!text-xl md:justify-between">
                <span>{selectedDropdown as string}</span>
                <span>
                  <DownOutlined />
                </span>
              </Button>
            </a>
          </Dropdown>
          {/* Description */}
          <div>{selectedSection}</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
