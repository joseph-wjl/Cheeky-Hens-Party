export default function ClassicLifeDrawing() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="px-6 py-20 text-left min-h-screen flex flex-col justify-center items-center bg-cover 
        bg-center bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/classic-life-drawing/hero.jpg)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 pr-0 sm:pr-50 text-center sm:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold mb-4 text-white">
           Classic Life Drawing
          </h2>
          <p className="text-xl sm:text-2xl mb-12 text-white">
            Nudes, doodles & plenty of giggles!
          </p>

          <a
            href="/booking"
            className="px-8 sm:px-15 py-3 text-white border border-white hover:text-black hover:border-black transition inline-block"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Planning Section */}
      <section className="px-6 py-20 bg-[#FEEFEC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#82310e]">Planning a Hens Party?
              <br></br>You've just found the ultimate package</h2>
          <p className="text-base sm:text-lg mb-4">
            Treat your bride to our best selling Classic Life Drawing Class, a playful, classy experience where your crew sketches a professional (and very charming) life model with a bubbly host guiding the fun.
          </p>
          <p className="text-base sm:text-lg mb-6">
            Zero art skills needed, just bring your sense of humor. 
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-left text-sm sm:text-base">
            <li>Price: $300 per person (minimum 10 persons)</li>
            <li>Duration: 2 hours, sweet spot for max laughs and cute sketches</li>
            <li>Group Size: Small to supersized - invite the whole posse!​</li>
            <li>Venue: Your place or ours. We have an art studio available in To Kwa Wan. Venue fee applies. Request a quote in our Booking Request Form.</li>
          </ul>

          <div className="mt-10">
              <a
                href="/booking"
                className="px-8 sm:px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition inline-block"
              >
                Book Your Hens Party!
              </a>
            </div>
        </div>
      </section>

      {/* What's included Section */}
      <section className="bg-white">
        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="pl-0 sm:pl-30 py-10 sm:py-20 max-w-xl mx-auto sm:mx-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-[#82310e] text-center sm:text-left">What's included in the Life <br></br>Drawing package?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-10 text-gray-700">
              Our most popular package! Experience the thrill of life drawing with a professional nude male model. 
              Perfect for hen parties, birthdays, and girls' nights out.
            </p>

            <ul className="list-disc pl-6 space-y-3 sm:space-y-5 text-gray-700 text-sm sm:text-base">
              <li>Professional, hunky, nude model</li>
              <li>All art materials including sketch pads, drawing boards, A3 paper, charcoal/pencils and pastels</li>
              <li>Ice breaker games and timed challenges</li>
              <li>Keepsake sketches for the bride</li>
              <li>A chance for a photoshoot with the model</li>
            </ul>
            <h3 className="font-bold pt-6 sm:pt-10 pb-3 sm:pb-5 text-lg sm:text-xl">Optional add-ons:</h3>
            <ul className="list-disc pl-6 space-y-3 sm:space-y-5 text-gray-700 text-sm sm:text-base">
              <li>Friendly party host/facilitator (+$700)</li>
              <li>Request for the model to be dressed in character or to suit the theme of your Hens Party</li>
            </ul>
          </div>

          <div className="ml-0 sm:ml-0">
            <img src="/images/classic-life-drawing/package.png" alt="Classic Life Drawing Package" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Reveal Section */}
      <div 
        className="relative w-full flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]"
        style={{ backgroundImage: 'url(/images/classic-life-drawing/reveal.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <h1 className="relative z-10 text-white text-3xl sm:text-5xl max-w-md text-center px-4 sm:px-0">
            Art, laughter, and a <br></br> few <i>revealing</i> <br></br>moments!
          </h1>
      </div>
    </>
  );
}


// export default function ClassicLifeDrawing() {
//   return (
//     <>
//       <section 
//         className="px-6 py-20 text-left min-h-screen flex flex-col justify-center items-center bg-cover 
//         bg-center bg-bottom bg-no-repeat relative"
//         style={{ backgroundImage: 'url(/images/classic-life-drawing/hero.jpg)' }} id="hero"
//       >
//         <div className="absolute inset-0 bg-black/30"></div>
        
