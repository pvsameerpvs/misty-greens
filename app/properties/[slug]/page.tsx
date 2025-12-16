import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, BedDouble, Bath, Users, MapPin, CheckCircle2, Star, Share2, Wifi, Car, Shield, Wind } from "lucide-react";
import { getProperty, PROPERTIES } from "@/lib/properties";
import { buildWhatsAppLink } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export default function PropertyDetailsPage({ params }: { params: { slug: string } }) {
  const property = getProperty(params.slug);
  if (!property) return notFound();

  return (

    <div className="min-h-screen bg-background pb-20">
      
      <main>
          {/* Hero Banner */}
          <div className="relative h-[60vh] min-h-[500px] w-full lg:h-[70vh]">
             <Image
                src={property.imageSrc}
                alt={property.name}
                fill
                className="object-cover"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
             
             <div className="absolute top-24 left-4 z-10 lg:left-8">
                 <Link href="/properties">
                    <Button variant="outline" size="sm" className="gap-2 rounded-full border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-black/40 hover:text-white">
                        <ArrowLeft className="h-4 w-4" /> Back to Collection
                    </Button>
                 </Link>
             </div>

             <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                <div className="container">
                    <div className="max-w-3xl space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                                {property.city}
                            </Badge>
                             <div className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <span>Premium Experience</span>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-shadow-sm">
                            {property.name}
                        </h1>
                        <p className="flex items-center gap-2 text-lg text-white/90">
                           <MapPin className="h-5 w-5 text-primary" /> {property.locationShort}
                        </p>
                    </div>
                </div>
             </div>
          </div>

          <div className="container relative z-10 -mt-8 grid gap-12 lg:grid-cols-3 lg:gap-16">
              
              {/* Main Content */}
              <div className="space-y-12 lg:col-span-2">
                 
                 {/* Quick Stats */}
                 <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-secondary/30 p-4 text-center">
                           <BedDouble className="h-6 w-6 text-primary" />
                           <span className="font-semibold">{property.bedrooms} Bedrooms</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-secondary/30 p-4 text-center">
                           <Bath className="h-6 w-6 text-primary" />
                           <span className="font-semibold">{property.bathrooms} Baths</span>
                        </div>
                         <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-secondary/30 p-4 text-center">
                           <Users className="h-6 w-6 text-primary" />
                           <span className="font-semibold">Max {property.maxGuests}</span>
                        </div>
                         <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-secondary/30 p-4 text-center">
                           <Wifi className="h-6 w-6 text-primary" />
                           <span className="font-semibold">Fast Wi-Fi</span>
                        </div>
                    </div>
                 </div>

                 {/* Description */}
                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">About this place</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        {property.description}
                    </p>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                        {property.highlights.map((highlight, i) => (
                             <div key={i} className="flex items-start gap-3 rounded-xl border p-4">
                                <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                                    <Star className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-medium">{highlight}</span>
                             </div>
                        ))}
                    </div>
                 </div>
                 
                 <div className="border-t pt-10" />

                 {/* Features & Amenities */}
                 <div className="space-y-8">
                     <h2 className="text-2xl font-bold tracking-tight">What this place offers</h2>
                     
                     <div className="grid gap-8 md:grid-cols-2">
                        <div>
                             <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Apartment Features
                             </h3>
                             <ul className="space-y-3">
                                {property.features.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                        <div>
                              <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Building Amenities
                             </h3>
                             <ul className="space-y-3">
                                {property.amenities.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <Shield className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                     </div>
                 </div>

                 <div className="border-t pt-10" />

                 {/* Rules & FAQs */}
                 <div className="space-y-12">
                     <div>
                        <h2 className="mb-6 text-2xl font-bold tracking-tight">House Rules</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {property.houseRules.map((rule, i) => (
                                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                                    <span>{rule}</span>
                                </div>
                            ))}
                        </div>
                     </div>

                     <div>
                        <h2 className="mb-6 text-2xl font-bold tracking-tight">Common Questions</h2>
                        <div className="grid gap-4">
                            {property.faqs.map((faq, i) => (
                                <details key={i} className="group rounded-2xl border bg-card p-4 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between font-medium group-open:text-primary">
                                        {faq.q}
                                        <span className="transition-transform group-open:rotate-180">
                                            <ArrowLeft className="h-4 w-4 -rotate-90" />
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                     </div>
                 </div>
              </div>
              
              {/* Sticky Sidebar */}
              <div className="lg:col-span-1">
                 <div className="sticky top-24 rounded-3xl border bg-card p-6 shadow-xl lg:p-8">
                     <div className="mb-6">
                        <span className="text-3xl font-bold text-foreground">Luxury Stay</span>
                        <span className="text-muted-foreground"> / night</span>
                     </div>

                     <div className="mb-6 space-y-4 rounded-xl border bg-background p-4">
                         <div className="flex items-center justify-between text-sm">
                             <span className="text-muted-foreground">Check-in</span>
                             <span className="font-semibold">{property.checkIn}</span>
                         </div>
                         <div className="h-px bg-border" />
                         <div className="flex items-center justify-between text-sm">
                             <span className="text-muted-foreground">Check-out</span>
                             <span className="font-semibold">{property.checkOut}</span>
                         </div>
                     </div>

                     <Button asChild size="lg" className="w-full rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-500/20">
                        <a href={buildWhatsAppLink(property)} target="_blank" rel="noreferrer" className="gap-2">
                           <Image 
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                                alt="WA" 
                                width={20} 
                                height={20} 
                                className="brightness-0 invert"
                            />
                           Check Availability
                        </a>
                     </Button>
                     
                     <p className="mt-4 text-center text-xs text-muted-foreground">
                        You'll be redirected to WhatsApp to chat directly with our reservation team.
                     </p>
                 </div>
              </div>
          </div>
      </main>
    </div>
  );
}
