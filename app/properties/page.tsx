import { PROPERTIES } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";

export default function PropertiesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Our Properties</h1>
        <p className="mt-2 text-muted-foreground">
          Two premium apartments in Sri Lanka — one in Nuwara Eliya with Gregory Lake views, and one in Kahathuduwa overlooking Canterbury Golf Course.
          Choose your stay and book instantly via WhatsApp.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PROPERTIES.map((p) => (
          <PropertyCard key={p.slug} property={p} />
        ))}
      </div>
    </div>
  );
}
