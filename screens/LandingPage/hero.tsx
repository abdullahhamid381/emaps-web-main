import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default async function hero() {
  return (
    <div>
      {/* <=========================== HERO MAIN IMAGE ============================> */}

      <div className="">
        <img src="./images/hero.png" alt="" className="w-full" />
      </div>

      {/* <================================== HERO TEXT AND BUTTON ===================================> */}

      <div className="absolute top-52 left-36 lg:left-[70px] ">
        <h1 className="text-custom-xxl lg:text-[95px]  font-black text-white font-poppins m-0 p-0">
          DISCOVER
        </h1>
        <h2 className="text-white lg:text-[25px] font-semibold text-custom-md font-poppins p-0 m-0 -mt-5">
          Strategies and Lineups
        </h2>
        <p className="font-poppins text-white font-medium text-sm w-3/5 lg:w-[45%] leading-5 pt-5 lg:pt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        {/* ............................. HERO DISCOVER BUTTON ....................... */}

        <div className="flex bg-discover-hero-button w-1/3 lg:w-[23%] justify-center items-center  gap-4 py-3 rounded-xl mt-12 lg:mt-10 cursor-pointer">
          <div className="bg-black p-3 rounded-full text-white">
            <FaArrowRight />
          </div>
          <input
            type="button"
            value={"Discover Now"}
            className="text-white font-poppins font-bold text-3xl lg:text-[20px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
