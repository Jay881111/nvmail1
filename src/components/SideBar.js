import React, { useState } from "react";
import "./SideBar.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InboxIcon from "@mui/icons-material/Inbox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArticleIcon from "@mui/icons-material/Article";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BlockIcon from "@mui/icons-material/Block";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

function SideBar() {
  const [open, setOpen] = useState(true);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="absolute sidebar top-[55px] text-[14px] border-r-[0.5px] bg-[#F6F7FA] w-[250px]">
      <div className="w-[250px] relative">
        <div className="flex items-center px-4 text-white pt-4">
          <Link
            className="w-[110px] bg-[#02c75a] rounded-l-[5px] text-center p-[7px]"
            to="/write"
          >
            메일 쓰기
          </Link>

          <Link className="w-[110px] bg-[#02c75a] border-l-[0.5px] rounded-r-[5px] p-[7px] text-center">
            내게 쓰기
          </Link>
        </div>
        {/* mail filter Icons */}
        <div className="flex items-center px-3 p-[10px] justify-around">
          <button className="text-center hover:text-[#0173E5]">
            <div className="text-[16px] hover:text-[#0173E5]">9</div>
            <div className="text-[11px] text-gray-500 mt-[2px]">안읽음</div>
          </button>
          <button className="text-center hover:text-[#0173E5]">
            <StarBorderIcon fontSize="small" className="hover:text-[#0173E5]" />
            <div className="text-[11px] text-gray-500 mt-[2px]">중요</div>
          </button>
          <button className="text-center hover:text-[#0173E5]">
            <AttachFileIcon fontSize="small" className="hover:text-[#0173E5]" />
            <div className="text-[11px] text-gray-500 mt-[2px]">첨부</div>
          </button>
          <button className="text-center hover:text-[#0173E5] hover:border-[#0173E5]">
            <div className="text-[5px] font-semibold border-[1.5px] hover:text-[#0173E5] hover:border-[#0173E5] rounded-[30px] w-[25px] border-black mt-[3px] ">
              To
            </div>
            <div className="text-[11px] text-gray-500 mt-[4px]">TO</div>
          </button>
        </div>
      </div>
      <div className="w-full border-b-[0.5px]" />
      {/* second list */}

      <div className="px-[18px] pt-[12px] pb-[8px]">
        <div className="flex items-center p-[5px] px-[6px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <div className="flex">
            <MailOutlineIcon fontSize="small" />
            <Link to="/" className="ml-1">
              전체메일
            </Link>
          </div>
          <button className="bg-[#FBFBFD] border-[0.5px] text-[11px] text-gray-500 rounded-[5px] text-center px-[7px] my-auto p-[2px] hover:border-[1px] hover:border-gray-300">
            정리하기
          </button>
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <button className="flex items-center">
            <InboxIcon fontSize="small" />
            <div className="ml-1">
              받은메일함 <span className="text-[#0173E5]">3</span>
            </div>
          </button>
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <button className="flex">
            <ChevronRightIcon fontSize="small" />
            <Link to="/sent" className="ml-1">
              보낸메일함
            </Link>
          </button>
          <button className="bg-[#FBFBFD] border-[0.5px] text-[11px] text-gray-500 rounded-[5px] text-center px-[7px] my-auto p-[2px] hover:border-[1px] hover:border-gray-300">
            수신확인
          </button>
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <button className="flex items-center">
            <InsertDriveFileIcon fontSize="small" />
            <div className="ml-1">임시보관함</div>
          </button>
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <div className="flex items-center">
            <ArticleIcon fontSize="small" />
            <button className="ml-1">내게쓴메일함</button>
          </div>
        </div>
      </div>
      <div className="w-full border-b-[0.5px]" />
      {/* 메일분류2 */}
      <div className="px-[18px] pt-[5px] pb-[8px]">
        <div className="flex p-[5px] px-[6px] hover:bg-gray-200 hover:rounded-[5px]">
          <button onClick={handleOpen} className="flex justify-between w-full">
            <div className="flex items-center">
              <ContentCopyIcon fontSize="small" />
              <div className="ml-1">스마트메일함</div>
            </div>
            <div className="flex items-center">
              <SettingsIcon fontSize="xs" />
              {open ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </div>
          </button>
        </div>
        {open ? (
          <>
            <div className="flex p-[5px] pt-[5px] mt-[6px] ml-[2px] text-[14px] hover:bg-gray-200 hover:rounded-[5px]">
              └<span className="ml-2">프로모션</span>
            </div>
            <div className="flex p-[5px] pt-[5px] mt-[5px] ml-[2px] text-[14px]  hover:bg-gray-200 hover:rounded-[5px]">
              └<span className="ml-2">청구&#183;결제</span>
            </div>
            <div className="flex p-[5px] pt-[5px] mt-[5px] ml-[2px] text-[14px]  hover:bg-gray-200 hover:rounded-[5px]">
              └<span className="ml-2">SNS</span>
            </div>
            <div className="flex p-[5px] pt-[5px] mt-[5px] ml-[2px] text-[14px]  hover:bg-gray-200 hover:rounded-[5px]">
              └<span className="ml-2">카페</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="w-full border-b-[0.5px]" />
      {/* 내 메일함 my mail */}
      <div className="flex p-3 items-center px-6 justify-between">
        <div className="text-[12.5px] font-[400] text-gray-500">내 메일함</div>
        <KeyboardArrowDownIcon fontSize="small" />
      </div>
      <div className="w-full border-b-[0.5px]" />
      {/* span and delete */}
      <div className="px-[19.5px] p-[2.5px]">
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <div className="flex">
            <BlockIcon sx={{ fontSize: 17.5 }} />
            <div className="ml-[6px]">
              <Link to="/spam">
                스팸메일함<span className="text-[#0173E5] ml-1">8</span>
              </Link>
            </div>
          </div>
          <div className="bg-[#FBFBFD] border-[0.5px] text-[11px] text-gray-500 rounded-[5px] text-center px-[12px] my-auto p-[2px]">
            비우기
          </div>
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <Link to="/bin" className="flex">
            <DeleteOutlineIcon fontSize="small" />
            <div className="ml-[4px]">
              휴지통<span className="text-[#0173E5] ml-1">8</span>
            </div>
          </Link>
          <div className="bg-[#FBFBFD] border-[0.5px] text-[11px] text-gray-500 rounded-[5px] text-center px-[12px] my-auto p-[2px]">
            비우기
          </div>
        </div>
      </div>
      <div className="w-full border-b-[0.5px]" />
      {/* 환경설정 등 기타 제반사항 */}
      <div className="px-5 p-2 text-[13px]">
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          환경설정
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          고객센터
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          <div>메일용량</div>
          <div>
            <span className="text-[#0173E5]">246MB</span> / 5GB
          </div>
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          공지사항
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          공지사항
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          공지사항
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          공지사항
        </div>
        <div className="flex items-center p-[5px] px-[6px] mt-[3.5px] justify-between hover:bg-gray-200 hover:rounded-[5px]">
          공지사항
        </div>
        <div className="text-gray-600 font-[400] text-[12px] px-2 mt-1">
          [안내] 네이버메일 코드 학습용입니다
        </div>
      </div>
    </div>
  );
}

export default SideBar;
