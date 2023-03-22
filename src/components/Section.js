import React from "react";
import { Link } from "react-router-dom";

function Section({ link, sideBox, boxType, Icon, inboxAmount }) {
  return (
    <div className="mt-[4px] w-full">
      <Link
        to={link}
        className="focus flex items-center py-[5px] px-[6px] justify-between hover:bg-gray-200 hover:rounded-[5px]"
      >
        <div className="flex">
          {Icon ? <Icon fontSize="small" /> : "└"}
          {/* <Icon fontSize="small" /> */}
          <div className="ml-1">
            {boxType}
            <span className="text-[#0173E5] ml-1">{inboxAmount}</span>
          </div>
        </div>
        {sideBox ? (
          <button className="bg-[#FBFBFD] border-[0.5px] text-[11px] text-gray-500 rounded-[5px] text-center px-[7px] my-auto p-[2px] hover:border-[1px] hover:border-gray-300">
            {sideBox}
          </button>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}

export default Section;
