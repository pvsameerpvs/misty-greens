import { HeroSection } from "@/components/hero-section";
import { ApartmentSection } from "@/components/apartment-section";
import { PROPERTIES } from "@/lib/properties";

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
