import React, { useState } from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import WalletIcon from '@mui/icons-material/Wallet';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WidgetsIcon from '@mui/icons-material/Widgets';

import './Header.css';
import { Avatar, Box, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const style = {
        position: 'absolute',
        top: '13%',
        left: '89%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 2,
        pt: 2
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="header">
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <span className="text-[#02C75A] pl-1 text-[25px] font-bold">N</span>
                    <div className="text-[21px] ml-[4px] font-[500]">메일</div>
                </Link>
            </div>
            <div className="iconlist items-center hidden md:flex">
                <DraftsIcon style={{ color: '#02c75a' }} />
                <CalendarMonthIcon />
                <TextSnippetIcon />
                <PermContactCalendarIcon />
                <WalletIcon />
            </div>
            <div className="flex pl-2">
                <div className="flex my-auto items-center">
                    <Avatar sx={{ width: 24, height: 24 }} />
                    <button onClick={handleOpen} className="ml-2 text-[10.5px] text-black font-[200]">
                        ID here
                    </button>
                    <ArrowDropDownIcon fontSize="1" className="my-auto mr-3" />
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: 'background.transparent'
                    }}
                >
                    <Box sx={{ ...style, width: 310 }}>
                        <Typography variant="h6" component="h2">
                            <div className="flex items-center w-full pl-[19px]">
                                <CameraAltIcon sx={{ fontSize: 17 }} />
                                <Avatar sx={{ width: 45, height: 45 }} />
                                <div className="ml-5">
                                    <div className="flex w-full">
                                        <div className="flex items-center text-[15px] font-[500]">
                                            ID here<div className="font-[300]">님</div>
                                        </div>
                                        <div className="font-[300] text-[12px] ml-2 my-auto border-[1px] text-center w-[50px]">로그아웃</div>
                                    </div>
                                    <div className="text-[12.5px] -mt-[4px] font-[500] text-gray-600">email@email.com</div>
                                    <div className="text-[12px] py-[2px] text-gray-500 flex items-center font-[400]">
                                        <div className="pr-[3px]">네이버ID</div>
                                        <div className="border-l-[1px] px-[3px]">보안설정</div>
                                        <div className="border-l-[1px] pl-[3px]">내인증서</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="line-through border-[1px] border-[#02C75A] text-[#02C75A] w-[18px] items-center rounded-[3px] h-[17px] text-center text-[10px]">
                                            <div className="mt-[0.5px]">N</div>
                                        </div>
                                        <div className="ml-1 text-[14px]">2,000원</div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                        <div className="flex items-center mt-4 w-full justify-around border-t-[1px] font-[500] bg-gray-50 text-[12.5px]">
                            <button className="border-l-[1px] w-[33%] py-2">내 블로그</button>
                            <button className="border-l-[1px] w-[33%] py-2">가입한 카페</button>
                            <button className="border-l-[1px] w-[33%] py-2">네이버plus</button>
                        </div>
                    </Box>
                </Modal>

                <div className="border-l-[1px] w-[7vh] items-center flex">
                    <NotificationsNoneIcon className="mx-auto items-center flex " />
                </div>
                <div className="border-l-[1px] w-[7vh] items-center flex">
                    <WidgetsIcon className="mx-auto items-center flex" />
                </div>
            </div>
        </div>
    );
}

export default Header;
