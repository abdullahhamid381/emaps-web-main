import React from "react";

export default async function footer() {
  return (
    <div className="bg-blog-back relative">
      <div className="w-seventy m-auto flex items-center justify-between pt-40 pb-20 ">
        {/* <==================================== FOOTER COPY RIGHT WATER MARK ================================> */}

        <div>
          <span className="font-poppins font-semibold text-lg text-white">
            2024 All rights reserved.
          </span>
        </div>

        {/* <======================================= FOOTER LOGO =============================> */}

        <div>
          <img src="./images/footerlogo.png" alt="" />
        </div>

        {/* <==================================== FOOTER COPY RIGHT WATER MARK ================================> */}

        <div>
          <span className="font-poppins font-semibold text-lg text-white">
            2024 All rights reserved.
          </span>
        </div>
      </div>

      {/* <==================== SHADE OF THE FOOTER IMAGE ========================> */}

      <div className="absolute top-[-230px] right-0">
        <img src="./images/shadetwo.png" alt="" className="w-[100%]" />
      </div>
    </div>
  );
}
