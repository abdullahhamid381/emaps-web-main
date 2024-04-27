import React from "react";
import jsondata from "../../libs/constants/constant.json";
import { FaArrowRight } from "react-icons/fa";
export default async function cards() {
  const { cardsdata } = jsondata;
  return (
    // <============================ CARDS COMPONENT==============================>
    <div className="bg-blog-back mt-[-80px] pb-20">
      <div className="w-eighty m-auto flex gap-10">
        {/* <================================== CARD MAP RUN HERE ========================= */}

        {cardsdata.map((item) => {
          return (
            <div className="relative">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className={item.id === "center-img" ? " mt-[-60px]" : "none"}
                />
              </div>

              {/* <===================== ARROW BUTTON ================> */}

              <div className="text-black bg-white absolute flex justify-center items-center right-0 left-0  m-auto h-[50px] w-[50px] rounded-full text-2xl mt-[-25px] cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
