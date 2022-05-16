import React from "react";

const AboutCard = ({ title, desc, index }) => {
  return (
    <div className="text-center flex flex-col items-center max-w-[250px] sm:max-w-auto mx-auto">
      <div className="w-[60px] h-[60px] sm:w-[111px] sm:h-[111px] rounded-full  flex justify-center items-center text-[26px] sm:text-[35px] font-bold bg-[rgba(0,_0,_0,_0.37)] mb-[18px] sm:mb-[22px]">
        {index}
      </div>

      <h1 className="text-white text-center text-[18px] sm:text-[22px] font-bold mb-[12px] sm:mb-[20px] ">
        {title}
      </h1>

      <p className="font-dm-sans text-center text-[16px] font-normal text-white opacity-[.5]">
        {desc}
      </p>
    </div>
  );
};
export default AboutCard;
