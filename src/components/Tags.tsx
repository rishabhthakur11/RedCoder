import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
interface Props {
  tagTitle: string;
  toggleMenu: string[];
}

function Tags(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-5">
      <button
        className="px-4 py-2 text-textLightGray text-lg bg-boxBrown rounded-md focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
      >
        {props.tagTitle}
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-1/2 md:w-1/4 py-1 mt-1 bg-boxBrown  rounded-md shadow-md">
          {props.toggleMenu.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-lightBrown cursor-pointer"
              onClick={toggleDropdown}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tags;
