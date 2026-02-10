"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/properties/nuwara-eliya-lakeview-point", label: "Nuwara Eliya" },
  { href: "/properties/kahathuduwa-canterbury-golf-view", label: "Kahathuduwa" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header 
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full border bg-background/80 backdrop-blur-md shadow-lg py-3 px-6" 
          : "top-0 left-0 right-0 w-full border-transparent bg-transparent py-6 px-4 md:px-8",
        className
      )}
    >
      <div className="flex items-center justify-between w-full h-full">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white/60 p-1">
            <Image src="/logo.png" alt="Misty Greens" fill className="object-contain" />
          </div>

          <div className="leading-tight">
            <div className={cn("text-base font-semibold", isScrolled ? "text-foreground" : "text-white")}>Misty Greens</div>
            <div className={cn("text-xs", isScrolled ? "text-muted-foreground" : "text-white/80")}>Nature’s Luxury Escape</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "text-sm font-bold transition-all duration-300 hover:text-primary/80",
                "text-primary",
                !isScrolled && "bg-white rounded-full px-4 py-2 shadow-sm"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
           {/* Desktop Book Now */}
          <Button 
            className={cn(
                "hidden md:inline-flex rounded-full font-bold transition-all shadow-md hover:shadow-lg",
                isScrolled 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-white/90"
            )}
          >
            Book Now
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
             className="md:hidden p-2"
             onClick={() => setIsMobileOpen(true)}
          >
             <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Sidebar Overlay */}
    {isMobileOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in" 
             onClick={() => setIsMobileOpen(false)}
           />
           
           {/* Sidebar Panel */}
           <div className="relative h-full w-[80%] max-w-sm bg-background/80 backdrop-blur-xl border-l border-white/20 p-6 shadow-2xl animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between mb-8">
                 <span className="text-xl font-bold text-foreground">Misty Greens</span>
                 <button 
                    onClick={() => setIsMobileOpen(false)}
                    className="rounded-full bg-muted/50 p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                 >
                    <X className="h-5 w-5" />
                 </button>
              </div>

              <div className="flex flex-col gap-6">
                 <nav className="flex flex-col gap-4">
                    {nav.map((item) => (
                        <Link 
                           key={item.href} 
                           href={item.href}
                           className="text-lg font-bold text-primary transition-colors hover:text-primary/80"
                           onClick={() => setIsMobileOpen(false)}
                        >
                           {item.label}
                        </Link>
                    ))}
                 </nav>
                 
                 <div className="h-px bg-border my-2" />
                 
                 <Button className="w-full rounded-full" size="lg">
                    Book Now
                 </Button>
              </div>
           </div>
        </div>
    )}
    </>
  );
}
