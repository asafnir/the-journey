import SocialIcon from "components/SocialIcon";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import daimond from "assets/icons/daimond.svg";
import Logo from "assets/images/logo.png";

function Footer() {
  return (
    <div className="bg-[#0F172A] pb-8">
      <div className="container py-12 mb-0 sm:mb-8 flex items-center justify-between flex-col lg:flex-row space-y-6 lg:space-y-0">
        <div className="flex text-[10px] lg:text-[12px] xl:text-[16px] items-center">
                 <img
          src={Logo}
          className="w-1/2"
          alt=""
        />
        </div>

        <div className="flex space-y-6 lg:space-y-[0px] space-x-[0px] lg:space-x-[44px] flex-col lg:flex-row items-center">
          <div className="flex space-x-[22px] sm:space-x-[32px] items-center">
            <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-gradient font-[800] uppercase cursor-pointer">
              Home
            </p>
            <p className="text-[14px] sm:text-[16px] xl:text-[18px]   text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              About
            </p>
            <p className="text-[14px] sm:text-[16px] xl:text-[18px]   text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              How
            </p>
            <p className="text-[14px] sm:text-[16px] xl:text-[18px]   text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              Team
            </p>
            <p className="text-[14px] sm:text-[16px] xl:text-[18px]   text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              FAQ
            </p>
          </div>

          <div className="flex items-center space-x-[8px] ">
            <SocialIcon icon={<ImFacebook style={{ fill: "black" }} />} />
            <SocialIcon icon={<FaTwitter style={{ fill: "black" }} />} />
            <SocialIcon icon={<img src={daimond} alt="" />} />
          </div>
        </div>
      </div>
      <p className="text-center text-[14px] lg:text-lg text-white">
        Copyright © 2022
      </p>
    </div>
  );
}

export default Footer;
