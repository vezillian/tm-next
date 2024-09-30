"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <header className="bg-[#192966] fixed top-0 w-full z-50 py-3 font-sans">
      <div className="container sm:ml-0 md:ml-0 lg:ml-0 xl:ml-28 px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center mr-24">
            <Image
              src="/images/logo-icon-transmall.svg"
              width={65}
              height={65}
              alt="Site Logo"
              className="mr-2"
            />
            <span className="text-3xl font-bold text-white">Transmall</span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden xl:flex items-center justify-between flex-grow ml-20 mr-60">
            <ul className="flex space-x-12">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-yellow-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#clients"
                  className="text-white hover:text-yellow-600 transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-white hover:text-yellow-600 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-yellow-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white hover:text-yellow-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-8">
              <Link
                href="/login_signup"
                className="text-white hover:text-yellow-600 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/login_signup"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Link>
            </div>
          </nav>

          {/* Toggle button for mobile menu */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="xl:hidden" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#192966] shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-yellow-600 transition-colors rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/#clients"
              className="block px-3 py-2 text-white hover:text-yellow-600 transition-colors rounded-md"
              onClick={toggleMenu}
            >
              Clients
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-white hover:text-yellow-600 transition-colors rounded-md"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:text-yellow-600 transition-colors rounded-md"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 text-white hover:text-yellow-600 transition-colors rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/login_signup"
              className="block px-3 py-2 text-white hover:text-yellow-600 transition-colors rounded-md"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              href="/login_signup"
              className="block px-3 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-md hover:opacity-90 transition-opacity w-40"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
