"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {

const questions = [
  {
    q: "How much is the life drawing class package?",
    a: "Hen party packages start from $300 per person, with a minimum booking fee of $3,000.",
  },
  {
    q: "How long does the life drawing class run for?",
    a: "Life drawing class runs for 2 hours.",
  },
  {
    q: "What to expect in a life drawing class?",
    a: "A Hen Party life drawing class is a nude art class with a male model posing for you while you draw using pencils, charcoals, and pastels. Our art teacher guides you through the basics.",
  },
  {
    q: "How can we book a hen party package?",
    a: "Fill in our Booking Request Form with your party details. A $1,500 deposit is required to secure your event; the remaining amount is due one week prior.",
  },
  {
    q: "Where can we host the class?",
    a: "Private indoor spaces like hotel suites, function rooms, party rooms, homes, or Airbnb. We can help arrange a venue for a small booking fee or host the class in our art studio.",
  },
  {
    q: "Why should you book a life drawing class for a hen party?",
    a: `• It's hilarious and memorable! Nothing breaks the ice faster than sketching a male model while laughing with friends.
• Everyone can join in! No artistic skills required.
• A touch of naughty! Flirty enough to get the giggles going, but still classy.
• Unique memories and masterpieces! Walk away with drawings, stories, and laughs.`,
  },
];

const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="px-6 py-20 text-center min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4l w-full lg:pl-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:text-left font-bold mb-4 text-white">
            The First and Only 
            <br></br>Hen Party Life Drawing Experience
            <br></br>in Hong Kong
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 lg:text-left text-white">
            Celebrate your Hen Party in style – sip, sketch & laugh the night away
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/packages/classic-life-drawing"
              className="px-6 py-2 sm:px-10 sm:py-3 text-white border border-white hover:text-black hover:border-black transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Idea Section
      <section 
        id="idea"
        className="bg-cover bg-center bg-no-repeat px-6 py-20 min-h-screen flex flex-col justify-center items-center text-center lg:text-left lg:pr-150 relative"
        style={{ backgroundImage: 'url(/images/idea.png)' }}
      >
        <div className="relative z-10 text-[#6f1c0b] max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Looking for a fun Hen Party idea?
          </h2>
          <p>Let us take care of your Hen Party entertainment with our popular Life Drawing Class!</p>
          <p>Create an unforgettable hen night for the Bride-To-Be and friends.</p>
        </div>
      </section> */}

      {/* Idea Section */}
        <section
          id="idea"
          className="relative bg-cover bg-center bg-no-repeat px-6 py-16 sm:py-20 lg:min-h-screen flex items-center"
          style={{ backgroundImage: "url(/images/idea.png)" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#FCCFC5]/70 lg:bg-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0 lg:ml-24 text-center lg:text-left text-[#6f1c0b] bg-white/70 lg:bg-transparent p-6 sm:p-8 rounded-2xl lg:rounded-none">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Looking for a fun Hen Party idea?
            </h2>

            <p className="mb-2">
              Let us take care of your Hen Party entertainment with our popular Life Drawing Class!
            </p>

            <p>
              Create an unforgettable hen night for the Bride-To-Be and friends.
            </p>
          </div>
        </section>


      {/* Process Section */}
      <section
        id="process"
        className="bg-[#82310e] text-white px-6 py-20 flex flex-col items-center text-center"
      >
        <div className="max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Hen Party Booking Process</h2>
          <h2 className="text-2xl sm:text-3xl font-bold italic mb-6 sm:mb-10">Step-by-Step Guide</h2>
          <p className="mb-10">
            Booking a hen party can feel overwhelming, but Cheeky Hen Party makes it effortlessly fun!
          </p>

          {/* Steps */}
          <div id="box" className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 mb-10">
            {[
              { icon: "fa-location-dot", title: "Choose your Hen package", desc: "Select one of our Hen Party packages and your location." },
              { icon: "fa-mobile-screen-button", title: "Fill out our 'Booking Request Form'", desc: "Include your party details: date, number of guests, location and preferred time." },
              { icon: "fa-hand-holding-dollar", title: "Book your Hen Party", desc: "A $1,500 deposit secures your event. Final payment is due one week prior." },
              { icon: "fa-champagne-glasses", title: "Enjoy the celebration!", desc: "With everything set, it's time to kick back and enjoy the fun." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <i className={`fa-solid ${step.icon} fa-3x mb-4`}></i>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-center">{step.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="/booking"
            className="px-6 py-2 sm:px-10 sm:py-3 text-white border border-white hover:text-black hover:border-black transition"
          >
            Book Now!
          </a>
        </div>
      </section>

      {/* Hunks Section */}
      <section
        id="hunks"
        className="text-center bg-[#FEEFEC] px-6 py-20"
      >
        <h2 className="text-3xl sm:text-4xl py-10 text-[#6f1c0b]">Feast your eyes on our Hunks</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-full aspect-square overflow-hidden shadow-sm">
                <img
                  src={`/images/hunks/hunk${i + 1}.png`}
                  alt={`Male model posing for hen party class, Hunk ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section
        id="reviews"
        className="text-black py-20 text-center bg-white"
      >
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-8 text-[#6f1c0b]">What our customers say</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-start py-8">
            {[
              { name: 'Alex', text: 'This was bloody amazing! We did this for my sister\'s Hen Party in Hong Kong. Thank you so much! An hour of belly laughs.' },
              { name: 'Cassie', text: 'This was my second time booking Foxy Hen Life Drawing for a hen party. Our facilitator did different art activities that had us all in stitches.' },
              { name: 'Dalilah', text: 'Perfect hen party idea! Everyone had so much fun and made great memories with our bride.' }
            ].map((review, i) => (
              <div key={i} className="flex flex-col bg-[#FEEFEC] w-full sm:w-[300px] h-auto sm:h-[500px] p-6 sm:p-8">
                <div className="flex items-center justify-center h-12 sm:h-20">
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="flex-1 overflow-auto">
                  <p>{review.text}</p>
                </div>
                <div className="flex items-center justify-center h-10 sm:h-20">
                  <p>{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Section */}

      <section
            id="questions"
            className="text-center bg-[#FEEFEC] pb-10 px-6"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl pt-12 pb-10 text-[#6f1c0b]">
                Have questions? We've got the answers
              </h2>

              <div className="space-y-4 text-left">
                {questions.map((qa, i) => (
                  <div
                    key={i}
                    className="border-b border-[#e4b9ae] pb-4"
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex justify-between items-center text-left "
                      
                    >
                      <h3 className="text-xl sm:text-2xl text-[#6f1c0b] font-bold">
                        {qa.q}
                      </h3>

                      <ChevronDown
                        className={`w-6 h-6 text-[#6f1c0b] transition-transform duration-500 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />

                    </button>

                    {openIndex === i && (
                      <p className="mt-3 text-[#6f1c0b] whitespace-pre-line animate-fade">
                        {qa.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
    </>
  );
}
