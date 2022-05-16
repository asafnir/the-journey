import React from "react";

function Subtitle({ children, className }) {
  return (
    <h2
      className={`font-dm-sans text-base md:text-[22px] font-normal leading-6 sm:leading-8 ${className}`}
    >
      {children}
    </h2>
  );
}

export default Subtitle;
