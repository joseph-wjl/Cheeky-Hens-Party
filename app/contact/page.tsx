"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const formatPhone = (e: React.FormEvent<HTMLInputElement>) => {
    let v = e.currentTarget.value.replace(/\D/g, "").slice(0, 8);
    if (v.length > 4) {
      v = v.slice(0, 4) + "-" + v.slice(4);
    }
    e.currentTarget.value = v;
  };

  if (submitted) {
    return (
      <div className="px-6 py-20 text-center bg-[#FEEFEC] text-[#82310e]">
        <Reveal>
          <h1 className="text-4xl font-bold mb-6">Message Sent 💌</h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xl">
            Thanks for reaching out! We’ll get back to you within 24 hours.
          </p>
        </Reveal>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section
        className="px-6 py-20 text-center min-h-150 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-white">
          <Reveal>
            <h1 className="text-6xl sm:text-7xl font-bold mb-4">Contact Us</h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xl sm:text-2xl">Get in touch with the Cheeky Hen team</p>
          </Reveal>
        </div>
      </section>

      {/* FORM */}
      <div className="px-6 py-10 bg-[#FEEFEC] flex justify-center">
        <form
          action="https://formspree.io/f/mykylygk"
          method="POST"
          className="p-10 max-w-4xl w-full"
          onSubmit={() => setSubmitted(true)}
        >
          <Reveal>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-x-8 gap-y-4">
              {/* First Name */}
              <div className="order-1">
                <label className="block mb-1">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="w-full border p-3 bg-white"
                />
              </div>

              {/* Last Name */}
              <div className="order-2">
                <label className="block mb-1">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="w-full border p-3 bg-white"
                />
              </div>

              {/* Email */}
              <div className="order-3">
                <label className="block mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border p-3 bg-white"
                />
              </div>

              {/* Phone */}
              <div className="order-4">
                <label className="block mb-1">Phone</label>
                <input
                  name="phone"
                  type="text"
                  required
                  maxLength={9}
                  onInput={formatPhone}
                  className="w-full border p-3 bg-white"
                />
              </div>

              {/* Enquiry Type */}
              <div className="order-5">
                <label className="block mb-1">Enquiry Type</label>
                <select
                  name="enquiryType"
                  required
                  className="w-full border p-3 h-13 bg-white"
                >
                  <option value="">Select Enquiry Type</option>
                  <option>General Question</option>
                  <option>Pricing</option>
                  <option>Availability</option>
                  <option>Partnership / Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div className="order-6 md:col-span-2">
                <label className="block mb-1">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full border p-3 resize-none bg-white"
                />
              </div>
            </div>
          </Reveal>

          {/* SUBMIT */}
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <button
                type="submit"
                className="px-12 py-3 bg-black text-white hover:bg-[#82310e] transition hover:cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </Reveal>
        </form>
      </div>
    </>
  );
}
