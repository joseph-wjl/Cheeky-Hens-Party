"use client";

import { useState } from "react";

export default function BookingPage() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState("");

  // phone formatter (no useState)
  const formatPhone = (e: React.FormEvent<HTMLInputElement>) => {
    let v = e.currentTarget.value.replace(/\D/g, "").slice(0, 8);
    if (v.length > 4) {
      v = v.slice(0, 4) + "-" + v.slice(4);
    }
    e.currentTarget.value = v;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedTime = `${hour}:${minute} ${period}`;
    alert(`Form submitted! Event Time: ${selectedTime}`);
  };

  return (
    <>
      <div className="px-6 py-20 bg-[#FEEFEC] text-center text-[#82310e]">
        <h1 className="text-6xl font-bold mb-10">Booking Request Form</h1>
        <h2 className="text-2xl mb-8">Let's Create Something Beautiful (and a little cheeky!)</h2>
        <p className="mb-5">
          Use the form below to check availability, request a quote or any other
          questions you may have on our Hens Party Packages.
        </p>
        <p>
          Our team is more than happy to help and will get back to you within 24
          hours with all your answers.
        </p>
      </div>

    {/* Form */}

      <div className="px-6 py-20 flex justify-center bg-[#FCCFC5]">
        <form className="p-10 max-w-5xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
              <div>
                <label className="block mb-1">First Name</label>
                <input
                  type="text"
                  required
                  pattern="[A-Za-z ]+"
                  className="w-full border p-3 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border p-3 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Event Location</label>
                <select required className="w-full border p-3 h-13 bg-white">
                  <option value="">Select Event Location</option>
                  <optgroup label="Hong Kong Island">
                    <option>Central & Western</option>
                    <option>Eastern</option>
                    <option>Southern</option>
                    <option>Wan Chai</option>
                  </optgroup>

                  <optgroup label="Kowloon">
                    <option>Kowloon City</option>
                    <option>Kwun Tong</option>
                    <option>Sham Shui Po</option>
                    <option>Wong Tai Sin</option>
                    <option>Yau Tsim Mong</option>
                  </optgroup>

                  <optgroup label="New Territories">
                    <option>Tsuen Wan</option>
                    <option>Tuen Mun</option>
                    <option>Yuen Long</option>
                    <option>Kwai Tsing</option>
                    <option>North</option>
                    <option>Sai Kung</option>
                    <option>Sha Tin</option>
                    <option>Tai Po</option>
                    <option>Islands</option>
                  </optgroup>

                  <optgroup label="Our Studio Location">
                    <option>To Kwa Wan</option>
                  </optgroup>

                </select>
              </div>

              <div>
                <label className="block mb-1">Art Instructor Needed?</label>
                <select required className="w-full border p-3 h-13 bg-white">
                  <option value="">Select Option</option>
                  <option>No</option>
                  <option>Yes (+$700)</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full border p-3 resize-none bg-white"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6">
              <div>
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  required
                  pattern="[A-Za-z ]+"
                  className="w-full border p-3 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="text"
                  required
                  maxLength={9}
                  onInput={(e) => formatPhone(e)}
                  className="w-full border p-3 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Event Type</label>
                <select required className="w-full border p-3 h-13 bg-white">
                  <option value="">Select Event Type</option>
                  <option>Classic Life Drawing</option>
                  <option>Cheeky Butler</option>
                  <option>Nude Paint & Sip</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Event Duration</label>
                <select required className="w-full border p-3 h-13 bg-white">
                  <option value="">Select Duration</option>
                  <option>2 hours</option>
                  <option>2.5 hours</option>
                  <option>3 hours</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Event Date</label>
                <input
                  type="date"
                  required
                  className="w-full border p-3 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Event Time</label>
                <div className="flex gap-2">
                  <select
                    required
                    className="w-1/3 border p-3 h-13 bg-white"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                  >
                    <option value="">Hour</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    className="w-1/3 border p-3 h-13 bg-white"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                  >
                    <option value="">Minute</option>
                    {[...Array(60)].map((_, i) => {
                      const val = i < 10 ? `0${i}` : `${i}`;
                      return (
                        <option key={i} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    required
                    className="w-1/3 border p-3h-13 bg-white"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                  >
                    <option value="">AM/PM</option>
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"
              className="px-12 py-3 bg-black text-white hover:bg-[#82310e] transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
