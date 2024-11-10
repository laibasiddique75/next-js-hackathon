'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="bg-[#222222] text-white p-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-4xl">
          <Link href="/">Laiba Siddique</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="bg-green-400 p-2 rounded text-[20px]">Log In</button>
          <button className="bg-red-600 p-2 rounded text-[20px]">Sign Up</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {navOpen && (
        <div className="md:hidden flex flex-col items-center mt-5 gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact-us">Contact Us</Link>
          <div className="flex gap-3 mt-4">
            <button className="bg-green-400 p-2 rounded text-[20px]">Log In</button>
            <button className="bg-red-600 p-2 rounded text-[20px]">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;



