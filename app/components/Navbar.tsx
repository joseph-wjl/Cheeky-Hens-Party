import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 w-full py-6 px-6 flex justify-center items-center bg-[#FCCFC5] shadow"> 
        <Link href="/">
          {/* <Image 
            src="/images/logo.png" 
            alt="Cheeky Hens" 
            width={150} 
            height={50}
            className="h-auto"
          /> */}
        </Link>
  
        <ul className="flex gap-20 text-lg text-[#6f1c0b]" id="nav-links">
          <li><a href="/">Home</a></li>
          <li className="relative group">
            <a className="hover-pointer">Packages</a>
            <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a href="/packages/classic-life-drawing" className="block px-4 py-2 hover:bg-[#FEEFEC] text-[#6f1c0b]">Classic Life Drawing</a>
              <a href="/packages/cheeky-butler" className="block px-4 py-2 hover:bg-[#FEEFEC] text-[#6f1c0b]">Cheeky Butler</a>
              <a href="/packages/nude-paint-sip" className="block px-4 py-2 hover:bg-[#FEEFEC] text-[#6f1c0b]">Nude Paint & Sip</a>
            </div>
          </li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/booking">Booking Request Form</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  