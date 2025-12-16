import Link from "next/link";
import { ArrowRight, BedDouble, Users, MapPin } from "lucide-react";
import type { Property } from "@/lib/properties";
import { buildWhatsAppLink } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="secondary">{property.city}</Badge>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><BedDouble className="h-4 w-4" /> {property.bedrooms} BR</span>
            <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> up to {property.maxGuests}</span>
          </div>
        </div>
        <CardTitle className="text-xl">{property.name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {property.locationShort}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{property.headline}</p>
        <ul className="grid gap-2 text-sm">
          {property.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="gap-2">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/properties/${property.slug}`} className="justify-center gap-2">
            View details <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild className="w-full">
          <a href={buildWhatsAppLink(property)} target="_blank" rel="noreferrer" className="justify-center">
            Book on WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
