export default function Faq() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="px-6 py-20 text-left min-h-screen flex flex-col justify-center items-center bg-cover 
        bg-center bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/faq.jpg)' }}
        id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 pr-0 sm:pr-50 text-center sm:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold mb-6 sm:mb-10 text-white">
            Frequently Asked <br />
            Questions
          </h2>
          <p className="text-xl sm:text-2xl mb-8 sm:mb-12 text-white">
            Everything you need to know about our Hens Party packages
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section
        id="faq-content"
        className="text-center"
        style={{ backgroundColor: '#FFEFEB' }}
      >
        <div className="w-full sm:w-[70%] mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pt-12 sm:pt-20 pb-10 text-left">
            
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">What is a Life Drawing Class?</h3>
                <p>
                  Life Drawing also known as figure drawing, is the practice of drawing the human form typically nude through observation of a live model. Life drawing is all about capturing the figure of your model, sometimes even showing the way they move and muscle movement.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">What days can I book a Hens Party package for?</h3>
                <p>
                  Cheeky Hens Party runs 7 days a week all year round. Our Saturday sessions are our most popular classes so please book in advance.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">Can I book a package for another event, like a birthday or girls night?</h3>
                <p>Yes! While our packages are super popular for hens parties, they're also perfect for birthdays, girls nights, divorce parties, work events, or just a fun night in with friends. Anywhere you want laughs, creativity, and a cheeky twist, we've got you covered.</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">Do we get an art instructor?</h3>
                <p>Yes! you can choose to include a friendly art instructor to guide your session, help guests with simple techniques, and keep the party flowing.
                  <br />This is an optional add-on and can be selected when you book.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">Can we take photos or videos?</h3>
                <p>Absolutely! You're more than welcome to take photos and videos to capture the fun.</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">Do we need to provide anything?</h3>
                <p>No, we bring all art supplies, sketch pads, body-safe paints (for Body Painting package), and props. If you've booked a Cheeky Butler, he'll arrive ready to entertain and serve drinks.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">Can we book your venue to host our Hens Party?</h3>
                <p>Yes! We have a stylish, fully equipped art studio in To Kwa Wan. Venue fees apply.</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">Can we decorate the venue for our bride-to-be?</h3>
                <p>Definitely! You're welcome to bring decorations, balloons, or themed props to personalise the space and make it extra special.</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">What's included in the package?</h3>
                <p>Our packages include a nude hunky male model and all art supplies (sketching pencils, charcoals, pastels, A3 paper, etc.).</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl pb-2 text-[#6f1c0b] font-bold">Can we touch the model?</h3>
                <p>A little cheeky fun is part of the experience and our models are usually happy to play along! Their job is to entertain you after all 😉
                  <br />Just make sure you ask first, and always respect their comfort level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Questions – full width */}
      <section className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="pb-20 text-center">
            <h2 className="text-2xl sm:text-3xl py-4 mt-10 text-[#6f1c0b] font-bold">
              Got more questions?
            </h2>
            <a
              href="/contact"
              className="px-8 sm:px-15 py-3 text-white border border-white bg-[#82310e] hover:text-black hover:border-black hover:bg-white transition inline-block"
            >
              Shoot Us a Message!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
