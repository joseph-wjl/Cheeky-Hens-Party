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
  title: "Cheeky Hen Party | Life Drawing & Creative Hen Party Experiences HK",
  description: "Fun, cheeky, and creative hen party life drawing experiences in Hong Kong. Sip, sketch, laugh and make unforgettable memories with your friends.",
  keywords: [
    "Hen Party Hong Kong",
    "Bachelorette Party",
    "Hen Night",
    "Life Drawing",
    "Male Model",
    "Cheeky Hen Party",
    "Party Ideas HK",
    "Creative Events HK",
    "Adult Art Classes",
    "Sip and Sketch",
    "Party Entertainment Hong Kong"
  ],
  openGraph: {
    title: "Cheeky Hen Party | Life Drawing & Creative Hen Party Experiences HK",
    description: "Fun, cheeky, and creative hen party life drawing experiences in Hong Kong. Sip, sketch, laugh and make unforgettable memories with your friends.",
    url: "https://www.cheekyhenparty.com",
    siteName: "Cheeky Hen Party",
    images: [
      {
        url: "https://www.cheekyhenparty.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cheeky Hen Party Life Drawing in Hong Kong"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cheekyhenparty",
    title: "Cheeky Hen Party | Life Drawing & Creative Hen Party Experiences HK",
    description: "Fun, cheeky, and creative hen party life drawing experiences in Hong Kong. Sip, sketch, laugh and make unforgettable memories with your friends.",
    images: ["https://www.cheekyhenparty.com/images/hero.jpg"],
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Cheeky Hen Party Life Drawing",
    "description": "Fun hen party life drawing experiences in Hong Kong with cheeky, professional male models.",
    "url": "https://www.cheekyhenparty.com",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Private indoor venues in Hong Kong"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <body>
        {/* FontAwesome */}
        <Script
          src="https://kit.fontawesome.com/d9c9267d74.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PNTWVS7M6P"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PNTWVS7M6P', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* Structured data JSON-LD */}
        <Script
          type="application/ld+json"
          id="structured-data"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.structuredData) }}
        />

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
