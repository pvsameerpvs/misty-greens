import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'), // Replace with actual domain
  title: {
    default: "Misty Greens | Nature’s Luxury Escape",
    template: "%s | Misty Greens",
  },
  description:
    "Luxury holiday apartments in Sri Lanka — Nuwara Eliya (Lakeview Point) and Kahathuduwa (Canterbury Golf View). Book easily via WhatsApp.",
  openGraph: {
    title: "Misty Greens | Nature’s Luxury Escape",
    description:
      "Luxury holiday apartments in Sri Lanka — Nuwara Eliya and Kahathuduwa. Enjoy scenic views and premium comfort.",
    url: 'https://example.com',
    siteName: 'Misty Greens',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Misty Greens | Nature’s Luxury Escape",
    description: "Luxury holiday apartments in Sri Lanka. Book your stay today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
