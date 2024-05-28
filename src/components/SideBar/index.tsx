import { ShippingIcon, ProfileIcon, QuoteIcon, LogoutIcon } from "../Icons/Icons"
import { useState } from "react";
export const SideBar = () => {
   const [selectedOption, setSelectedOption] = useState("MY MOVES")
    return (
      <div className="flex flex-col justify-center gap-6 pl-3 pt-2 w-1/5 font-bold">
        <div
          className={`flex items-center gap-2 cursor-pointer border-l-2 pl-2 ${
            selectedOption === "MY MOVES"
              ? " border-red-700"
              : " border-transparent"
          }`}
          onClick={() => setSelectedOption("MY MOVES")}
        >
          <ShippingIcon />
          <p>MY MOVES</p>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer border-l-2 pl-2 ${
            selectedOption === "MY PROFILE"
              ? " border-red-700"
              : " border-transparent"
          }`}
          onClick={() => setSelectedOption("MY PROFILE")}
        >
          <ProfileIcon />
          <p>MY PROFILE</p>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer border-l-2 pl-2 ${
            selectedOption === "GET QUOTE"
              ? " border-red-700"
              : " border-transparent"
          }`}
          onClick={() => setSelectedOption("GET QUOTE")}
        >
          <QuoteIcon />
          <p>GET QUOTE</p>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer border-l-2 pl-2 ${
            selectedOption === "LOGOUT"
              ? " border-red-700"
              : " border-transparent"
          }`}
          onClick={() => setSelectedOption("LOGOUT")}
        >
          <LogoutIcon />
          <p>LOGOUT</p>
        </div>
      </div>
    );
}