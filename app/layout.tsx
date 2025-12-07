import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display"
});


export const metadata = {
  title: "Cheeky Hens",
  description: "Fun, cheeky, creative hen party life modelling experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <body>
        <Script
          src="https://kit.fontawesome.com/d9c9267d74.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
