"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkStyle = (href: string) =>
    `relative cursor-pointer ${
      isActive(href) ? "font-bold" : ""
    }`;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-center relative">

          {/* ================= MOBILE LOGO (LEFT) ================= */}
          <Link href="/" className="md:hidden absolute left-3">
            <img
              src="/images/logo.png"
              alt="Cheeky Hen Party Logo"
              className="h-12 w-auto mt-10"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <ul className="hidden md:flex items-center gap-10 text-lg text-white">

            {/* LEFT LINKS */}
            <li>
              <Link href="/" className={linkStyle("/")}>
                Home
                {isActive("/") && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white" />
                )}
              </Link>
            </li>

            {/* PACKAGES DROPDOWN */}
            <li className="relative group">
              <span className={`flex items-center gap-1 ${linkStyle("/packages")}`}>
                Packages <ChevronDown size={16} />
              </span>

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-44 bg-[#FCCFC5] text-[#6f1c0b] text-sm text-center shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  href="/packages/classic-life-drawing"
                  className="block px-4 py-3 hover:bg-[#FEEFEC]"
                >
                  Classic Life Drawing
                </Link>
                <Link
                  href="/packages/cheeky-butler"
                  className="block px-4 py-3 hover:bg-[#FEEFEC]"
                >
                  Cheeky Butler
                </Link>
                <Link
                  href="/packages/nude-paint-sip"
                  className="block px-4 py-3 hover:bg-[#FEEFEC]"
                >
                  Nude Paint & Sip
                </Link>
              </div>
            </li>

            <li>
              <Link href="/gallery" className={linkStyle("/gallery")}>
                Gallery
              </Link>
            </li>

            {/* CENTER LOGO (DESKTOP ONLY) */}
            <li className="mx-6 hidden md:block">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="Cheeky Hen Party Logo"
                  className="h-14 w-auto"
                />
              </Link>
            </li>

            {/* RIGHT LINKS */}
            <li>
              <Link href="/faq" className={linkStyle("/faq")}>
                FAQ
              </Link>
            </li>

            <li>
              <Link href="/booking" className={linkStyle("/booking")}>
                Booking
              </Link>
            </li>

            <li>
              <Link href="/contact" className={linkStyle("/contact")}>
                Contact
              </Link>
            </li>
          </ul>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden absolute right-5 text-white mt-10"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#FCCFC5] md:hidden">

          {/* Top bar */}
          <div className="flex justify-between items-center px-6 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/images/logo.png"
                alt="Cheeky Hen Party Logo"
                className="h-12 w-auto"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-[#6f1c0b]"
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-6 text-2xl text-[#6f1c0b]">

            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

            {/* MOBILE PACKAGES */}
            <button
              onClick={() => setPackagesOpen(!packagesOpen)}
              className="flex items-center gap-2"
            >
              Packages
              <ChevronDown
                className={`transition-transform ${
                  packagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {packagesOpen && (
              <div className="flex flex-col space-y-3 text-xl">
                <Link
                  href="/packages/classic-life-drawing"
                  onClick={() => setMenuOpen(false)}
                >
                  Classic Life Drawing
                </Link>
                <Link
                  href="/packages/cheeky-butler"
                  onClick={() => setMenuOpen(false)}
                >
                  Cheeky Butler
                </Link>
                <Link
                  href="/packages/nude-paint-sip"
                  onClick={() => setMenuOpen(false)}
                >
                  Nude Paint & Sip
                </Link>
              </div>
            )}

            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
