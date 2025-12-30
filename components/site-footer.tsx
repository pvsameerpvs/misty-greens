import Image from "next/image";
import Link from "next/link";
import { getEmail, getWhatsAppNumber } from "@/lib/booking";

export function SiteFooter() {
  const email = getEmail();
  const phone = getWhatsAppNumber();
  return (
    <footer className="mt-16 border-t">
      <div className="container py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl border bg-white">
                <Image src="/logo.png" alt="Misty Greens" fill className="object-contain p-1" />
              </div>
              <div>
                <div className="font-semibold">Misty Greens</div>
                <div className="text-sm text-muted-foreground">Nature’s Luxury Escape</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Boutique holiday apartments in Sri Lanka — hill‑country serenity in Nuwara Eliya and
              modern comfort by the Canterbury Golf View in Kahathuduwa.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-semibold">Explore</div>
            <div className="grid gap-2 text-sm">
              <Link className="text-muted-foreground hover:text-foreground" href="/properties">Properties</Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/contact">Contact</Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/properties/nuwara-eliya-lakeview-point">Nuwara Eliya</Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/properties/kahathuduwa-canterbury-golf-view">Kahathuduwa</Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-semibold">Contact</div>
            <div className="text-sm text-muted-foreground">
              <div>WhatsApp: +94 77 955 7520</div>
              <div>Email: {email}</div>
              <div className="mt-2">Sri Lanka</div>
            </div>
            
          </div>
        </div>

       
      </div>
    </footer>
  );
}
