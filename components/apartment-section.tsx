import Link from "next/link";
import Image from "next/image";
import { Check, Star, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ApartmentSectionProps {
  title: string;
  location: string;
  description: string;
  imageSrc: string;
  features: string[];
  amenities: string[];
  nearby: string[];
  reversed?: boolean;
  slug: string;
}

export function ApartmentSection({
  title,
  location,
  description,
  imageSrc,
  features,
  amenities,
  nearby,
  reversed = false,
  slug,
}: ApartmentSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Soft luxury background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute -top-28 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative">
        <div
          className={cn(
            "flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16",
            reversed && "lg:flex-row-reverse"
          )}
        >
          {/* Image Side */}
          <div className="relative flex-1 group">
            {/* Decorative blobs */}
            <div className="absolute -top-12 -left-12 h-72 w-72 rounded-full bg-primary/5 blur-3xl transition-all duration-700 " />
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-all duration-700 " />

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-700 hover:-translate-y-1">
              <Image
                src={imageSrc}
                alt={title}
                fill
                priority={false}
                className="object-cover transition-transform duration-1000 "
              />

              {/* Lighter overlay (less black space) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-75 transition-opacity duration-700 " />

              {/* Overlay content (fills the space nicely) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    Premium Collection
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/15">
                    <MapPin className="h-3.5 w-3.5" />
                    {location}
                  </span>
                </div>

                <div className="text-white">
                  <div className="text-xl sm:text-2xl font-semibold leading-tight drop-shadow">
                    {title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">
                  {location}
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]">
                {title}
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground/90 max-w-xl">
                {description}
              </p>
            </div>

            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {/* Features Column */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Apartment Highlights
                </h3>
                <ul className="space-y-4">
                  {features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-white group-hover/item:scale-110">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm text-muted-foreground transition-colors group-hover/item:text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities Column */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Exclusive Amenities
                </h3>
                <ul className="space-y-4">
                  {amenities.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/40 transition-all duration-300 group-hover/item:bg-primary group-hover/item:scale-125" />
                      <span className="text-sm text-muted-foreground transition-colors group-hover/item:text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Nearby & Actions */}
            <div className="pt-8 border-t border-border/40">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {nearby.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                    {i < nearby.length - 1 && (
                      <span className="mx-2 text-border">•</span>
                    )}
                  </span>
                ))}
              </div>

              <Link href={`/properties/${slug}`}>
                <Button className="group h-auto gap-3 rounded-full px-10 py-5 text-base font-medium shadow-lg shadow-primary/15 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1">
                  Explore Residence
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
