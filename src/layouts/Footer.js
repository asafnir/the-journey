import SocialIcon from "components/SocialIcon";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import daimond from "assets/icons/daimond.svg";
import Logo from "assets/images/logo.png";

function Footer() {
  return (
    <div className="bg-[#0F172A] pb-8">
      <div className="container py-12 mb-0 sm:mb-8 flex items-center justify-between flex-col lg:flex-row space-y-6 lg:space-y-0">
        <div className="flex text-[10px] lg:text-[12px] xl:text-[16px] items-center">
          <span className="text-5xl font-serif">Journeys</span>
        </div>

        <div className="flex space-y-6 lg:space-y-[0px] space-x-[0px] lg:space-x-[44px] flex-col lg:flex-row items-center">
          <div className="flex space-x-[22px] sm:space-x-[32px] items-center">
                     <ul className="items-center text-xl tracking-wide space-x-[24px] hidden md:flex">
             <li>
              <Link to={"/artists"}>
                <a>
                  Artists
                </a>
              </Link>
            </li>          
            <li>
              <Link to={"/journeys"}>
                <a
                >
                  Journeys
                </a>
              </Link>
            </li>               
          </ul>
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
