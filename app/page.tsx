import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ApartmentSection } from "@/components/apartment-section";
import { PROPERTIES } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Misty Greens | Premium Holiday Apartments in Sri Lanka",
  description: "Experience the ultimate luxury escape at Misty Greens Residence. Book premium holiday apartments in Nuwara Eliya and Kahathuduwa with stunning views.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
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
      </main>
    </div>
  );
}
