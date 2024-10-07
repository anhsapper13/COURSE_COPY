import React, { useState } from "react";
import DropDown from "../dropdown/DropDown";
import SharpenSkills from "./SharpenSkills";
import { MenuProps } from "antd";
import ChangeCareer from "./ChangeCareer";
import LevelUp from "./LevelUp";
import EarnADegree from "./EarnADegree";
import { itemsCourseSkill } from "../../constants/itemsMenu";

const Slider3 = () => {
  const [selectedDropdown, setSelectedDropdown] = useState("Sharpen your skills");
  const [selectedSection, setSelectedSection] = useState<JSX.Element>(
    <SharpenSkills />
  );

  const handleClick: MenuProps["onClick"] = (e) => {
    setSelectedDropdown(e.key);
    
    switch (e.key) {
      case "Sharpen your skills":
        setSelectedSection(<SharpenSkills />);
        break;
      case "Change careers":
        setSelectedSection(<ChangeCareer />);
        break;
      case "Level up as a leader":
        setSelectedSection(<LevelUp />);
        break;
      case "Earn a degree":
        setSelectedSection(<EarnADegree />);
        break;
      default:
        setSelectedSection(<SharpenSkills />);
        break;
    }
  };

  return (
    <div>
      <DropDown
        items={itemsCourseSkill}
        selectedDropdown={selectedDropdown}
        selectedSection={selectedSection}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Slider3;
