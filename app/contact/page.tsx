export default function Contact() {
  return (
    <>
      <section 
        className="px-6 py-20 text-center min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10">
          <h2 className="text-7xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-2xl mb-12 text-white">
            Get in touch with the Cheeky Hens team
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#FEEFEC]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#82310e]">
            Reach Out to Us
          </h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2 text-[#82310e]">Name</label>
              <input 
                type="text" 
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-[#82310e] rounded focus:outline-none focus:ring-2 focus:ring-[#82310e]"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2 text-[#82310e]">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-[#82310e] rounded focus:outline-none focus:ring-2 focus:ring-[#82310e]"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2 text-[#82310e]">Phone</label>
              <input 
                type="tel" 
                placeholder="Your phone number"
                className="w-full px-4 py-3 border-2 border-[#82310e] rounded focus:outline-none focus:ring-2 focus:ring-[#82310e]"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2 text-[#82310e]">Message</label>
              <textarea 
                placeholder="Your message..."
                rows={6}
                className="w-full px-4 py-3 border-2 border-[#82310e] rounded focus:outline-none focus:ring-2 focus:ring-[#82310e]"
              />
            </div>

            <button 
              type="submit"
              className="w-full px-12 py-3 bg-[#82310e] text-white font-semibold hover:bg-[#6f1c0b] transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#82310e]">Other Ways to Reach Us</h3>
            <p className="text-lg mb-2">📧 Email: info@cheekyhens.com</p>
            <p className="text-lg mb-2">📞 Phone: +852 XXXX XXXX</p>
            <p className="text-lg">📍 Location: Hong Kong</p>
          </div>
        </div>
      </section>
    </>
  );
}
