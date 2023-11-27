import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState, Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'

import { Link, useLocation } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { useAuth } from '../contexts/Auth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const UserMenu = (props) => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full  text-sm focus:outline-none">
          <span className="sr-only">Open user menu</span>
          <svg className="h-8 w-8 rounded-full" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="/my-journeys"
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700')}
              >
                My Journeys
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/account"
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700')}
              >
                Account
              </a>
            )}
          </Menu.Item>
          <hr/>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={props.signOut}
                href="#"
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700')}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function Navbar() {
  const {user, signOut} = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const locatoin = useLocation();
  const userParams = locatoin.pathname ? locatoin.pathname?.split("/") : [];
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
      className={`absolute flex items-center top-0 left-0 w-full z-[80] transition-all duration-[.3s] ease-[ease] ${
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
          <Link to={"/"}>
            <span className="text-5xl font-serif">Journeys</span>
            </Link>
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

          <ul className="items-center text-xl space-x-[18px] hidden md:flex">
             <li>
              <Link to={"/artists"}>
                <a
                  className={
                    userParams[1] == "artists"
                      ? "text-red"
                      : "text-white"
                  }
                >
                  Artists
                </a>
              </Link>
            </li>          
            <li>
              <Link to={"/journeys"}>
                <a
                  className={
                    userParams[1] == "journeys"
                      ? "text-red"
                      : "text-white"
                  }
                >
                  Journeys
                </a>
              </Link>
            </li>               
          </ul>
          <div className="flex flex-col-reverse lg:flex-row lg:flex lg:items-center lg:space-x-[24px]">
            <Link to={"/create"}>
              <a alt="create" className="w-full lg:w-auto cursor-pointer py-[12px] px-[26px] xl:px-[36px] rounded-[10px] border-[1px] border-solid border-[#D7D7D7]">
                <span className="text-[16px] xl:text-[18px] text-[#00000063] lg:text-[#BCBCBC] font-[500] uppercase ">
                  create
                </span>
              </a>
            </Link>
            {user ?
              <UserMenu signOut={signOut} user={ user}/>
              :
              <Link to={"/auth"}>
                <a className="mb-3 flex-1 lg:mb-0 text-[16px] xl:text-[18px] text-[#00000063] lg:text-[#BCBCBC] font-[500] uppercase cursor-pointer">
                  sign in
              </a>
              </Link>
            }
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
