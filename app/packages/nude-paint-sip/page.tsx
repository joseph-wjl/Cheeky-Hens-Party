export default function NudePaintSip() {
  return (
    <>
      <section 
        className="px-6 py-20 text-left min-h-screen flex flex-col justify-center items-center bg-cover 
        bg-center bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/paint/hero.avif)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 pr-50">
          <h2 className="text-7xl font-bold mb-4 text-white">
           Nude Paint & Sip
          </h2>
          <p className="text-2xl mb-12 text-white">
            Art, drinks, and good vibes - all in one unforgettable experience
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
          <h2 className="text-4xl font-bold mb-6 text-[#82310e]">Nude Paint & Sip Package</h2>
          <p className="text-lg mb-4 text-gray-700">
            Combine the fun of life drawing with your favorite beverages! This package is perfect for those 
            who want to unleash their inner artist while enjoying wine, cocktails, or other drinks.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#82310e]">What's Included</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Live male model for painting/drawing</li>
            <li>Professional art instruction</li>
            <li>All art supplies and materials</li>
            <li>Canvas or A3 paper for each guest</li>
            <li>Beverages of your choice (BYOB or we can arrange)</li>
            <li>2-3 hours of creative fun</li>
            <li>Take home your masterpiece!</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#82310e]">Pricing</h3>
          <p className="text-lg text-gray-700">
            Starting from <strong>$400 per person</strong> (minimum 10 guests, $4,000 total)
          </p>

          <div className="mt-10 text-center">
            <a
              href="/booking"
              className="px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition"
            >
              Book Paint & Sip
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
