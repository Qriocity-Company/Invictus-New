"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" flex flex-row justify-between  w-full items-center   sm:px-16 md:px-[48px] py-[1rem] fixed top-0 max-w-[1440px]  md:text-[12px] lg:text-[16px] z-20  backdrop-blur-[0.5rem] border-b-[1px] border-gray-800 ">
      <a href="/">
        <Image src={logo} alt="Resnet Solutions" className="w-[100%]" width={100} />
      </a>
      <div className="hidden md:flex flex-row gap-12  ml-auto text-black font-Sg justify-between items-center">
        <a href="/">Home</a>
        <a href="#about">About Us</a>
        <a href="#about">Portfolio</a>
        <a href="#services">Our Services</a>
        <a href="/" className="">Contact Us</a>
      </div>
      <div className="md:hidden flex items-center ml-auto">
        {showMenu ? (
          <HiX
            className="text-black text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className="text-black text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className=" font-Poppins md:hidden fixed top-0 left-0 w-[85vw] h-[100vh]  backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-end pr-12  bg-gradient-to-l from-[#0C7D55] to-[#22c88e] text-white z-[50] font-semibold text-[24px] ">
          <HiX className=" text-2xl cursor-pointer " onClick={toggleMenu} />
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About Us</a>
          <a href="#about" onClick={toggleMenu}>Portfolio</a>
          <a href="#services" onClick={toggleMenu}>Our Services</a>
          <a href="#about" onClick={toggleMenu}>Contact Us</a>
        </div>
      )}

    </div>
  );
};
