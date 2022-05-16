import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sidebarRef = OutsideClickDetector(() => setIsOpen(false));

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`fixed flex items-center top-0 left-0 w-full z-[80] transition-all duration-[.3s] ease-[ease] ${
        isScrolled
          ? "bg-gray-primary h-[70px] sm:h-[100px] shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
          : "h-[100px] sm:h-[120px]"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div
          className={`flex  items-center transition-all duration-[.3s] ease-[ease]  ${
            isScrolled
              ? "text-[8px] lg:text-[10px] xl:text-[14px]"
              : "text-[10px] lg:text-[12px] xl:text-[16px]"
          }`}
        >
          <p className="font-merienda text-[3em] font-bold">The</p>
          <p className="font-merienda text-[3em] font-bold pl-4 text-gradient">
            journey
          </p>
        </div>

        <div
          className={`fixed top-0 right-0 w-[300px] p-8 translate-x-[300px] transition-all duration-[.3s] ease-[ease] lg:translate-x-0 space-y-5 lg:space-y-0 lg:p-0 lg:h-auto bg-white lg:bg-transparent lg:w-fit lg:static lg:flex lg:space-x-[36px] xl:space-x-[100px] lg:items-center 
          z-[110] h-full ${isOpen ? "translate-x-[0px] " : ""}
          `}
          ref={sidebarRef}
        >
          <button
            className="lg:hidden text-[#00000063] cursor-pointer w-fit"
            onClick={() => setIsOpen(false)}
          >
            <GrFormClose size={30} />
          </button>

          <div className="space-y-2 lg:space-y-0 lg:flex lg:space-x-[32px] lg:items-center">
            <p className="text-[16px] xl:text-[18px] text-gradient font-[800] uppercase cursor-pointer">
              Home
            </p>
            <p className="text-[16px] xl:text-[18px]  text-[#00000063] lg:text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              Launchpad
            </p>
            <p className="text-[16px] xl:text-[18px]  text-[#00000063] lg:text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              Studio
            </p>
            <p className="text-[16px] xl:text-[18px]  text-[#00000063] lg:text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              Labs
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row lg:flex lg:items-center lg:space-x-[32px]">
            <button className="w-full lg:w-auto cursor-pointer py-[12px] px-[26px] xl:px-[36px] rounded-[10px] border-[1px] border-solid border-[#D7D7D7]">
              <p className="text-[16px] xl:text-[18px] text-[#00000063] lg:text-[#BCBCBC] font-[500] uppercase ">
                create
              </p>
            </button>

            <p className="mb-3 flex-1 lg:mb-0 text-[16px] xl:text-[18px] text-[#00000063] lg:text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              sign in
            </p>
          </div>
        </div>

        <button
          className="text-white cursor-pointer lg:hidden"
          onClick={() => setIsOpen((val) => !val)}
        >
          <IoMenu size={30} />
        </button>
      </div>

      <div className={`black-screen ${isOpen ? "show" : ""}`}></div>
    </div>
  );
}

export default Navbar;
