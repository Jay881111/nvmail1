import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function WriteContent() {
  return (
    <>
      <div className="flex items-center h-[30px] border-t-[1px] border-b-[1px] text-[12px] bg-gray-100">
        <div className="w-[117px] text-center">나눔고딕</div>
        <div className="w-4 ">
          <KeyboardArrowUpIcon
            className="block h-[1px] mt-2 w-2"
            sx={{ color: "black", fontSize: "12px" }}
          />
          <KeyboardArrowDownIcon
            className="block h-[1px] -mt-3 w-2"
            sx={{ color: "black", fontSize: "12px" }}
          />
        </div>
        <div className="flex h-full w-[100px] text-center items-center border-l-[1px] border-r-[1px] ">
          14px
        </div>
        <div className="flex w-[190px] justify-around h-full text-[15px] text-center items-center border-r-[1px] ">
          <div className="font-semibold">B</div>
          <div className="italic">I</div>
          <img
            src="https://cdn.icon-icons.com/icons2/2714/PNG/512/text_underline_thin_icon_171471.png"
            alt=""
            className="w-4 h-4"
          />
          <div className="line-through">S</div>
          <div className="">T</div>
          <div className="border-[1px] -ml-[8px] w-[20px]">T</div>
        </div>
      </div>
      <textarea className="w-full h-[450px]" />
    </>
  );
}

export default WriteContent;
