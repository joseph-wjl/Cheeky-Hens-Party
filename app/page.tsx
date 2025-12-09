export default function Home() {
  return (
    <>
      <section 
        className="px-6 py-20 text-left min-h-screen flex flex-col justify-center items-center bg-cover 
        bg-center bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 pr-50">
          <h2 className="text-7xl font-bold mb-4 text-white">
           Hens Party <br></br>
          Life Drawing Class
          </h2>
          <p className="text-2xl mb-12 text-white">
            Celebrate your Hens Party in style - sip, sketch & laugh the night away
          </p>

          <a
            href="#idea"
            className="px-15 py-3 text-white border border-white hover:text-black hover:border-black transition"
          >
            Get Started
          </a>
        </div>
      </section>

{/* Idea section */}

      <section 
        id="idea"
        className="bg-cover bg-center bg-no-repeat px-6 py-20 pl-20 min-h-screen flex flex-col 
        justify-center items-start text-left relative"
        style={{ backgroundImage: 'url(/images/idea.png)' }}
      >
        <div className="relative z-10 text-[#6f1c0b]">
          <h2 className="text-4xl font-bold mb-4">
           Looking for a fun Hen Party idea?
          </h2>
            <p>Let us take care of your Hens Party entertainment with our popular Life Drawing Class!</p>
            <p>Create an unforgettable hens night for the Bride-To-Be and the Hens.</p>
        </div>
      </section>

{/* Process section */}

      <section
      id="process"
      className="bg-[#82310e] text-white bg-cover bg-center bg-no-repeat px-6 py-20 text-center 
      min-h-screen flex flex-col justify-center items-center text-center relative">
        <div>
          <h2 className="text-4xl font-bold mb-4">Hens Party Booking Process</h2>
          <h2 className="text-4xl font-bold mb-4 italic mb-10">Step-by-Step Guide</h2>
          <p className="mb-15">
            Booking a hens party can feel overwhelming, but Cheeky Hens Party makes it effortlessly fun!
          </p>

            {/* Box */}

            <div id="box" className="flex items-start gap-4 mb-20 mx-20">
              <div className="flex flex-col items-center flex-1">
                <i className="fa-solid fa-location-dot fa-3x mb-4"></i>
                <h3 className="text-2xl font-bold mb-2 text-center min-h-[3rem]">Choose your Hens package</h3>
                <p className="text-center">Select one of our Hens Party packages and your location.</p>
              </div>
              <span className="text-4xl mt-8">→</span>
              <div className="flex flex-col items-center flex-1">
                <i className="fas fa-mobile-screen-button mb-4 fa-3x"></i>
                <h3 className="text-2xl font-bold mb-2 text-center min-h-[3rem]">Fill out our 'Booking Request Form'</h3>
                <p className="text-center">Include your party details: date, number of guest, location and preferred time.</p>
              </div>
              <span className="text-4xl mt-8">→</span>
              <div className="flex flex-col items-center flex-1">
                <i className="fa-solid fa-hand-holding-dollar fa-3x mb-4"></i>
                <h3 className="text-2xl font-bold mb-2 text-center min-h-[3rem]">Book your Hens Party</h3>
                <p className="text-center">A $1,500 deposit secures your event. Final payment is due one week prior.</p>
              </div>
              <span className="text-4xl mt-8">→</span>
              <div className="flex flex-col items-center flex-1">
                <i className="fa-solid fa-champagne-glasses fa-3x mb-4"></i>
                <h3 className="text-2xl font-bold mb-2 text-center min-h-[3rem]">Enjoy the celebration!</h3>
                <p className="text-center">With everything set, it's time to kick back and enjoy the fruits of your labor.</p>
              </div>
            </div>

            {/* box ends */}

          <a
            href="/booking"
            className="px-15 py-3 text-white border border-white hover:text-black hover:border-black transition"
          >
            Book Now!
          </a>
        </div>
      </section>

{/* Hunks section */}

<section
  id="hunks"
  className="text-center"
  style={{ backgroundColor: '#FEEFEC' }}
>
  <div>
    <h2 className="text-4xl py-20 text-[#6f1c0b]">Feast your eyes on our Hunks</h2>
  </div>

  <div
    id="hunk-pics"
    className="max-w-6xl mx-auto px-6 pb-20"
  >
    <div className="grid grid-cols-3 gap-3">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="w-full aspect-square overflow-hidden shadow-sm"
        >
          <img
            src={`/images/hunks/hunk${i + 1}.png`}
            alt={`Hunk ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>


{/* Review section */}

      <section
      id="reviews"
      className="text-black py-20 text-center"
      style={{ backgroundColor: '#ffffff' }}>
        <div className="px-6">
          <h2 className="text-center mb-8 text-4xl text-[#6f1c0b]">What our customers say</h2>
            <div id="review-box" className="flex gap-6 justify-center items-start py-8 px-20 mx-20">
              <div className="flex flex-col" style={{ backgroundColor: '#FEEFEC', width: '300px', height: '500px', padding: '32px' }}>
                <div className="flex items-center justify-center" style={{ height: '20%' }}>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div style={{ height: '60%', overflow: 'auto' }}>
                  <p>
                    "This was bloody amazing! We did this for my sisters Hens Party on the Gold Coast. 
                    Thank you so much guys! We had an absolute hoot and have not stopped talking about it. 
                    An hour of belly laughs."
                  </p>
                </div>
                <div className="flex items-center justify-center" style={{ height: '20%' }}>
                  <p>Alex</p>
                </div>
              </div>
              <div className="flex flex-col" style={{ backgroundColor: '#FEEFEC', width: '300px', height: '500px', padding: '32px' }}>
                <div className="flex items-center justify-center" style={{ height: '20%' }}>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div style={{ height: '60%', overflow: 'auto' }}>
                  <p>"This was my second time booking Foxy Hens Life Drawing for a hens party. 
                    The reason being it is so awesome. This time round Kat our facilitator did some different 
                    art activities that had us all in stitches laughing. Our topless waiter was an absolute vibe 
                    and really got into character."
                  </p>
                </div>
                <div className="flex items-center justify-center" style={{ height: '20%' }}>
                  <p>Cassie</p>
                </div>
              </div>
              <div className="flex flex-col" style={{ backgroundColor: '#FEEFEC', width: '300px', height: '500px', padding: '32px' }}>
                <div className="flex items-center justify-center" style={{ height: '20%' }}>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div style={{ height: '60%', overflow: 'auto' }}>
                  <p>
                      "Perfect hens party idea! I organised a life drawing class with Foxy Hens Party for my 
                      best friends hens day and she loved every bit of it. Scott made the booking hassle free 
                      and arranged all our requests. Everyone had so much fun and made great memories 
                      with our bride."
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{ height: '20%' }}>
                  <p>Dalilah</p>
                </div>
              </div>
            </div>
        </div>
      </section>

{/* Questions section */}

      <section
      id="questions"
      className="text-center"
      style={{ backgroundColor: '#FEEFEC' }}>
        <div className="w-[65%] mx-auto">
          <h2 className="text-4xl pt-12 pb-8 text-[#6f1c0b]">Have questions? We've got the answers</h2>

          <div className="p-5">
            <h3 className="text-2xl pb-2">How much is the Life Drawing class package?</h3>
            <p>
              Hens Party packages start from $300 per person, with a minimum booking fee of $3,000.
            </p>
          </div>

          <div className="p-5">
            <h3 className="text-2xl pb-2">How long does the Life Drawing class run for?</h3>
            <p>
              Life Drawing class runs for 2 hours.
            </p>
          </div>

          <div className="p-5">
            <h3 className="text-2xl pb-2">What to expect in a Life Drawing Class?</h3>
            <p>A Hens Party Life Drawing Class is a nude art class where we have a male model who will pose in different poses for you while you draw him on paper using sketching pencils, charcoals and coloured pastels on A3 paper. During this time our art teacher will be teaching you the basics of Life Drawing.</p>
          </div>

          <div className="p-5">
            <h3 className="text-2xl pb-2">How can we book a Hens Party package?</h3>
            <p>Fill in our 'Booking Request Form' with your party details. A $1,500 deposit is required to secure your event, the remaining amount is due one week prior to your party once we confirm your final guest numbers.
              Follow our Step-by-Step Booking Guide, where we break the booking process down into 4 easy steps.
            </p>
          </div>

          <div className="p-5">
            <h3 className="text-2xl pb-2">Where can we host the class?</h3>
            <p>The session works best in a private indoor space such as a hotel suite, function room, home, or Airbnb.
              <br></br>If you don’t have a location in mind, we can help arrange a venue for you for a small booking fee, or you’re welcome to host the session in our art studio.</p>
          </div>

          <div className="p-5 pb-20">
            <h3 className="text-2xl pb-2">Why should you book a Life Drawing Class for a Hens Party?</h3>
            <p>Here's why it's such a hit:</p>
            <p className="text-left pl-5">
              · It's hilarious and memorable! Nothing breaks the ice faster than sketching a nude model while laughing with your besties.<br></br>
              · Everyone can join in! No artistic skills required. It's all about fun, not perfection.<br></br>
              · A touch of naughty! Flirty enough to get the giggles going, but still classy and social.<br></br>
              · Unique memories and masterpieces! You'll walk away with drawings, stories, and laughs to last long after the wedding.
            </p>
          </div>
        </div>

      </section>

      {/* <section className="min-h-[200px] px-50 py-15 text-left bg-[#FCCFC5] text-[#82310e] relative">
        <h2 className="text-4xl pb-8">Contact Us</h2>
        <p className="pb-3">Email: cheekyhensparty@gmail.com</p>
        <p>WhatsApp: 0000-0000</p>
        <p className="pt-6 pb-2">Follow Us on Socials</p>
        <i className="fa-brands fa-instagram fa-2x pr-4"></i>
        <i className="fa-brands fa-square-facebook fa-2x"></i>
        <img
          src="/images/banana.png"
          className="h-70 absolute bottom-0 right-0"
        />
      </section> */}


    </>
  );
}
