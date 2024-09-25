// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-7">
//             <div>
//               <Link href="/" className="flex items-center py-4 px-2">
//                 <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
//                 <span className="font-semibold text-gray-500 text-lg">My Website</span>
//               </Link>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <Link href="/#hero" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Home</Link>
//               <Link href="/#services" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Services</Link>
//               <Link href="/about" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">About</Link>
//               <Link href="/blog" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Blog</Link>
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-3">
//             <Link href="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link>
//             <Link href="/signup" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</Link>
//             <Link href="/forgot-password" className="py-2 px-2 font-medium text-gray-500 rounded hover:text-blue-500 transition duration-300">Forgot Password</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent">
      <div className="relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo-icon-transmall.svg"
                  width={70}
                  height={70}
                  alt="Site Logo"
                  className="mr-4"
                />
                <span className="text-xl font-bold text-white">Transmall</span>
              </Link>
            </div>
            
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <ul className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                <li><Link href="/about" className="text-white hover:text-gray-300">About Us</Link></li>
                <li><Link href="#clients" className="text-white hover:text-gray-300">Clients</Link></li>
                <li><Link href="/pricing-plan" className="text-white hover:text-gray-300">Pricing</Link></li>
                <li><Link href="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
                <li><Link href="#contact" className="text-white hover:text-gray-300">Contact</Link></li>
                <li className="md:ml-20"><Link href="/login_signup" className="text-white hover:text-gray-300">Login</Link></li>
                <li className="mt-4 md:mt-0">
                  <Link href="/login_signup" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;