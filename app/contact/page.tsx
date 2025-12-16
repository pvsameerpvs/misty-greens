import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import { getEmail, getWhatsAppNumber, buildWhatsAppLink } from "@/lib/booking";
import { PROPERTIES } from "@/lib/properties";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  const email = getEmail();
  const phone = getWhatsAppNumber();

  return (

      <main>
        {/* Hero Section */}
        <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
           <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop"
              alt="Contact Misty Greens"
              fill
              className="object-cover brightness-50"
              priority
           />
           <div className="container relative z-10 text-center text-white">
              <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">Get in Touch</h1>
              <p className="mx-auto max-w-2xl text-xl font-light text-white/90">
                Ready to plan your escape? We are here to help you every step of the way.
              </p>
           </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              
              {/* Left Column: Direct Contact & Info */}
              <div className="space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                       Have questions about our properties, rates, or availability? Reach out to us directly. We are available 24/7 to assist you.
                    </p>
                    
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                             <Phone className="h-6 w-6" />
                          </div>
                          <div>
                             <h3 className="font-semibold text-foreground">Phone / WhatsApp</h3>
                             <p className="text-muted-foreground">{phone}</p>
                             <p className="text-sm text-muted-foreground">Available 24/7 for urgent inquiries.</p>
                          </div>
                       </div>
                       
                       <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                             <Mail className="h-6 w-6" />
                          </div>
                          <div>
                             <h3 className="font-semibold text-foreground">Email</h3>
                             <p className="text-muted-foreground">{email}</p>
                             <p className="text-sm text-muted-foreground">Response within 24 hours.</p>
                          </div>
                       </div>

                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                             <MapPin className="h-6 w-6" />
                          </div>
                          <div>
                             <h3 className="font-semibold text-foreground">Locations</h3>
                             <p className="text-muted-foreground">Nuwara Eliya & Kahathuduwa</p>
                             <p className="text-sm text-muted-foreground">Sri Lanka</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* General Inquiry Button */}
                 <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full px-8">
                       <a href={`https://wa.me/${phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                          Chat on WhatsApp
                       </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                       <a href={`mailto:${email}`}>
                          Send Email
                       </a>
                    </Button>
                 </div>
              </div>

              {/* Right Column: Direct Booking Links */}
              <div className="rounded-3xl border bg-card p-8 shadow-lg md:p-12">
                 <h2 className="text-2xl font-bold mb-2">Instant Booking Inquiry</h2>
                 <p className="text-muted-foreground mb-8">
                    Select a property below to start a WhatsApp chat with pre-filled details. It's the fastest way to book.
                 </p>

                 <div className="space-y-4">
                    {PROPERTIES.map((property) => (
                       <a 
                          key={property.slug}
                          href={buildWhatsAppLink(property)}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between rounded-xl border bg-background p-4 transition-colors hover:border-primary hover:bg-primary/5"
                       >
                          <div className="flex items-center gap-4">
                             <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                                <Image 
                                  src={property.imageSrc} 
                                  alt={property.name} 
                                  fill 
                                  className="object-cover"
                                />
                             </div>
                             <div>
                                <h3 className="font-semibold group-hover:text-primary">{property.name}</h3>
                                <p className="text-sm text-muted-foreground">{property.locationShort}</p>
                             </div>
                          </div>
                          <div className="rounded-full bg-primary/10 p-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                             <ArrowRight className="h-4 w-4" />
                          </div>
                       </a>
                    ))}
                 </div>

                 <div className="mt-8 rounded-xl bg-muted/50 p-6">
                    <div className="flex items-start gap-3">
                       <Clock className="mt-0.5 h-5 w-5 text-primary" />
                       <div className="text-sm text-muted-foreground">
                          <p className="font-medium text-foreground mb-1">Booking Tips</p>
                          <ul className="list-disc pl-4 space-y-1">
                             <li>Mention your preferred dates (Check-in & Check-out).</li>
                             <li>Let us know the number of adults & children.</li>
                             <li>Ask about long-stay discounts for stays over 7 days.</li>
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>
      </main>
  
  );
}
