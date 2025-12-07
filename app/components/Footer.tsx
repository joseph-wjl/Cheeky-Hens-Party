export default function Footer() {
    return (
      <>
        <footer>

          <div className="min-h-[200px] px-50 py-15 text-left bg-[#FCCFC5] text-[#82310e] relative">
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
            </div>

            <div className="bg-[#FFDED6] text-center py-3 text-xs">
              <p>© {new Date().getFullYear()} Cheeky Hens Party</p>
            </div>

        </footer>
      </>
    );
  }
  