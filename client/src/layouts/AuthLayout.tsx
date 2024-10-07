import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, MenuProps } from "antd";
import "./menuItems.css";

const AuthLayout = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>(
    location.pathname === "/auth/login" ? "Login" : "Register"
  );

  useEffect(() => {
    setSelectedKey(location.pathname === "/auth/login" ? "Login" : "Register");
  }, [location.pathname]);

  const authNavigation: MenuProps["items"] = [
    {
      label: <NavLink to={"/auth/register"}>Register</NavLink>,
      key: "Register",
      className:
        "!text-xl !text-[#454545] !flex !items-center after:-mb-2.5 hover:after:!border-[#454545]  focus:after:!border-[#454545]",
    },
    {
      label: <NavLink to={"/auth/login"}>Login</NavLink>,
      key: "Login",
      className:
        "!text-xl !text-[#454545] !flex !items-center after:-mb-2.5 hover:after:!border-[#454545] focus:after:!border-[#454545]",
    },
  ];
  return (
    <div className="">
      {/* Header */}
      <div className="bg-gradient-sm h-1 md:bg-gradient-md md:h-2"></div>
      <div className="flex n flex-col lg:flex-row lg:min-h-screen">
        <div className=" md:flex lg:w-1/2">
          <div className="w-full  p-2 bg-[#0e3639] md:w-3/4   ">
            <NavLink to={"/"}>
              <img
                src="../src/assets/edx-logo-registered-white.webp"
                alt="Home page"
                className="w-14 ms-6 mt-6 md:w-18 md:h-18 lg:w-20"
              />
            </NavLink>
            <div className="m-6 flex items-center p-6 lg:m-0 lg:h-screen lg:!pb-20">
              {/* duong cheo */}
              <div className="border-2 border-[#f0cc00] w-[80px] h-0 rotate-[103deg] md:w-[160px] md:border-4 lg:w-[400px] "></div>
              <h2 className="text-white font-medium -ml-5 md:text-6xl md:font-bold lg:text-7xl">
                Start learning <span className="text-sky-300">with edX</span>
              </h2>
            </div>
            {/* retangle */}
          </div>
          {/* Retangle */}
          <svg className="hidden md:w-1/4 md:block" fill="#0e3639">
            <g transform="skewX(170)">
              <rect x={0} y={0} width="100%" height="100%"></rect>
            </g>
          </svg>
        </div>

        {/* Body */}
        <div className="flex justify-center mt-16 lg:w-1/2">
          <div className="w-full sm:w-[500px] lg:w-[450px]">
            <div className="flex justify-center">
              <Menu
                items={authNavigation}
                mode="horizontal"
                defaultSelectedKeys={[selectedKey]}
                style={{ width: "500px", padding: "10px" }}
                className=""
              ></Menu>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
