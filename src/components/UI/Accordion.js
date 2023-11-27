import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.height = menuRef.current.scrollHeight + "px";
    } else {
      menuRef.current.style.height = 0 + "px";
    }
  }, [isOpen]);

  return (
    <div className="max-w-[689px] w-full mx-auto bg-[rgba(255,_255,_255,_0.1)] rounded-[6px] sm:rounded-[18px]">
      <button
        className="py-[24px] sm:py-[30px] lg:py-[30px] px-[22px] sm:px-[36px] lg:px-[36px] flex items-center justify-between w-full space-x-[1rem]"
        onClick={() => setIsOpen((val) => !val)}
      >
        <p className="text-left text-base sm:text-[18px] xl:text-[22px] text-white font-normal">
          {title}
        </p>

        <span
          className={`${
            isOpen ? "rotate-[180deg]" : ""
          } transition-all duration-[.3s] ease-[ease] text-[28px] xl:text-[40px]`}
        >
          <FiChevronDown color="white" />
        </span>
      </button>

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s] ease-[ease]"
        ref={menuRef}
      >
        <div className="py-[24px] sm:py-[30px] lg:py-[30px] px-[22px] sm:px-[36px] lg:px-[36px] pt-0 sm:pt-0 lg:pt-0 ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
