import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { writeEmailConText } from "../WriteEmail";

//현재사용중 아님
function WriteHeader(title) {
  const { handleSubmit } = useContext(writeEmailConText);
  // console.log("title", title);
  const onSubmit = (title) => {
    handleSubmit("헤더작동", title);
  };
  return (
    <div>
      <div className="relative flex w-full justify-between px-9 py-1 pb-5 text-[15px]">
        <div className="flex items-center">
          <span className="text-[16px] font-bold">메일쓰기</span>

          <button className="ml-3 text-[14px] text-[#767678] hover:underline">
            임시보관 메일
            <span className="ml-1">1</span>
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
      <div className="px-6">
        <div className="flex border-t-[1px] border-[#d0d0d6] border-b-[1px] h-11">
          <div className="flex items-center justify-between w-[36%] pl-2 pr-5 ">
            <button
              onClick={onSubmit}
              className="border-[1px] border-[#02C75A] text-[#02C75A] font-[700] py-[2px] w-[55px] rounded-[5px]"
            >
              보내기
            </button>
            <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[46px] hover:border-[#d2d2d2]">
              예약
            </button>
            <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[65px] hover:border-[#d2d2d2]">
              임시저장
            </button>
            <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[65px] hover:border-[#d2d2d2]">
              미리보기
            </button>
            <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[55px] hover:border-[#d2d2d2]">
              템플릿
            </button>
            <button className="flex px-[11px] font-semibold items-center">
              <SyncAltIcon sx={{ color: "black", fontSize: "15px" }} />
              내게쓰기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteHeader;
