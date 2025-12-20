"use client";

import Image from "next/image";
import { Grid2X2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <Dialog>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 h-[400px] md:h-[500px] overflow-hidden rounded-3xl">
        {images.slice(0, 5).map((image, i) => (
          <div
            key={i}
            className={`relative overflow-hidden cursor-pointer group ${
              i === 0 ? "col-span-2 row-span-2 h-full" : "h-full"
            }`}
          >
            <DialogTrigger asChild>
              <div className="w-full h-full relative">
                <Image
                  src={image}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />

                {/* Show "View all" button on the last item */}
                {i === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/50">
                    <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all">
                      <Grid2X2 className="h-4 w-4" />
                      Show all photos
                    </span>
                  </div>
                )}
              </div>
            </DialogTrigger>
          </div>
        ))}
      </div>

      <DialogContent className="max-w-7xl h-[90vh] bg-background/95 w-full p-0 overflow-hidden flex flex-col backdrop-blur-xl border-none">
        <div className="p-4 border-b flex items-center justify-between bg-black/5 z-10 sticky top-0">
          <DialogTitle className="text-lg font-semibold flex items-center gap-2">
            Photo Gallery{" "}
            <span className="text-muted-foreground font-normal text-sm">
              ({images.length} photos)
            </span>
          </DialogTitle>
          <DialogClose className="rounded-full p-2 hover:bg-black/10 transition-colors">
           
           
          </DialogClose>
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {/* Strict 3-column grid as requested */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
              >
                <Image
                  src={image}
                  alt={`Gallery full view ${i + 1}`}
                  fill
                  className="object-cover hover:opacity-95 transition-opacity"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
