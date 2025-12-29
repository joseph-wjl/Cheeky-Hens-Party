import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "Cheeky Hen Party | Hunky Models Life Drawing | Hong Kong",
  description:
    "Hong Kong's first and only hen party life drawing experience with hunky male models. Celebrate your last days of being single with a fit nude model. Sip, sketch, and laugh the night away!",
  keywords: [
    "hen party hong kong",
    "hen party ideas hong kong",
    "life drawing hong kong",
    "bachelorette party hong kong",
    "hen night hong kong",
    "hen do hong kong",
    "paint and sip hong kong",
    "hen party entertainment hong kong",
    "private party ideas hk",
    "hen party life drawing hong kong",
    "hunky male models hong kong",
    "strippers hong kong",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://cheekyhenparty.com",
  },
  openGraph: {
    title: "Cheeky Hen Party – Life Drawing Hong Kong",
    description:
      "Hong Kong's first and only hen party life drawing experience with hunky male models. Sip, sketch, and laugh the night away!",
    url: "https://cheekyhenparty.com",
    siteName: "Cheeky Hen Party",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hen Party Life Drawing in Hong Kong",
      },
    ],
    locale: "en_HK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheeky Hen Party – Life Drawing Hong Kong",
    description:
      "Sip, sketch, and laugh with Hong Kong's cheekiest Hen Party Life Drawing experience!",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <head>
        
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        {/* Structured Data: Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Cheeky Hen Party Life Drawing",
              description:
                "Fun hen party life drawing experiences in Hong Kong with hunky, professional male models.",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              url: "https://cheekyhenparty.com",
              location: {
                "@type": "Place",
                name: "Private indoor venues in Hong Kong",
              },
              startDate: "2026-01-01T20:00",
              endDate: "2026-12-31T23:00",
              organizer: {
                "@type": "Organization",
                name: "Cheeky Hen Party",
                url: "https://cheekyhenparty.com",
              },
              offers: {
                "@type": "Offer",
                url: "https://cheekyhenparty.com/booking",
                price: "300",
                priceCurrency: "HKD",
                availability: "https://schema.org/InStock",
                validFrom: "2025-12-01",
              },
            }),
          }}
        />

        {/* Structured Data: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much is the Life Drawing class package?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hen Party packages start from $300 per person, with a minimum booking fee of $3,000.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does the Life Drawing class run for?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Life Drawing class runs for 2 hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What to expect in a Life Drawing Class?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Hen Party Life Drawing Class is a nude art class with a male model posing for you while you draw using pencils, charcoals, and pastels. Our art teacher guides you through the basics.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can we book a Hen Party package?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fill in our Booking Request Form with your party details. A $1,500 deposit is required to secure your event; remaining amount due one week prior.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where can we host the class?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Private indoor spaces like hotel suites, function rooms, homes, or Airbnb. We can help arrange a venue for a small booking fee or host in our art studio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why should you book a Life Drawing Class for a Hen Party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It's hilarious and memorable, everyone can join in, it's flirty but classy, and you walk away with unique drawings and memories.",
                  },
                },
              ],
            }),
          }}
        />
      </head>

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

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
