import React from "react";
import Mail from "./Mail";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

function Bin() {
  return (
    <div>
      <div className="relative flex w-full justify-between px-9 py-2 pb-5 text-[15px]">
        <div className="flex mt-1 items-center">
          <span className="font-bold">휴지통</span>
          <button className="text-[#0173E5] ml-1 font-semibold hover:underline">
            163
          </button>
          <button className="ml-3 text-[14px] text-[#767678] hover:underline">
            안읽음 삭제
          </button>
        </div>
        <div className="w-[290px] h-[30px] p-4 rounded-[15px] flex items-center bg-[#F0F1F6]">
          <input
            className="bg-[#F0F1F6] p-2 w-[191px] items-center text-[14px] h-full"
            placeholder="메일검색"
          />

          <div className="text-gray-400 ml-2 mx-auto text-[14px] flex items-center">
            상세
          </div>
        </div>
      </div>
      {/*  */}
      <div className="px-7">
        <div className="flex py-[11px] h-[46px] pb-[11px] items-center border-t-[1px] border-b-[1px]">
          <div className="flex ml-2 items-center">
            <input type="checkbox" />
            <ArrowDropDownIcon sx={{ fontSize: "17px" }} />
          </div>
          <div className="flex items-center justify-between w-[200px] pl-5 pr-5">
            <button className="text-[#B2B2B4] cursor-default font-semibold">
              읽음
            </button>
            <button className="text-[#B2B2B4] cursor-default font-semibold">
              영구삭제
            </button>
            <button className="text-[#B2B2B4] cursor-default font-semibold">
              스팸차단
            </button>
          </div>
          <div className="flex items-center justify-between w-[1000px] pl-5 pr-5 border-l-[1px] border-[#B2B2B4]">
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
            <div className="align-right">
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

export default Bin;
