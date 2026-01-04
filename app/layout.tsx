import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <head>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
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

        {/* Back to top button (site-wide) */}
        <BackToTop />
      </body>
    </html>
  );
}
