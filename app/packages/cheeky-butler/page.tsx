export default function CheekyButler() {
  return (
    <>
      <section 
        className="px-6 py-20 text-left min-h-screen flex flex-col justify-center items-center bg-cover 
        bg-center bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/butler/hero.jpg)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 pr-50">
          <h2 className="text-7xl font-bold mb-4 text-white">
           Cheeky <br></br>
          Butler Service
          </h2>
          <p className="text-2xl mb-12 text-white">
            Because sometimes, the best accessory to a glass of bubbles... is a six-pack!
          </p>

          <a
            href="/booking"
            className="px-15 py-3 text-white border border-white hover:text-black hover:border-black transition"
          >
            Book Now
          </a>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#82310e]">Cheeky Butler Package</h2>
          <p className="text-lg mb-4 text-gray-700">
            Add a cheeky twist to your celebration! Our professional male butler will entertain your group 
            with charm, humor, and fun while serving drinks and keeping the party energy high.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#82310e]">What's Included</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Professional cheeky butler entertainment</li>
            <li>Drink service throughout the event</li>
            <li>Games and fun interactions</li>
            <li>Customizable duration (2, 2.5, or 3 hours)</li>
            <li>Tailored entertainment to your group's vibe</li>
            <li>Memorable moments and lots of laughs!</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#82310e]">Pricing</h3>
          <p className="text-lg text-gray-700">
            Starting from <strong>$350 per person</strong> (minimum 10 guests, $3,500 total)
          </p>

          <div className="mt-10 text-center">
            <a
              href="/booking"
              className="px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition"
            >
              Book Your Butler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
