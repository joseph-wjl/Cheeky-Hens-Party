"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  return (
    <footer className="bg-[#FFDED6] pt-12">

      {/* ================= MOBILE FOOTER ================= */}
      <div className="md:hidden px-4 pb-10">
        <div className="bg-[#FCCFC5] rounded-2xl shadow-sm overflow-hidden text-[#82310e]">

          {/* Brand */}
          <div className="px-6 py-5 border-b font-semibold text-lg">
            Cheeky Hen
          </div>

          {/* Contact */}
          <button
            onClick={() => toggle("contact")}
            className="w-full flex justify-between items-center px-6 py-4 border-b text-sm"
          >
            Contact
            <ChevronDown
              size={18}
              className={`transition ${open === "contact" ? "rotate-180" : ""}`}
            />
          </button>
          {open === "contact" && (
            <div className="px-6 pb-4 text-sm space-y-2">
              <p>Email: cheekyhenparty@gmail.com</p>
              <p>WhatsApp: 5785-6409</p>
            </div>
          )}

          {/* Company */}
          <button
            onClick={() => toggle("company")}
            className="w-full flex justify-between items-center px-6 py-4 border-b text-sm"
          >
            Company
            <ChevronDown
              size={18}
              className={`transition ${open === "company" ? "rotate-180" : ""}`}
            />
          </button>
          {open === "company" && (
            <ul className="px-6 pb-4 text-sm space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/booking">Booking</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          )}

          {/* Services */}
          <button
            onClick={() => toggle("services")}
            className="w-full flex justify-between items-center px-6 py-4 border-b text-sm"
          >
            Services
            <ChevronDown
              size={18}
              className={`transition ${open === "services" ? "rotate-180" : ""}`}
            />
          </button>
          {open === "services" && (
            <ul className="px-6 pb-4 text-sm space-y-2">
              <li><a href="/packages/classic-life-drawing">Classic Life Drawing</a></li>
              <li><a href="/packages/cheeky-butler">Cheeky Butler</a></li>
              <li><a href="/packages/nude-paint-sip">Nude Paint & Sip</a></li>
            </ul>
          )}

          {/* Bottom row */}
          <div className="flex justify-between px-6 py-4 text-xs">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      <div className="hidden md:block bg-[#FCCFC5] px-12 py-14 text-[#82310e]">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl mb-4">Contact Us</h3>
            <p>Email: cheekyhenparty@gmail.com</p>
            <p className="mt-2">WhatsApp: 5785-6409</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/booking">Booking</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/packages/classic-life-drawing">Classic Life Drawing</a></li>
              <li><a href="/packages/cheeky-butler">Cheeky Butler</a></li>
              <li><a href="/packages/nude-paint-sip">Nude Paint & Sip</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#FFDED6] text-center text-xs py-3">
        © {new Date().getFullYear()} Cheeky Hen Party
      </div>
    </footer>
  );
}



// export default function Footer() {
//   return (
//     <footer>
//       {/* Main Footer */}
//       <div className="relative bg-[#FCCFC5] text-[#82310e] px-6 py-12 md:px-12 lg:px-20">

//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

//           {/* Contact */}
//           <div>
//             <h2 className="text-3xl md:text-4xl pb-6">Contact Us</h2>

//             <p className="pb-2">
//               Email:{" "}
//               <a
//                 href="mailto:cheekyhenparty@gmail.com"
//                 className="hover:underline"
//               >
//                 cheekyhenparty@gmail.com
//               </a>
//             </p>

//             <a
//               href="https://wa.me/85257856409"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block pb-4 hover:underline"
//             >
//               WhatsApp: 5785-6409
//             </a>

//             <p className="pb-3">Follow Us</p>

//             <div className="flex gap-4">
//               <a
//                 href="https://www.instagram.com/cheekyhenpartyhk"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-70"
//               >
//                 <i className="fa-brands fa-instagram fa-2x" />
//               </a>
//               <a
//                 href="https://www.facebook.com/share/1CpLKiRZUY/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-70"
//               >
//                 <i className="fa-brands fa-square-facebook fa-2x" />
//               </a>
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="font-bold text-lg pb-4">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:underline">Home</a></li>
//               <li><a href="/gallery" className="hover:underline">Gallery</a></li>
//               <li><a href="/faq" className="hover:underline">FAQ</a></li>
//               <li><a href="/booking" className="hover:underline">Booking Form</a></li>
//               <li><a href="/contact" className="hover:underline">Contact</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-bold text-lg pb-4">Services</h3>
//             <ul className="space-y-2">
//               <li><a href="/packages/classic-life-drawing" className="hover:underline">Classic Life Drawing</a></li>
//               <li><a href="/packages/cheeky-butler" className="hover:underline">Cheeky Butler</a></li>
//               <li><a href="/packages/nude-paint-sip" className="hover:underline">Nude Paint & Sip</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Banana Image */}
//         <img
//           src="/images/banana.png"
//           alt=""
//           className="hidden md:block h-60 absolute bottom-0 left-1/2 -translate-x-1/2"
//         />
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-[#FFDED6] text-center py-3 text-xs text-[#82310e]">
//         <p>© {new Date().getFullYear()} Cheeky Hen Party</p>
//       </div>
//     </footer>
//   );
// }
