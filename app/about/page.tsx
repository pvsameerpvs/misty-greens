import Image from "next/image";

import { Button } from "@/components/ui/button";
import {  Mountain, Home, Leaf, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (

      <main>
        {/* Hero Section */}
        <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden">
           <Image
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2670&auto=format&fit=crop"
              alt="Misty Greens Nature"
              fill
              className="object-cover brightness-50"
              priority
           />
           <div className="container relative z-10 text-center text-white">
              <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">About Misty Greens</h1>
              <p className="mx-auto max-w-2xl text-xl font-light text-white/90">
                Redefining luxury living amidst Sri Lanka’s most breathtaking landscapes.
              </p>
           </div>
        </section>

        {/* Our Story / Intro */}
        <section className="py-24">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium text-primary">
                    <Leaf className="h-4 w-4" />
                    <span>Our Philosophy</span>
                 </div>
                 <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Where Nature Meets <span className="text-primary">Luxury</span>
                 </h2>
                 <p className="text-lg leading-relaxed text-muted-foreground">
                    At Misty Greens, we believe that true luxury lies in the harmony between comfort and nature. Founded with a vision to provide travelers and residents with premium living spaces in Sri Lanka&apos;s most serene locations, we offer more than just an apartment — we offer a sanctuary.
                 </p>
                 <p className="text-lg leading-relaxed text-muted-foreground">
                    Whether you are waking up to the misty hills of Nuwara Eliya or enjoying the prestigious golf-course views in Kahathuduwa, our properties are curated to ensure an unforgettable experience of tranquility, elegance, and convenience.
                 </p>
                 <div className="pt-4">
                    <Link href="/contact">
                      <Button className="rounded-full px-8 py-6 text-base">Get in Touch</Button>
                    </Link>
                 </div>
               </div>
               <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl lg:aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                    alt="Interior Luxury"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
               </div>
            </div>
          </div>
        </section>

        {/* Values / Why Choose Us */}
        <section className="bg-muted/30 py-24">
           <div className="container">
              <div className="mb-16 text-center">
                 <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Misty Greens?</h2>
                 <p className="mx-auto max-w-2xl text-muted-foreground">
                    We go the extra mile to ensure your stay is seamless, secure, and spectacular.
                 </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                 <div className="rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                       <Mountain className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">Prime Locations</h3>
                    <p className="text-muted-foreground">
                       Handpicked locations that offer the best views, climate, and accessibility in Sri Lanka. From the hills to the greens.
                    </p>
                 </div>
                 <div className="rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                       <Home className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">Premium Interiors</h3>
                    <p className="text-muted-foreground">
                       Fully furnished with modern amenities, smart appliances, and stylish decor to make you feel right at home.
                    </p>
                 </div>
                  <div className="rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                       <ShieldCheck className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">Safety & Security</h3>
                    <p className="text-muted-foreground">
                       24/7 security, gated entrances, and on-site support to ensure complete peace of mind during your stay.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* Stats / Trust */}
        <section className="py-24">
           <div className="container">
              <div className="rounded-[2.5rem] bg-primary px-8 py-16 text-primary-foreground md:px-16">
                 <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center">
                       <div className="mb-2 text-5xl font-bold">2+</div>
                       <div className="text-primary-foreground/80">Premium Locations</div>
                    </div>
                    <div className="text-center">
                       <div className="mb-2 text-5xl font-bold">100%</div>
                       <div className="text-primary-foreground/80">Guest Satisfaction</div>
                    </div>
                     <div className="text-center">
                       <div className="mb-2 text-5xl font-bold">500+</div>
                       <div className="text-primary-foreground/80">Happy Guests</div>
                    </div>
                     <div className="text-center">
                       <div className="mb-2 text-5xl font-bold">24/7</div>
                       <div className="text-primary-foreground/80">Concierge Support</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>
   
  );
}
