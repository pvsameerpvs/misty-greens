"use client";

import Image from "next/image";
import Link from "next/link";
import { BookingWidget } from "@/components/booking-widget";
import { Star, MapPin, Mountain, Home, Heart } from "lucide-react";
import { getProperty } from "@/lib/properties";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function HeroSection() {
  return (
    <section className="relative h-[110vh] min-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        {/* Placeholder for the mountain background. Ideally user replaces this. */}
        <Image 
          src="/hero-bg.png" 
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
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-8xl bg-white/10 backdrop-blur-md px-6 py-3 md:px-12 md:py-6 rounded-full border border-white/20 shadow-xl">
            Misty <span className="text-primary">Greens</span>
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-light text-white/90 drop-shadow-sm md:text-3xl">
             Nature’s Luxury Escape
          </p>
          <p className="mt-2 text-lg font-light text-white/90 drop-shadow-sm">Sri Lanka</p>
          
          {/* <Link href="/blog/valentines-escape-nuwara-eliya" className="mt-8 group animate-bounce">
             <div className="flex items-center gap-2 rounded-full bg-pink-600/90 px-6 py-2 text-white backdrop-blur-md transition-all hover:bg-pink-700">
                <Heart className="h-4 w-4 fill-white" />
                <span className="text-sm font-bold tracking-tight">Romantic Valentine&apos;s Getaway</span>
             </div>
          </Link> */}
        </div>

        {/* Floating Elements */}
        
        <div className="pointer-events-none absolute inset-0 hidden md:block">
           {/* Self Check-in Chip */}
           {/* <div className="absolute top-[55%] right-[25%] animate-pulse cursor-pointer rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-all hover:bg-white/20">
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary" /> 
                Self Check-in
              </span>
           </div> */}

           {/* Wifi Chip */}
           {/* <div className="absolute top-[65%] left-[20%] rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary" /> 
                Wi-Fi
              </span>
           </div> */}
           
           {/* Pet Friendly - Changed to 'Scenic Views' or similar as requested content didn't explicitly mention Pet Friendly but did mention Views */}
           {/* <div className="absolute top-[65%] right-[20%] rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="flex items-center gap-2 text-sm font-medium">
                 <span className="h-2 w-2 rounded-full bg-primary" /> 
                 Scenic Views
              </span>
           </div> */}

           {/* Mini Map (Bottom Left) */}
 
           {/* Mini Map - Interactive */}
           <div className="absolute bottom-[20%] left-0 z-30">
               <Dialog>
                   <DialogTrigger asChild>
                       <div className="h-32 w-32 cursor-pointer overflow-hidden rounded-full border-2 border-white/50 shadow-2xl transition-transform hover:scale-105 hover:border-white pointer-events-auto">
                           <iframe
                               src={getProperty("nuwara-eliya-lakeview-point")?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31707.009366668383!2d80.7589370783305!3d6.965721666874837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380436d90a077%3A0xc3925769741b6377!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1716913412345!5m2!1sen!2slk"}
                               className="h-full w-full object-cover pointer-events-none"
                               style={{ border: 0, opacity: 0.8 }}
                               loading="lazy"
                               referrerPolicy="no-referrer-when-downgrade"
                               title="Property Location Preview"
                           />
                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
                                   <MapPin className="h-5 w-5 text-black drop-shadow-md" fill="#fff" />
                                </div>
                           </div>
                       </div>
                   </DialogTrigger>
                   <DialogContent className="max-w-4xl bg-white/95 backdrop-blur-xl">
                       <DialogHeader>
                           <DialogTitle className="text-2xl font-bold">Our Locations</DialogTitle>
                           <DialogDescription>
                               Explore our premium locations in Nuwara Eliya and Kahathuduwa.
                           </DialogDescription>
                       </DialogHeader>
                       <div className="grid gap-6 md:grid-cols-2 mt-4 h-[60vh] md:h-[500px]">
                           <div className="flex flex-col gap-2 h-full">
                               <h3 className="font-semibold flex items-center gap-2">
                                  <Mountain className="h-4 w-4 text-primary" /> Nuwara Eliya
                               </h3>
                               <div className="flex-1 overflow-hidden rounded-xl border shadow-inner">
                                   <iframe
                                        src={getProperty("nuwara-eliya-lakeview-point")?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31707.009366668383!2d80.7589370783305!3d6.965721666874837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380436d90a077%3A0xc3925769741b6377!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1716913412345!5m2!1sen!2slk"}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Nuwara Eliya Location"
                                   />
                               </div>
                           </div>
                            <div className="flex flex-col gap-2 h-full">
                               <h3 className="font-semibold flex items-center gap-2">
                                  <Home className="h-4 w-4 text-primary" /> Kahathuduwa
                               </h3>
                               <div className="flex-1 overflow-hidden rounded-xl border shadow-inner">
                                   <iframe
                                        src={getProperty("kahathuduwa-canterbury-golf-view")?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385596489!2d79.996162391696!3d6.820392078696788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25171761667b3%3A0x88c2f254e0c3886f!2sKahathuduwa!5e0!3m2!1sen!2slk!4v1716913456789!5m2!1sen!2slk"}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Kahathuduwa Location"
                                   />
                               </div>
                           </div>
                       </div>
                   </DialogContent>
               </Dialog>
           </div>

            <div className="absolute bottom-[25%] right-0 text-right text-white">
               <div className="flex items-center justify-end gap-1 text-5xl font-bold">
                  <span className="text-primary">★</span> 4.9
               </div>
               <div className="text-lg font-medium opacity-90">Luxury Experience</div>
            </div>
        </div>

        {/* Booking Widget (Bottom) */}
      <div className="relative z-20 mt-auto w-full -translate-y-10">
  <BookingWidget />
</div>

      </div>
    </section>
  );
}
