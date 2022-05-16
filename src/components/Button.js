import React from "react";

function Button({
  title,
  radius = "rounded-[8px] md:rounded-[20px]",
  padding = "py-[14px] px-[22px] md:py-[28px] md:px-[46px]",
}) {
  return (
    <button
      className={`font-orbitron text-[#EFEFEF] text-base font-black ${radius} ${padding} bg-text-gradient`}
    >
      {title}
    </button>
  );
}

export default Button;
