"use client";

import { useState } from "react";
import { useForm } from "@formspree/react";

export default function BookingPage() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState("");

  const [state, handleSubmitSpree] = useForm("myzrbzgk");

  const formatPhone = (e: React.FormEvent<HTMLInputElement>) => {
    let v = e.currentTarget.value.replace(/\D/g, "").slice(0, 8);
    if (v.length > 4) {
      v = v.slice(0, 4) + "-" + v.slice(4);
    }
    e.currentTarget.value = v;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "booking_submission", {
        event_category: "Booking",
        value: 1,
      });
    }

    handleSubmitSpree(e);
  };

  if (state.succeeded) {
    return (
      <div className="px-6 py-20 text-center text-[#82310e] bg-[#FEEFEC]">
        <h1 className="text-4xl font-bold mb-6">Booking Received!</h1>
        <p className="text-xl">
          Thanks for your request. We’ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* HEADER */}
      <div className="px-6 py-20 bg-[#FEEFEC] text-center text-[#82310e]">
        <h1 className="text-5xl sm:text-6xl font-bold mb-10">
          Booking Request Form
        </h1>
        <h2 className="text-xl sm:text-2xl mb-8">
          Let's Create Something Beautiful (and a little cheeky!)
        </h2>
        <p className="mb-5">
          Use the form below to check availability, request a quote or ask any
          questions about our Hen Party Packages.
        </p>
        <p>
          Our team will get back to you within 24 hours.
        </p>
      </div>

      {/* FORM */}
      <div className="px-6 py-20 flex justify-center bg-[#FCCFC5]">
        <form
          onSubmit={handleSubmit}
          className="p-10 max-w-5xl w-full"
        >
          {/* 🔑 SINGLE PARENT LAYOUT */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            {/* 1. First Name */}
            <div className="order-1">
              <label className="block mb-1">First Name</label>
              <input
                name="firstName"
                type="text"
                required
                className="w-full border p-3 bg-white"
              />
            </div>

            {/* 2. Last Name */}
            <div className="order-2">
              <label className="block mb-1">Last Name</label>
              <input
                name="lastName"
                type="text"
                required
                className="w-full border p-3 bg-white"
              />
            </div>

            {/* 3. Email */}
            <div className="order-3">
              <label className="block mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full border p-3 bg-white"
              />
            </div>

            {/* 4. Phone */}
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

            {/* 5. Event Type */}
            <div className="order-5">
              <label className="block mb-1">Event Type</label>
              <select
                name="eventType"
                required
                className="w-full border p-3 bg-white"
              >
                <option value="">Select Event Type</option>
                <option>Classic Life Drawing</option>
                <option>Cheeky Butler</option>
                <option>Nude Paint & Sip</option>
              </select>
            </div>

            {/* 6. Event Location */}
            <div className="order-6">
              <label className="block mb-1">Event Location</label>
              <select
                name="location"
                required
                className="w-full border p-3 bg-white"
              >
                <option value="">Select Location</option>
                <option>Hong Kong Island</option>
                <option>Kowloon</option>
                <option>New Territories</option>
                <option>To Kwa Wan (Studio)</option>
              </select>
            </div>

            {/* 7. Duration */}
            <div className="order-7">
              <label className="block mb-1">Event Duration</label>
              <select
                name="duration"
                required
                className="w-full border p-3 bg-white"
              >
                <option value="">Select Duration</option>
                <option>2 hours</option>
                <option>2.5 hours</option>
                <option>3 hours</option>
              </select>
            </div>

            {/* 8. Date */}
            <div className="order-8">
              <label className="block mb-1">Event Date</label>
              <input
                name="date"
                type="date"
                required
                className="w-full border p-3 bg-white"
              />
            </div>

            {/* 9. Time */}
            <div className="order-9">
              <label className="block mb-1">Event Time</label>
              <div className="flex gap-2">
                <select
                  required
                  className="w-1/3 border p-3 bg-white"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                >
                  <option value="">Hour</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>

                <select
                  required
                  className="w-1/3 border p-3 bg-white"
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                >
                  <option value="">Minute</option>
                  {[...Array(60)].map((_, i) => {
                    const v = i < 10 ? `0${i}` : `${i}`;
                    return <option key={i}>{v}</option>;
                  })}
                </select>

                <select
                  required
                  className="w-1/3 border p-3 bg-white"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="">AM/PM</option>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>

            {/* 10. Instructor */}
            <div className="order-10">
              <label className="block mb-1">Art Instructor Needed?</label>
              <select
                name="instructor"
                required
                className="w-full border p-3 bg-white"
              >
                <option value="">Select Option</option>
                <option>No</option>
                <option>Yes (+$700)</option>
              </select>
            </div>

            {/* 11. Message */}
            <div className="order-11 md:col-span-2">
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full border p-3 resize-none bg-white"
              />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="px-12 py-3 bg-black text-white hover:bg-[#82310e] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
