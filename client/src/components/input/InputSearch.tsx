import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ButtonComponent from "../button/button";
type SearchProps = {
  text: string;
  onChange: () => void;
  // setInputSearch: ()=> void
};

const InputSearch: React.FC<SearchProps> = ({ text, onChange }) => {
  return (
    <div className="flex flex-1 justify-center items-center">
      {/* INPUT SEARCH */}
      <div className="border-none md:border-solid border-neutral-950 border-2 rounded-md md:w-[258px]">
        <div className="flex p-2 justify-end md:justify-normal">
          <Input
            value={text}
            onChange={onChange}
            placeholder="What do you want to learn"
            className="remove-border hidden md:inline-block " 
          />
          <Button
            className="remove-border"
            variant="text"
            icon={
              <SearchOutlined style={{ fontSize: "20px", color: "gray" }} />
            }
          />
        </div>
      </div>
      {/* BUTTON SEARCH */}
      <div className="hidden">
        <ButtonComponent text={"Search"} shape="round" />
      </div>
    </div>
  );
};

export default InputSearch;
