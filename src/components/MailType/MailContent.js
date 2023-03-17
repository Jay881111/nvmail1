import "../Header.css";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useLocation } from "react-router-dom";
import PrintIcon from "@mui/icons-material/Print";

function MailContent() {
  const location = useLocation();
  const { senderID, title, contents, createdDetail } = location.state;
  console.log("contents", contents);

  const handleFold = (e) => {
    e.preventDefault();
    setShowSender(!showSender);
  };
  const [showSender, setShowSender] = useState(true);
  return (
    <div>
      <div className="relative flex w-full justify-between px-9 py-2 pb-5 text-[15px]">
        <div className="flex mt-1 items-center">
          <Link to="/">
            <KeyboardArrowLeftIcon sx={{ fontSize: "29px" }} />
          </Link>
          <span className="font-bold">전체메일</span>
          <button className="text-[#0173E5] ml-2 font-semibold hover:underline">
            0
          </button>
          <span className="ml-1">/</span>
          <button className="text-[#767678] ml-1 font-semibold hover:underline">
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
          <div className="flex items-center justify-between w-[215px] pl-5 pr-5">
            <Link
              to={{ pathname: `/write` }}
              state={{ senderID }}
              className="flex -ml-[15px] w-[51px]  h-[28px] hover:border-[1px] rounded-[5px] border-gray-200"
            >
              <div className="flex items-center mx-auto my-auto">
                <div className="font-semibold">답장</div>
              </div>
            </Link>
            <Link
              state={{ senderID }}
              className="flex w-[80px]  h-[28px] hover:border-[1px] rounded-[5px] border-gray-200"
            >
              <div className="flex items-center mx-auto my-auto">
                <div className="font-semibold">전체답장</div>
              </div>
            </Link>{" "}
            <Link
              to={{ pathname: `/write` }}
              state={{ senderID }}
              className="flex w-[51px]  h-[28px] hover:border-[1px] rounded-[5px] border-gray-200"
            >
              <div className="flex items-center mx-auto my-auto">
                <div className="font-semibold">전달</div>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between w-[215px] pl-5 pr-5 border-l-[1px] border-[#B2B2B4]">
            <div className="">삭제</div>
            <div className="">스팸차단</div>
            <div className="">안읽음</div>
          </div>
          <div className="flex items-center justify-between w-[900px] pl-5 pr-5 border-l-[1px] border-[#B2B2B4]">
            <div className="flex items-center w-[106px] justify-between">
              <div className="flex items-center">
                <div className="text-[#B2B2B4] ">이동</div>
                <ArrowDropDownIcon fontSize="xs" />
              </div>
              <div className="flex items-center">
                <div className="text-[#B2B2B4]">더보기</div>
                <ArrowDropDownIcon fontSize="xs" />
              </div>
            </div>
            <div className="flex">
              <div>목록</div>
              <KeyboardArrowUpIcon />
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <div className="flex mt-3 items-center">
          <div className="flex w-full">
            <div className="flex items-center">
              <StarBorderIcon sx={{ fontSize: "19px" }} />
              <h1>{title}</h1>
              <DynamicFeedIcon className="mr-10" sx={{ fontSize: "13px" }} />
            </div>
          </div>
          <div className="flex w-[120px] justify-between text-[#767678]">
            <div className="flex items-center  w-[63px] border-r-[1px]">
              <PrintIcon sx={{ fontSize: "19px" }} />
              <span className="ml-[3px]">인쇄</span>
            </div>
            <div className="">번역</div>
          </div>
        </div>
        <div className="flex p-[8px] items-center">
          <button onClick={handleFold}>
            {showSender ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </button>

          <div className="p-1">보낸사람</div>
          <button className="hover:bg-blue-100 hover:underline ml-1 px-2 py-1 rounded-[15px] bg-blue-50">
            {senderID}&#60;id@email.com&#62;
          </button>
          <button className="hover:font-semibold text-[13px] p-1 ml-1 border-[1px] text-center rounded-[15px] w-[42px]">
            VIP
          </button>
        </div>
        {showSender ? (
          <div>
            <div className="flex ml-6 px-[8px] items-center">
              <div className="p-1">받는사람</div>

              <button className="hover:bg-blue-100 hover:underline ml-1 px-2 py-1 rounded-[15px] bg-blue-50">
                ID&#60;id@email.com&#62;
              </button>
            </div>
            <div className="p-3 pl-9 text-gray-500 text-[12.5px]">
              {createdDetail}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-full p-4 border-t-[1px]">{contents}</div>
      </div>
    </div>
  );
}

export default MailContent;
