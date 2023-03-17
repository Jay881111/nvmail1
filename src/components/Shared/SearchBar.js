import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SearchBar() {
  return (
    <div className="relative w-[290px] h-[30px] p-4 rounded-[15px] flex items-center bg-[#F0F1F6]">
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
  );
}

export default SearchBar;
