import React from "react";

function Input({ htmlFor }) {
  return (
    <div className="max-w-[652px] w-full mx-auto">
      <label
        htmlFor={htmlFor}
        className="text-base md:text-lg text-white font-medium mb-[10px] cursor-pointer inline-block"
      >
        Select box
      </label>
      <input
        type="text"
        id={htmlFor}
        className="text-base md:text-lg text-white font-medium block w-full bg-[rgba(255,_255,_255,_0.16)] outline-none border-none py-3 md:py-4 px-6 rounded-[5px]"
      />
    </div>
  );
}

export default Input;