//         <div className="relative z-10 pr-50">
//           <h2 className="text-7xl font-bold mb-4 text-white">
//            Classic Life Drawing
//           </h2>
//           <p className="text-2xl mb-12 text-white">
//             Nudes, doodles & plenty of giggles!
//           </p>

//           <a
//             href="/booking"
//             className="px-15 py-3 text-white border border-white hover:text-black hover:border-black transition"
//           >
//             Book Now
//           </a>
//         </div>
//     </section>

//     <section className="px-6 py-20 bg-[#FEEFEC]">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8 text-[#82310e]">Planning a Hens Party?
//               <br></br>You've just found the ultimate package</h2>
//           <p className="text-lg mb-4">
//             Treat your bride to our best selling Classic Life Drawing Class, a playful, classy experience where your crew sketches a professional (and very charming) life model with a bubbly host guiding the fun.
//           </p>
//           <p className="text-lg mb-6">
//             Zero art skills needed, just bring your sense of humor. 
//           </p>
          
//           <ul className="list-disc pl-6 space-y-2 text-gray-700 text-left">
//             <li>Price: $300 per person (minimum 10 persons)</li>
//             <li>Duration: 2 hours, sweet spot for max laughs and cute sketches</li>
//             <li>Group Size: Small to supersized - invite the whole posse!​</li>
//             <li>Venue: Your place or ours. We have an art studio available in To Kwa Wan. Venue fee applies. Request a quote in our Booking Request Form.</li>
//           </ul>

//           <div className="mt-10">
//               <a
//                 href="/booking"
//                 className="px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition inline-block"
//               >
//                 Book Your Hens Party!
//               </a>
//             </div>
//         </div>
//       </section>

//       <section className="bg-white">
//         <div className="max-w-full mx-auto grid grid-cols-2 gap-0 items-center">
//           <div className="col-span-1 pl-30 py-20 max-w-xl">
//             <h2 className="text-3xl font-bold mb-12 text-[#82310e] text-center">What's included in the Life <br></br>Drawing package?</h2>
//             <p className="text-lg mb-10 text-gray-700">
//               Our most popular package! Experience the thrill of life drawing with a professional nude male model. 
//               Perfect for hen parties, birthdays, and girls' nights out.
//             </p>

//             <ul className="list-disc pl-6 space-y-5 text-gray-700">
//               <li>Professional, hunky, nude model</li>
//               <li>All art materials including sketch pads, drawing boards, A3 paper, charcoal/pencils and pastels</li>
//               <li>Ice breaker games and timed challenges</li>
//               <li>Keepsake sketches for the bride</li>
//               <li>A chance for a photoshoot with the model</li>
//             </ul>
//             <h3 className="font-bold pt-10 pb-5">Optional add-ons:</h3>
//             <ul className="list-disc pl-6 space-y-5 text-gray-700">
//               <li>Friendly party host/facilitator (+$700)</li>
//               <li>Request for the model to be dressed in character or to suit the theme of your Hens Party</li>
//             </ul>
//           </div>

//           <div className="col-span-1 ml-0">
//             <img src="/images/classic-life-drawing/package.png" alt="Classic Life Drawing Package" className="w-full h-full object-cover"></img>
//           </div>
//         </div>
//     </section>
    
//     <div 
//         className="relative w-full flex items-center justify-center overflow-hidden"
//         style={{ backgroundImage: 'url(/images/classic-life-drawing/reveal.png)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}>
//             <div className="absolute inset-0 bg-black/20"></div>
//             <h1 className="relative z-10 text-white text-5xl mr-150 max-w-md text-center">Art, laughter, and a <br></br> few <i>revealing</i> <br></br>moments!</h1>
//     </div>
      
//     </>
//   );
// }
