import React from "react";
import jsondata from "../../libs/constants/constant.json";

import { Button } from "@/components/ui/button";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiRobotLeg } from "react-icons/gi";

export default async function navbar() {
  const { navbardata } = jsondata;
  return (
    <div className="bg-none py-5 absolute top-5">
      <div className=" w-4/5 flex mx-auto items-center">
        {/* <=========================== LOGO AND LINKS PAGE  ================================> */}

        <div className="flex items-center gap-x-10">
          {/* ............................. NAVBAR LOGO ............................... */}

          <div className="w-1/6">
            <img src="./images/logotwo.png" alt="" />
          </div>

          {/* ................................. MENU PAGE LINKS ............................ */}

          <div className="flex gap-8 pt-1">
            {navbardata.map((item) => {
              return (
                <div>
                  <span className="text-white font-poppins text-lg font-medium">
                    {item.link}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* <============================= SOCIAL MEDIA LINKS AND LOGIN BUTTON ==============================> */}

        <div className="flex items-center gap-x-10">
          {/* ................... SOCIAL LINKS ................... */}

          <div className="flex items-center justify-start gap-4">
            {navbardata.map((item) => {
              return (
                <div className="text-black bg-white p-1 rounded-full text-lg">
                  <GiRobotLeg />
                </div>
              );
            })}
          </div>

          {/*  ....................................... LOGIN BUTTON  ......................................... */}

          <div className="flex items-center gap-4">
            <div className="text-white text-xl">
              <AiOutlineGlobal />
            </div>
            <div>
              <Button className="px-16 py-6 bg-loginback font-poppins">
                {" "}
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
