import "../Header.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Mail from "./Mail";

function SentMail() {
  console.log("rendered");
  return (
    <div>
      <div className="relative flex w-full justify-between px-9 py-2 pb-5 text-[15px]">
        <div className="flex mt-1 items-center">
          <span className="font-bold">보낸메일함</span>
          <button className="text-[#0173E5] ml-2 font-semibold hover:underline">
            0
          </button>
          <span className="ml-1">/</span>
          <button className="text-[#767678] ml-1 font-semibold hover:underline">
            163
          </button>
        </div>
        <div className="w-[290px] h-[30px] p-4 rounded-[15px] flex items-center bg-[#F0F1F6]">
          <input
            className="bg-[#F0F1F6] p-2 w-[191px] items-center text-[14px] h-full"
            placeholder="메일검색"
          />
          <SearchIcon
            className=" border-r-[1px] border-gray-200"
            sx={{ color: "#B7B8BD", fontSize: 20 }}
          />
          <div className="text-gray-400 ml-2 mx-auto text-[14px] flex items-center">
            상세
            <KeyboardArrowDownIcon fontSize="xs" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="px-7">
        <div className="flex py-[11px] h-[46px] pb-[11px] items-center border-t-[1px] border-b-[1px]">
          <div className="flex ml-2 items-center">
            <input type="checkbox" />
            <ArrowDropDownIcon fontSize="xs" />
          </div>
          <div className="flex items-center justify-between w-[215px] pl-5 pr-5">
            <button className="text-[#B2B2B4] cursor-default font-semibold">
              읽음
            </button>
            <button className="text-[#B2B2B4] cursor-default font-semibold">
              삭제
            </button>
            <button className="text-[#B2B2B4] cursor-default font-semibold">
              스팸차단
            </button>
          </div>
          <div className="flex items-center justify-between w-[215px] pl-5 pr-5 border-l-[1px] border-[#B2B2B4]">
            <div className="text-[#B2B2B4] ">답장</div>
            <div className="text-[#B2B2B4] ">전체답장</div>
            <div className="text-[#B2B2B4] ">전달</div>
          </div>
          <div className="flex items-center justify-between w-[900px] pl-5 pr-5 border-l-[1px] border-[#B2B2B4]">
            <div className="flex items-center w-[166px] justify-between">
              <div className="flex items-center">
                <div className="text-[#B2B2B4] ">이동</div>
                <ArrowDropDownIcon fontSize="xs" />
              </div>
              <div className="flex items-center">
                <div className="text-[#B2B2B4] ">더보기</div>
                <ArrowDropDownIcon fontSize="xs" />
              </div>
              <button className="flex items-center hover:border-[1px] p-[1px] rounded-[5px] border-gray-200">
                <div className="pl-[8px]">필터</div>
                <ArrowDropDownIcon className="pr-[4px]" fontSize="small" />
              </button>
            </div>
            <div className="">
              <MenuIcon sx={{ color: "black", fontSize: "18px" }} />
              <ArrowDropDownIcon sx={{ color: "black", fontSize: "18px" }} />
            </div>
          </div>
        </div>
        {/* 이메일 디테일 */}
        <Mail />
        <Mail />
        <Mail />
      </div>
    </div>
  );
}

export default SentMail;
