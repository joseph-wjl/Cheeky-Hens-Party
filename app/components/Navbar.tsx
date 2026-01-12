"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkStyle = (href: string) =>
    `relative cursor-pointer ${isActive(href) ? "font-bold" : ""}`;

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-center relative">

          {/* MOBILE LOGO */}
          <Link href="/" className="md:hidden absolute left-3">
            <img
              src="/images/logo.png"
              alt="Cheeky Hen Party Logo"
              className="h-12 w-auto mt-10"
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-10 text-lg text-white">

            <li>
              <Link href="/" className={linkStyle("/")}>
                HOME
                {isActive("/") && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white" />
                )}
              </Link>
            </li>

            {/* PACKAGES DROPDOWN */}
            <li className="relative group">
              <span className={`flex items-center gap-1 ${linkStyle("/packages")}`}>
                PACKAGES <ChevronDown size={16} />
              </span>

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-44 bg-[#FCCFC5] text-[#6f1c0b] text-sm text-center shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/packages/classic-life-drawing" className="block px-4 py-3 hover:bg-[#FEEFEC]">
                  Classic Life Drawing
                </Link>
                <Link href="/packages/cheeky-butler" className="block px-4 py-3 hover:bg-[#FEEFEC]">
                  Cheeky Butler
                </Link>
                <Link href="/packages/nude-paint-sip" className="block px-4 py-3 hover:bg-[#FEEFEC]">
                  Nude Paint & Sip
                </Link>
              </div>
            </li>

            <li>
              <Link href="/gallery" className={linkStyle("/gallery")}>GALLERY</Link>
            </li>

            {/* CENTER LOGO */}
            <li className="mx-6 hidden md:block">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="Cheeky Hen Party Logo"
                  className="h-14 w-auto"
                />
              </Link>
            </li>

            <li>
              <Link href="/faq" className={linkStyle("/faq")}>FAQ</Link>
            </li>

            <li>
              <Link href="/booking" className={linkStyle("/booking")}>BOOKING</Link>
            </li>

            <li>
              <Link href="/contact" className={linkStyle("/contact")}>CONTACT</Link>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden absolute right-5 text-white mt-10"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300 md:hidden
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= MOBILE PANEL ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#FCCFC5] z-[70]
        transform transition-transform duration-300 ease-out md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* TOP BAR (NO LOGO) */}
        <div className="flex justify-end px-6 py-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-[#6f1c0b] transition-transform duration-200 hover:rotate-90"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col items-center pt-10 px-6 text-2xl text-[#6f1c0b] gap-6">

          <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>

          {/* MOBILE PACKAGES with ultra-smooth natural dropdown */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setPackagesOpen(!packagesOpen)}
              className="flex items-center gap-2 w-full justify-center"
            >
              PACKAGES
              <ChevronDown
                className={`transition-transform duration-300 ${
                  packagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Smooth dropdown container */}
            <div
              className={`overflow-hidden transition-[max-height,margin,opacity,transform] duration-600
                ease-[cubic-bezier(0.22,1,0.36,1)] text-xl text-center
                ${packagesOpen ? "max-h-[1000px] mt-3 opacity-100 translate-y-0" : "max-h-0 mt-0 opacity-0 -translate-y-1"}
              `}
            >
              <div className="flex flex-col space-y-3">
                {[
                  { href: "/packages/classic-life-drawing", label: "Classic Life Drawing" },
                  { href: "/packages/cheeky-butler", label: "Cheeky Butler" },
                  { href: "/packages/nude-paint-sip", label: "Nude Paint & Sip" },
                ].map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transform transition-all duration-300 ease-out
                      ${packagesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }} // staggered links
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/booking" onClick={() => setMenuOpen(false)}>BOOKING</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </div>
      </div>
    </>
  );
}
