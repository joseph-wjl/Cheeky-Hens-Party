export default function Footer() {
  return (
    <footer className="text-[#82310e] bg-[#FCCFC5]">

      {/* Main Footer */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">

          {/* LEFT — Brand / Contact */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl mb-10">
              CHEEKY HEN PARTY
            </h2>

            <p>
              <a
                href="mailto:cheekyhenparty@gmail.com"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                  <i className="fa-solid fa-envelope text-xl mr-2" ></i>
                  cheekyhenparty@gmail.com
              </a>
            </p>  

            <p>
              <a
                href="https://wa.me/85257856409"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                  <i className="fa-brands fa-whatsapp text-xl mr-2" ></i>
                  5785-6409
              </a>
            </p>

            <p>
                  <i className="fa-solid fa-phone text-xl mr-2" ></i>
                  5785-6409
            </p>

            

            <p className="mt-10 text-sm max-w-sm">
              Follow us on social media for the latest news, specials, and events.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/cheekyhenparty"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <i className="fa-brands fa-instagram fa-2x" />
              </a>
              <a
                href="https://www.facebook.com/share/1CpLKiRZUY/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <i className="fa-brands fa-square-facebook fa-2x" />
              </a>
            </div>
          </div>

          {/* MIDDLE — Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">
              SERVICES
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/packages/classic-life-drawing" className="underline">
                  Classic Life Drawing
                </a>
              </li>
              <li>
                <a href="/packages/cheeky-butler" className="underline">
                  Cheeky Butler
                </a>
              </li>
              <li>
                <a href="/packages/nude-paint-sip" className="underline">
                  Nude Paint & Sip
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT — Mini Contact Form */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">
              GOT A QUESTION?
            </h3>

            <form
              action="https://formspree.io/f/mykylygk"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border p-3 bg-white"
              />

              <input
                type="text"
                name="phone"
                placeholder="Contact Number"
                maxLength={9}
                className="w-full border p-3 bg-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border p-3 bg-white"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="w-full border p-3 resize-none bg-white"
              />

              <button
                type="submit"
                className="w-full py-3 bg-black text-white hover:bg-[#82310e] transition hover:cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="text-center py-4 text-xs">
        © {new Date().getFullYear()} Cheeky Hen Party
      </div>
    </footer>
  );
}
