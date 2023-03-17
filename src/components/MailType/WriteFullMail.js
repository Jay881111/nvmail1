import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './WriteEmail.css';
import SearchIcon from '@mui/icons-material/Search';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

function WriteDetail() {
    const [showFile, setShowFile] = useState(true);
    const [title, setTitle] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [receiver, setReceiver] = useState('');
    const [newReceiver, setNewReceiver] = useState('');

    const handleShow = (e) => {
        e.preventDefault();
        setShowFile(!showFile);
        console.log(showFile);
    };

    const [isChecked, setIsChecked] = useState(true);

    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
    };

    const [mailBody, setMailBody] = useState('');
    const [newMailBody, setNewMailBody] = useState('');

    const onSend = (e) => {
        e.preventDefault();
        setReceiver(newReceiver);
        setTitle(newTitle);
        setMailBody(newMailBody);
        console.log('receiver:', receiver);
        console.log('Title:', title);
        console.log('mailBody:', mailBody);
    };

    return (
        <>
            <div className="relative flex w-full justify-between px-9 py-1 pb-5 text-[15px]">
                <div className="flex items-center">
                    <span className="text-[16px] font-bold">메일쓰기</span>

                    <button className="ml-3 text-[14px] text-[#767678] hover:underline">
                        임시보관 메일
                        <span className="ml-1">1</span>
                    </button>
                </div>
                <div className="w-[290px] h-[30px] p-4 rounded-[15px] flex items-center bg-[#F0F1F6]">
                    <input className="bg-[#F0F1F6] p-2 w-[191px] items-center text-[14px] h-full" placeholder="메일검색" />
                    <SearchIcon className=" border-r-[1px] border-gray-200" sx={{ color: '#B7B8BD', fontSize: 20 }} />
                    <div className="text-gray-400 ml-2 mx-auto text-[14px] flex items-center">
                        상세
                        <KeyboardArrowDownIcon fontSize="xs" />
                    </div>
                </div>
            </div>
            <div className="px-6">
                <div className="flex border-t-[1px] border-[#d0d0d6] border-b-[1px] h-11">
                    <div className="flex items-center justify-between w-[36%] pl-2 pr-5 ">
                        <button onClick={onSend} className="border-[1px] border-[#02C75A] text-[#02C75A] font-[700] py-[2px] w-[55px] rounded-[5px]">
                            보내기
                        </button>
                        <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[46px] hover:border-[#d2d2d2]">예약</button>
                        <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[65px] hover:border-[#d2d2d2]">임시저장</button>
                        <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[65px] hover:border-[#d2d2d2]">미리보기</button>
                        <button className="hover:border-[1px] py-[2px] rounded-[5px] w-[55px] hover:border-[#d2d2d2]">템플릿</button>
                        <button className="flex px-[11px] font-semibold items-center">
                            <SyncAltIcon sx={{ color: 'black', fontSize: '15px' }} />
                            내게쓰기
                        </button>
                    </div>
                </div>
            </div>
            <form>
                <div className="flex pl-9 pr-8 py-4 h-14 justify-between items-center relative border-gray-200">
                    <button className="text-[14px] font-semibold">받는사람</button>
                    <label className="flex ml-[13px] text-[12px] items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
                        개인별
                        <QuestionMarkIcon className="border-[1px] p-[1px] ml-[3px] rounded-[3px] border-gray-300" sx={{ color: 'black', fontSize: '14px' }} />
                    </label>
                    {/* 받는사람 */}
                    <input type="email" value={newReceiver} onChange={(e) => setNewReceiver(e.target.value)} className="text-[13px] w-[870px] flex items-center justify-between border-b-[1px]" />
                    <KeyboardArrowDownIcon />
                    <button className="border-[1px] py-[2px] w-[53px] rounded-[5px]  border-[#d2d2d2]">주소록</button>
                </div>
                <div className="flex pl-9 justify-between pr-8 items-center relative border-gray-200">
                    <div className="flex w-[102px] justify-between">
                        <button className="text-[14px] font-semibold">참조</button>
                        <KeyboardArrowDownIcon sx={{ color: 'black', fontSize: '19px' }} />
                    </div>
                    <input className="text-[13px] w-[910px] flex items-center border-b-[1px]" />
                    <KeyboardArrowDownIcon />
                </div>
                {/* 제목 */}
                <div className="flex pl-9 pr-8 h-14 items-center relative border-gray-200">
                    <div className="flex w-[160px] ">
                        <button className="text-[14px] font-semibold">제목</button>
                        <label className="flex ml-[62px] text-[12px] items-center">
                            <input type="checkbox" />
                            중요
                            <span className="text-red-500 font-[800] text-[15px] ml-1">!</span>
                        </label>
                    </div>
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="text-[13px] w-[910px] flex items-center border-b-[1px]" />
                </div>

                {/* 파일첨부 */}
                <div className="flex pl-9 pr-8 relative border-gray-200">
                    <div className="flex w-[160px] items-center  ">
                        <div className="text-[14px] font-semibold">파일첨부</div>
                        <button onClick={handleShow}>{showFile ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</button>
                    </div>
                    <div className="">
                        <div className="flex items-center w-[980px] justify-between">
                            <div>
                                <button className="border-[1px] py-[2px] w-[57px] font-[400] rounded-[5px] text-[13px]  border-[#d2d2d2]">내 PC</button>
                                <button className="ml-2 border-[1px] py-[2px] w-[70px] font-[400] text-[13px] rounded-[5px]  border-[#d2d2d2]">MYBOX</button>
                            </div>
                            <div className="text-[#8c8c91] text-[13px]">일반 0KB/10MB | 대용량파일 0KB/2.00GBx10개</div>
                        </div>
                        {showFile ? (
                            <div className="filebox">
                                <input
                                    className="upload-name"
                                    // value="첨부파일"
                                    placeholder="파일을 마우스로 끌어 오세요"
                                />
                                <label htmlFor="file">파일찾기</label>
                                <input type="file" id="file" />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="flex items-center h-[30px] border-t-[1px] border-b-[1px] text-[12px] bg-gray-100">
                    <div className="w-[117px] text-center">나눔고딕</div>
                    <div className="w-4 ">
                        <KeyboardArrowUpIcon className="block h-[1px] mt-2 w-2" sx={{ color: 'black', fontSize: '12px' }} />
                        <KeyboardArrowDownIcon className="block h-[1px] -mt-3 w-2" sx={{ color: 'black', fontSize: '12px' }} />
                    </div>
                    <div className="flex h-full w-[100px] text-center items-center border-l-[1px] border-r-[1px] ">14px</div>
                    <div className="flex w-[190px] justify-around h-full text-[15px] text-center items-center border-r-[1px] ">
                        <div className="font-semibold">B</div>
                        <div className="italic">I</div>
                        <img src="https://cdn.icon-icons.com/icons2/2714/PNG/512/text_underline_thin_icon_171471.png" alt="" className="w-4 h-4" />
                        <div className="line-through">S</div>
                        <div className="">T</div>
                        <div className="border-[1px] -ml-[8px] w-[20px]">T</div>
                    </div>
                </div>
                <textarea className="w-full h-[450px]" value={newMailBody} onChange={(e) => setNewMailBody(e.target.value)} />
            </form>
        </>
    );
}

export default WriteDetail;
