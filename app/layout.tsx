import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://mistygreensresidence.com'), // Official Domain
  title: {
    default: "Misty Greens | Luxury Holiday Apartments in Sri Lanka",
    template: "%s | Misty Greens Sri Lanka",
  },
  description:
    "Experience nature's luxury at Misty Greens. Premium holiday apartments in Nuwara Eliya (Lakeview Point) and Kahathuduwa (Canterbury Golf View). Scenic views, modern comfort, and easy booking.",
  keywords: [
    "Luxury Apartments Sri Lanka",
    "Holiday Rentals Nuwara Eliya",
    "Nuwara Eliya Accommodation",
    "Lake View Point Nuwara Eliya",
    "Canterbury Golf View Kahathuduwa",
    "Luxury Stay Sri Lanka",
    "Vacation Homes Sri Lanka",
    "Gregory Lake Apartments",
    "Golf Course View Apartments",
    "Misty Greens Residence",
  ],
  authors: [{ name: "Misty Greens" }],
  creator: "Misty Greens",
  publisher: "Misty Greens",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Misty Greens | Nature’s Luxury Escape in Sri Lanka",
    description:
      "Luxury holiday apartments in Nuwara Eliya and Kahathuduwa. Enjoy breathtaking scenic views and premium comfort for your next escape.",
    url: 'https://mistygreensresidence.com',
    siteName: 'Misty Greens Sri Lanka',
    locale: 'en_LK',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Misty Greens Luxury Holiday Apartments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Misty Greens | Luxury Holiday Apartments Sri Lanka",
    description: "Experience premium comfort in Nuwara Eliya and Kahathuduwa. Book your luxury stay today.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "3BWTAA1LSbniSP2KzyNdqsD0B-9mOp3OTczaNuB95I4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Misty Greens Sri Lanka",
              "url": "https://mistygreensresidence.com",
              "logo": "https://mistygreensresidence.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94779557520",
                "contactType": "reservations",
                "availableLanguage": ["English", "Sinhala"]
              },
              "sameAs": [
                "https://www.facebook.com/mistygreens",
                "https://www.instagram.com/mistygreens"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Misty Greens",
              "url": "https://mistygreensresidence.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mistygreensresidence.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
