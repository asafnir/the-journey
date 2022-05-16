import React from "react";

function TeamCard({ img, title, subtitle }) {
  return (
    <div>
      <img src={img} className="w-full mb-[30px]" alt="" />
      <h1 className=" font-merienda font-bold text-[20px] xl:text-[28px] uppercase mb-2 text-center">
        {title}
      </h1>
      <p className="font-normal text-base xl:text-lg uppercase text-[#969696] text-center">
        {subtitle}
      </p>
    </div>
  );
}

export default TeamCard;
