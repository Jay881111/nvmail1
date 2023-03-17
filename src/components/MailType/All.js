import React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuIcon from '@mui/icons-material/Menu';
import Mail from './Mail';
import './All.css';
import SearchBar from '../Shared/SearchBar';

function All() {
    console.log('rendered');
    return (
        <div>
            <div className="flex w-full justify-between px-9 py-2 pb-5 text-[15px]">
                <div className="flex mt-1 items-center">
                    <span className="font-bold">전체메일</span>
                    <button className="text-[#0173E5] ml-2 font-semibold hover:underline">0</button>
                    <span className="ml-1">/</span>
                    <button className="text-[#767678] ml-1 font-semibold hover:underline">163</button>
                    <button className="ml-3 text-[14px] text-[#767678] hover:underline">안읽음 삭제</button>
                </div>
                <SearchBar />
            </div>
            <div className="px-7">
                <div className="flex py-[11px] h-[46px] pb-[11px] items-center border-t-[1px] border-b-[1px]">
                    <div className="flex ml-2 items-center">
                        <input type="checkbox" />
                        <ArrowDropDownIcon fontSize="xs" />
                    </div>
                    <div className="flex items-center justify-between w-[215px] pl-5 pr-5">
                        <button className="text-[#B2B2B4] cursor-default font-semibold">읽음</button>
                        <button className="text-[#B2B2B4] cursor-default font-semibold">삭제</button>
                        <button className="text-[#B2B2B4] cursor-default font-semibold">스팸차단</button>
                    </div>
                    <div className="flex items-center justify-between w-[215px] pl-5 pr-5 border-l-[1px] border-[#B2B2B4]">
                        <div className="text-[#B2B2B4] ">답장</div>
                        <div className="text-[#B2B2B4] ">전체답장</div>
                        <div className="text-[#B2B2B4] ">전달</div>
                    </div>
                    <div className="flex items-center justify-between w-[100%] pl-5 pr-5 border-l-[1px] border-[#B2B2B4]">
                        <div className="flex items-center w-[166px] justify-between">
                            <div className="flex items-center">
                                <div className="text-[#B2B2B4] ">이동</div>
                                <ArrowDropDownIcon fontSize="xs" />
                            </div>
                            <div className="flex items-center">
                                <div className="text-[#B2B2B4] ">더보기</div>
                                <ArrowDropDownIcon fontSize="xs" />
                            </div>
                            <button className="flex w-[55px] h-[28px] hover:border-[1px] rounded-[5px] border-gray-200">
                                <div className="flex items-center mx-auto my-auto">
                                    <div className="">필터</div>
                                    <ArrowDropDownIcon fontSize="xs" />
                                </div>
                            </button>
                        </div>
                        <div className="">
                            <AccessTimeIcon sx={{ color: 'black', fontSize: '18px' }} />
                            <ArrowDropDownIcon sx={{ color: 'black', fontSize: '18px' }} />
                            <MenuIcon sx={{ color: 'black', fontSize: '18px' }} />
                            <ArrowDropDownIcon sx={{ color: 'black', fontSize: '18px' }} />
                        </div>
                    </div>
                </div>
                {/* 이메일 디테일 */}
                <div className="emailList">
                    <Mail sender_email="email@email.com" senderID="email_sender" title="제목 1 입니다" />
                    <Mail sender_email="jay@jay.com" senderID="sender_Jay" title="제목 2 입니다" />
                    {/* <Mail />
          <Mail /> */}
                </div>
            </div>
        </div>
    );
}

export default All;
