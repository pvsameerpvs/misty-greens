"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/booking-widget";
import { Wifi, MapPin, PawPrint } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[110vh] min-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        {/* Placeholder for the mountain background. Ideally user replaces this. */}
        <Image 
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop" 
          alt="Misty Greens Landscape" 
          fill
          priority
          className="object-cover object-bottom brightness-[0.85]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col justify-between pt-32 pb-12">
          {/* Hero Text */}
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-4xl text-6xl font-bold tracking-tight text-white drop-shadow-2xl md:text-8xl">
            Misty <span className="text-primary">Greens</span>
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-light text-white/90 drop-shadow-sm md:text-3xl">
             Nature’s Luxury Escape
          </p>
        </div>

        {/* Floating Elements */}
        
        <div className="pointer-events-none absolute inset-0 hidden md:block">
           {/* Self Check-in Chip */}
           <div className="absolute top-[55%] right-[25%] animate-pulse cursor-pointer rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-all hover:bg-white/20">
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary" /> 
                Self Check-in
              </span>
           </div>

           {/* Wifi Chip */}
           <div className="absolute top-[65%] left-[20%] rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary" /> 
                Wi-Fi
              </span>
           </div>
           
           {/* Pet Friendly - Changed to 'Scenic Views' or similar as requested content didn't explicitly mention Pet Friendly but did mention Views */}
           <div className="absolute top-[65%] right-[20%] rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="flex items-center gap-2 text-sm font-medium">
                 <span className="h-2 w-2 rounded-full bg-primary" /> 
                 Scenic Views
              </span>
           </div>

           {/* Mini Map (Bottom Left) */}
           <div className="absolute bottom-[20%] left-0 h-32 w-32 overflow-hidden rounded-full border-2 border-white/50 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=300&auto=format&fit=crop" 
                alt="Map Preview"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <MapPin className="h-8 w-8 text-black" fill="#fff" />
              </div>
           </div>

            <div className="absolute bottom-[20%] right-0 text-right text-white">
               <div className="flex items-center justify-end gap-1 text-5xl font-bold">
                  <span className="text-primary">★</span> 4.9
               </div>
               <div className="text-lg font-medium opacity-90">Luxury Experience</div>
            </div>
        </div>

        {/* Booking Widget (Bottom) */}
        <div className="relative z-20 mt-auto w-full">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
