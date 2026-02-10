import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PROPERTIES } from "@/lib/properties";
import { ApartmentSection } from "@/components/apartment-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Holiday Apartments Collection",
  description: "Browse our exclusive collection of luxury holiday apartments in Sri Lanka. From the misty mountains of Nuwara Eliya to the greens of Kahathuduwa.",
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Properties Hero */}
        <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
           <Image
              src="/nuwara-eliya-gallery13.jpeg"
              alt="Misty Greens Collection"
              fill
              className="object-cover brightness-50"
              priority
           />
           <div className="container relative z-10 text-center text-white">
              <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">Our Collection</h1>
              <p className="mx-auto max-w-2xl text-xl font-light text-white/90">
                Discover our handpicked portfolio of luxury holiday apartments in Sri Lanka.
              </p>
           </div>
        </section>

        {/* Listings using the Premium ApartmentSection */}
        <div>
           {PROPERTIES.map((property, index) => (
            <ApartmentSection
              key={property.slug}
              reversed={index % 2 !== 0}
              title={property.name}
              location={property.locationShort}
              slug={property.slug}
              description={property.description}
              imageSrc={property.imageSrc}
              features={property.features}
              amenities={property.amenities}
              nearby={property.nearby}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="py-24 bg-muted/30">
            <div className="container text-center">
                <h2 className="text-3xl font-bold mb-6">Can&apos;t decide?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                    Contact our concierge team for a personalized recommendation based on your travel plans.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8">Contact Us</Button>
                </Link>
            </div>
        </section>
      </main>
    </div>
  );
}
