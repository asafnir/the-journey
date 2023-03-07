import React from "react";

function Button({
  title,
  radius = "rounded-[8px] md:rounded-[20px]",
  padding = "py-[10px] px-[18px] md:py-[20px] md:px-[30px]",
}) {
  return (
    <button
      className={`font-orbitron text-[#EFEFEF] text-2xl font-black ${radius} ${padding} bg-text-gradient`}
    >
      {title}
    </button>
  );
}

export default Button;
