import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CreateIcon from '@mui/icons-material/Create';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BlockIcon from '@mui/icons-material/Block';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import './MailContent.css';
import { Box, Button, Modal, Typography } from '@mui/material';

function Mail({ sender_email, senderID, title }) {
    console.log('sender', sender_email);
    const [open, setOpen] = useState(false);
    const [star, setStar] = useState(false);
    const [mail, setMail] = useState(false);

    const handleStar = () => setStar(!star);
    const handleMail = () => setMail(!mail);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '35%',
        left: '41%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 2,
        pt: 2,
        pb: 3
    };

    return (
        <div className="mail items-center border-b-[0.1px] relative border-gray-200">
            <input className="" type="checkbox" />
            <button onClick={handleStar}>{star ? <StarIcon className="ml-5" sx={{ color: '#2C81E8', fontSize: '22px' }} /> : <StarBorderIcon className="ml-5" sx={{ color: '#B2B2B4', fontSize: '22px' }} />}</button>

            <div className="pl-4 flex w-[219px]">
                <button onClick={handleMail}>{mail ? <MailIcon className="mr-10" sx={{ color: '#B1CEF7', fontSize: '19px' }} /> : <MailOutlineIcon className="mr-10" sx={{ color: '#B2B2B4', fontSize: '19px' }} />}</button>
                <button onClick={handleOpen} className="sender text-left text-[12px] hover:underline">
                    {senderID}
                </button>
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
                <Box sx={{ ...style, width: 350 }}>
                    <Typography variant="h6" component="h2">
                        <div className="px-6">
                            <div className="flex items-center w-full justify-between">
                                <div className="mt-2">{senderID}</div>
                                <Button
                                    sx={{
                                        color: 'black',
                                        '&:hover': {
                                            backgroundColor: 'white'
                                        },
                                        pl: 15
                                    }}
                                    onClick={handleClose}
                                >
                                    <ClearIcon />
                                </Button>
                            </div>
                            <div className="text-[14px] font-[500] text-gray-600">{sender_email}</div>
                        </div>
                        <div className="flex items-center py-4 justify-between px-6">
                            <button className="text-center items-center">
                                <div className="text-[5px] font-semibold border-[1.5px] rounded-[30px] border-black mt-[3px] ">VIP</div>
                                <div className="text-[11px] text-gray-500 mt-[10px]">VIP지정</div>
                            </button>
                            <button className="-mt-[6px]">
                                <CreateIcon sx={{ fontSize: 22 }} />
                                <div className="text-[11px] text-gray-500 mt-[6px]">메일쓰기</div>
                            </button>
                            <button className="-mt-[6px]">
                                <PersonAddAltIcon sx={{ fontSize: 22 }} />
                                <div className="text-[11px] text-gray-500 mt-[6px]">주소록복사</div>
                            </button>
                            <button className="-mt-[6px]">
                                <ContentCopyIcon sx={{ fontSize: 22 }} />
                                <div className="text-[11px] text-gray-500 mt-[6px]">주소복사</div>
                            </button>
                            <button className="-mt-[6px]">
                                <PersonOutlineIcon sx={{ fontSize: 23 }} />
                                <BlockIcon sx={{ fontSize: 12, ml: '-5px', mt: 1 }} />
                                <div className="text-[11px] text-gray-500 mt-[6px]">차단</div>
                            </button>
                        </div>
                    </Typography>
                    <div className="border-t-[1px] text-[13px] ">
                        <button className="px-6 py-1 mt-2 flex items-center w-full hover:bg-gray-100 justify-between">
                            <div className="">주고받은 메일 보기</div>
                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </button>
                        <button className="px-6 py-1 mt-2 flex items-center w-full hover:bg-gray-100 justify-between">
                            <div className="">보낸 사람으로 검색하기</div>
                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </button>
                        <button className="px-6 py-1 mt-2 flex items-center w-full hover:bg-gray-100 justify-between">
                            <div className="">받는 사람으로 검색하기</div>
                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </button>
                        <button className="px-6 py-1 mt-2 flex items-center w-full hover:bg-gray-100 justify-between">
                            <div className="">내 메일함으로 자동 분류하기</div>
                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </button>
                        <button className="px-6 py-1 mt-2 flex items-center w-full hover:bg-gray-100 justify-between">
                            <div className="">이 사람이 보낸 메일 모두 삭제</div>
                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </button>
                        <button className="px-6 py-1 mt-2 flex items-center w-full hover:bg-gray-100 justify-between">
                            <div className="">보낸 메일 강조하기</div>
                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </button>
                    </div>
                </Box>
            </Modal>

            <div className="text-[13px] flex w-full items-center justify-between">
                <div className="ml-2">
                    <Link
                        // to="/mail/:id"
                        to={{ pathname: `/mail/${senderID}` }}
                        state={{ senderID, title }}
                        className="hover:underline"
                    >
                        {title}
                    </Link>
                    <SearchIcon sx={{ color: 'black', fontSize: '15px' }} />
                    <DynamicFeedIcon sx={{ color: 'black', fontSize: '15px' }} />
                </div>
                <div className="w-[130px] block">
                    <div className="text-[12px] relative right-[2%] text-right  ">오후 01:16</div>
                </div>
            </div>
        </div>
    );
}

export default Mail;
