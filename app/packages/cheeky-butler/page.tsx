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

{/* Planning Section */}
      <section className="px-6 py-10 bg-[#FEEFEC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#82310e]">Create the Ultimate Hen Party</h2>
          <p className="text-base sm:text-lg mb-4">
            Our Hunky Male Topless Waiters are the ultimate mix of eye candy, cheeky charm, and five-star service. From greeting your guests to topping up drinks, and making sure the bride feels like a queen, they'll keep the party buzzing all night.
          </p>
          <p className="text-base sm:text-lg mb-6">
            PRICE: $2,000 for 2 hours of service (Additional hours available)
          </p>

          <p className="font-bold text-left">What's included:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-left text-sm sm:text-base">
            <li>Professional, handsome male topless butler, charming, fun and ready to serve</li>
            <li>2 hours of service (option to extend)​</li>
            <li>Drink service, you supply the booze, they bring the vibe</li>
            <li>Opportunity for the Waiter to be involved in games</li>
            <li>Fun photo opportunities with your hunky butler</li>
          </ul>

          <div className="mt-10">
              <a
                href="/booking"
                className="px-8 sm:px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition inline-block"
              >
                Book A Cheeky Butler
              </a>
            </div>
        </div>
      </section>

    </>
  );
}
