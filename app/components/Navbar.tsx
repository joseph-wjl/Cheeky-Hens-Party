"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#FCCFC5] shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#6f1c0b]">
            Cheeky Hen
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 text-lg text-[#6f1c0b] items-center">
            <li><Link href="/">Home</Link></li>

            {/* Packages Dropdown */}
            <li className="relative group cursor-pointer">
              <span>Packages</span>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/packages/classic-life-drawing" className="block px-4 py-2 hover:bg-[#FEEFEC]">
                  Classic Life Drawing
                </Link>
                <Link href="/packages/cheeky-butler" className="block px-4 py-2 hover:bg-[#FEEFEC]">
                  Cheeky Butler
                </Link>
                <Link href="/packages/nude-paint-sip" className="block px-4 py-2 hover:bg-[#FEEFEC]">
                  Nude Paint & Sip
                </Link>
              </div>
            </li>

            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/booking">Booking</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#6f1c0b]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#FCCFC5] md:hidden">

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-xl font-bold text-[#6f1c0b]">
              Cheeky Hen
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
              className="text-[#6f1c0b]"
            >
              <X size={32} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-[#6f1c0b] text-2xl space-y-6">

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <div className="text-center">
              <p className="font-semibold mb-3">Packages</p>
              <div className="space-y-2 text-xl">
                <Link href="/packages/classic-life-drawing" onClick={() => setMenuOpen(false)}>
                  Classic Life Drawing
                </Link>
                <Link href="/packages/cheeky-butler" onClick={() => setMenuOpen(false)}>
                  Cheeky Butler
                </Link>
                <Link href="/packages/nude-paint-sip" onClick={() => setMenuOpen(false)}>
                  Nude Paint & Sip
                </Link>
              </div>
            </div>

            <Link href="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/booking" onClick={() => setMenuOpen(false)}>
              Booking
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}


// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mobilePackageOpen, setMobilePackageOpen] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Dynamic Class Variables
//   const TEXT_COLOR_CLASS = scrolled ? 'text-gray-900' : 'text-white';
//   const HOVER_COLOR_CLASS = 'hover:text-rose-500';
//   const ACCENT_COLOR_CLASS = 'text-rose-500';

//   // Menu Data (Updated HREFs to match your file structure)
//   const packages = [
//     { title: 'Classic Life Drawing', href: '/packages/classic-life-drawing' },
//     { title: 'Cheeky Butler', href: '/packages/cheeky-butler' },
//     { title: 'Nude Paint & Sip', href: '/packages/nude-paint-sip' },
//   ];

//   const navLinks = [
//     { title: 'Home', href: '/' },
//     { title: 'Packages', href: '/packages', isDropdown: true },
//     { title: 'Gallery', href: '/gallery' },
//     { title: 'FAQ', href: '/faq' },
//     { title: 'Contact', href: '/contact' },
//   ];

//   // Animation Variants
//   const menuVariants = {
//     closed: { opacity: 0, x: "100%" },
//     open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
//   };
  
//   // Helper function to close both mobile menu and package accordion
//   const closeMenu = () => {
//     setIsOpen(false);
//     setMobilePackageOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-white backdrop-blur-md shadow-sm py-4' // Scrolled: Opaque white background
//           : 'bg-black/20 backdrop-blur-sm py-6'            // Top: Frosted dark overlay
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
//         {/* LOGO area */}
//         <Link href="/" className="z-50">
//            {/* Apply dynamic TEXT_COLOR_CLASS */}
//            <span className={`text-2xl font-serif font-bold tracking-widest ${TEXT_COLOR_CLASS}`}>
//              CHEEKY HEN PARTY<span className={ACCENT_COLOR_CLASS}>.</span>
//            </span>
//         </Link>

//         {/* --- DESKTOP MENU --- */}
//         <div className="hidden md:flex items-center space-x-12">
//           {navLinks.map((link) => (
//             <div key={link.title} className="relative group">
//               {link.isDropdown ? (
//                 // Dropdown Parent
//                 <div className="relative">
//                   {/* Apply dynamic TEXT_COLOR_CLASS */}
//                   <button className={`flex items-center font-medium transition-colors ${TEXT_COLOR_CLASS} ${HOVER_COLOR_CLASS}`}>
//                     {link.title}
//                     <ChevronDown size={16} className="ml-1 mt-0.5" />
//                   </button>
                  
//                   {/* Dropdown Menu */}
//                   <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
//                       {packages.map((pkg) => (
//                         <Link 
//                           key={pkg.title} 
//                           href={pkg.href} // **USES CORRECTED HREF**
//                           className="block px-6 py-3 text-sm text-gray-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
//                         >
//                           {pkg.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Standard Link
//                 <Link 
//                   href={link.href} 
//                   // Apply dynamic TEXT_COLOR_CLASS
//                   className={`font-medium text-lg transition-colors relative group ${TEXT_COLOR_CLASS} ${HOVER_COLOR_CLASS}`}
//                 >
//                   {link.title}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* Booking CTA Button (Stays consistent) */}
//           <Link href="/booking">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:bg-rose-500 transition-colors duration-300"
//             >
//               Book Now
//             </motion.button>
//           </Link>
//         </div>

//         {/* --- MOBILE HAMBURGER --- */}
//         <div className="md:hidden z-50">
//           <button 
//             onClick={() => setIsOpen(!isOpen)} 
//             // Apply dynamic TEXT_COLOR_CLASS
//             className={`focus:outline-none ${TEXT_COLOR_CLASS}`}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* --- MOBILE FULL SCREEN MENU --- */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center md:hidden"
//           > 
//             <div className="flex flex-col space-y-6 text-center text-xl">
//               {/* Other links close the menu */}
//               <Link 
//                 href="/" 
//                 onClick={closeMenu}
//                 className="text-gray-900 hover:text-rose-500 font-medium"
//               >
//                 Home
//               </Link>

//               {/* Mobile Accordion for Packages */}
//               <div className="flex flex-col items-center">
//                 <button 
//                   onClick={() => setMobilePackageOpen(!mobilePackageOpen)}
//                   className="flex items-center text-gray-900 hover:text-rose-500 font-medium"
//                 >
//                   Packages <ChevronDown size={20} className={`ml-2 transition-transform ${mobilePackageOpen ? 'rotate-180' : ''}`}/>
//                 </button>
                
//                 <AnimatePresence>
//                   {mobilePackageOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="overflow-hidden flex flex-col space-y-4 mt-4 text-base text-gray-500"
//                     >
//                       {packages.map((pkg) => (
//                         <Link 
//                           key={pkg.title} 
//                           href={pkg.href} // **USES CORRECTED HREF**
//                           onClick={closeMenu} // Closes the full menu when a package is selected
//                           className="block hover:text-rose-500"
//                         >
//                           {pkg.title}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Other links close the menu */}
//               <Link 
//                 href="/gallery" 
//                 onClick={closeMenu}
//                 className="text-gray-900 hover:text-rose-500 font-medium"
//               >
//                 Gallery
//               </Link>
//               <Link 
//                 href="/faq" 
//                 onClick={closeMenu}
//                 className="text-gray-900 hover:text-rose-500 font-medium"
//               >
//                 FAQ
//               </Link>
//               <Link 
//                 href="/contact" 
//                 onClick={closeMenu}
//                 className="text-gray-900 hover:text-rose-500 font-medium"
//               >
//                 Contact
//               </Link>

//               <Link 
//                 href="/booking" 
//                 onClick={closeMenu}
//                 className="pt-4"
//               >
//                 <span className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg shadow-lg">
//                   Book Your Party
//                 </span>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;