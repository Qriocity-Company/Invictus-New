"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import Link from "next/link";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-[100vw] flex justify-between items-center px-4 md:px-[48px] py-[1rem] fixed top-0 lg:max-w-[1536px]  md:text-[12px] lg:text-[16px] z-20 bg-white border-b-[1px] border-gray-800 ">
      <a href="/">
        <Image src={logo} alt="Resnet Solutions" className="w-[100%]" width={100} />
      </a>
      <div className="hidden md:flex gap-12 text-black font-Sg justify-between items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        {/* <Link href="/portfolio">Portfolio</Link> */}
        <Link href="/services">Our Services</Link>
        <Link href="/contact" className="">Contact Us</Link>
      </div>
      <div className="md:hidden flex items-center justify-between">
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
        <div className=" font-Poppins md:hidden fixed top-0 left-0 w-[85vw] h-[100%]  backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-end pr-12  bg-gradient-to-l from-[#0C7D55] to-[#22c88e] text-white z-[50] font-semibold text-[24px] ">
          <HiX className=" text-2xl cursor-pointer " onClick={toggleMenu} />
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About Us</Link>
          {/* <Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link> */}
          <Link href="/services" onClick={toggleMenu}>Our Services</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}

    </div>
  );
};
