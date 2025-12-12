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
  title: "Cheeky Hen Party | Life Drawing Experience in Hong Kong",
  description: "The first and only hen party life drawing experiences in Hong Kong with hunky professional male models.",
  keywords: [
    "Hen party Hong Kong",
    "Life drawing class Hong Kong",
    "Cheeky Hen Party",
    "Bachelorette party Hong Kong",
    "Hen night ideas Hong Kong",
    "Private party Hong Kong",
    "Life drawing Hong Kong",
    "Girls night Hong Kong",
    "Topless Butler Hong Kong"
  ],
  openGraph: {
    title: "Cheeky Hen Party",
    description: "FThe first and only hen party life drawing experiences in Hong Kong with hunky professional male models.",
    url: "https://www.cheekyhenparty.com",
    type: "website",
    images: [
      {
        url: "https://www.cheekyhenparty.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cheeky Hen Party Life Drawing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheeky Hen Party",
    description: "The first and only hen party life drawing experiences in Hong Kong with hunky professional male models.",
    images: ["https://www.cheekyhenparty.com/images/hero.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <head>
        {/* SEO Meta */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
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

        {/* Structured Data */}
<Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://cheekyhenparty.com/#business",
      "name": "Cheeky Hen Party Hong Kong",
      "description": "The first and only hen party life drawing experiences in Hong Kong with hunky professional male models.",
      "url": "https://cheekyhenparty.com",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Hong Kong"
      },
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "Hong Kong"
      },
      "image": "https://cheekyhenparty.com/social-preview.jpg",
      "sameAs": [
        "https://www.instagram.com/cheekyhenpartyhk"
      ],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "HKD",
        "availability": "https://schema.org/InStock",
        "url": "https://cheekyhenparty.com"
      }
    })
  }}
/>

<Script
  id="event-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Cheeky Hen Party Life Drawing",
      "description": "The first and only hen party life drawing experiences in Hong Kong with hunky professional male models.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "startDate": "2024-01-01",
      "endDate": "2025-12-31",
      "location": {
        "@type": "Place",
        "name": "Hong Kong Indoor Venues",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hong Kong",
          "addressRegion": "HK"
        }
      },
      "image": [
        "https://cheekyhenparty.com/social-preview.jpg"
      ],
      "url": "https://cheekyhenparty.com",
      "performer": {
        "@type": "Person",
        "name": "Professional Male Model"
      },
      "offers": {
        "@type": "Offer",
        "price": "1800",
        "priceCurrency": "HKD",
        "availability": "https://schema.org/InStock",
        "url": "https://cheekyhenparty.com"
      }
    })
  }}
/>


        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
