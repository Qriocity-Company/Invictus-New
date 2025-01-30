import React from "react";
import CountUp from "./Countup";

const FeaturesBox = () => {
  return (
    <div className="w-full py-10 md:py-8 flex justify-center items-center bg-[#FFFDF8]">
      <div className="grid md:grid-cols-3 w-[90%] gap-x-2 gap-y-4 ">
        <div className="w-full p-14 md:p-16 bg-[#F2EEE4] rounded-[40px] flex flex-col items-center justify-center text-center font-[700] font-grotesk">
          <div className=" text-[80px] leading-[100px]">
            <CountUp from={0} to={200} direction="up" duration={2} />%
          </div>
          <h2 className="text-[32px] leading-[34px] w-[80%] mt-2">
            Increase in Sales
          </h2>
        </div>
        <div className="w-full p-14 md:p-16 bg-[#F2EEE4] rounded-[40px] flex flex-col items-center justify-center text-center font-[700] font-grotesk">
          <div className=" text-[80px] leading-[100px]">
            <CountUp from={0} to={10000} direction="up" duration={2} />+
          </div>
          <h2 className="text-[32px] leading-[34px] mt-2">
            High Quality Leads
          </h2>
        </div>
        <div className="w-full p-14 md:p-16 bg-[#F2EEE4] rounded-[40px] flex flex-col items-center justify-center text-center font-[700] font-grotesk">
          <div className=" text-[80px] leading-[100px]">
            <CountUp from={0} to={1000} direction="up" duration={2} />%
          </div>
          <h2 className="text-[32px] leading-[34px] mt-2">ROI on Ads Budget</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBox;
