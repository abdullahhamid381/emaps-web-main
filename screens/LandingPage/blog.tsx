import React from "react";
import jsondata from "../../libs/constants/constant.json";
import Footer from "../footer/footer";
import Cards from "./cards";
export default async function blog() {
  const { blogdata } = jsondata;
  return (
    //<===================================== SECTION FOOTER AND BLOG ARE HERE=======================================>

    <div className="bg-blog-back">
      <div className=" relative py-32">
        <div className=" w-4/5 m-auto ">
          {/* <======================== BLOG MAIN TITLE ==========================> */}

          <div className="">
            <h1 className="text-white font-poppins font-semibold text-6xl">
              What's happening?
            </h1>
          </div>

          {/* <============================SHADE IMAGE FIRST =========================> */}

          <div className="absolute left-0 top-[-180px] z-0">
            <img src="./images/shadeone.png" alt="" className="w-[50%]" />
          </div>

          {/* <========================= BLOG CARDS =============================> */}

          <div className="pt-20 flex gap-5">
            {/* <=================== BLOG FIRST MAIN IMAGE ====================> */}

            <div className="relative">
              <img
                src="./images/blogone.jpg"
                alt=""
                className="rounded-[12px] opacity-[50%] "
              />
              <div
                className={`absolute z-50 text-white top-[195px] w-[95%]  left-3 
                       `}
              >
                <h1 className="text-[30px] font-[600] font-poppins">
                  NEWS TITLE{" "}
                </h1>
                <p className="font-poppins font-[500] w-[82%] text-[11px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  sed molestias nam quidem exercitationem, tempore harum quo
                  dolor at ipsam ad repellat. Perspiciatis, eaque accusantium id
                  ea ut error autem!
                </p>
                <div className="flex justify-end">
                  <span className="font-poppins">Read more</span>
                </div>
              </div>
            </div>

            {/* <====================== BLOG CARD IMAGE SECOND THIRD ====================> */}

            <div className="grid gap-y-4">
              {blogdata.map((item) => {
                return (
                  <div className="relative">
                    <img
                      src={item.blog}
                      alt=""
                      className="rounded-[8px] opacity-[40%]"
                    />

                    <div
                      className={`absolute z-50 text-white top-[80px] w-[95%]  left-2 ${
                        item.id === "second" ? "top-[60px]" : ""
                      }`}
                    >
                      <h1 className="text-[14px] font-[600] font-poppins">
                        NEWS TITLE{" "}
                      </h1>
                      <p className="font-poppins text-[8px] w-[90%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut sed molestias nam quidem exercitationem, tempore
                        harum quo dolor at ipsam ad repellat. Perspiciatis,
                        eaque accusantium id ea ut error autem!
                      </p>
                      <div className="flex justify-end">
                        <span className="font-poppins">Read more</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
