"use client";

import { useState } from "react";
import Image from "next/image";
import { Grid2X2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    }
  };

  return (
    <>
      {/* Lightbox Overlay */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-[70] text-white/70 hover:bg-white/10 hover:text-white"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 z-[70] -translate-y-1/2 text-white/70 hover:bg-white/10 hover:text-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 z-[70] -translate-y-1/2 text-white/70 hover:bg-white/10 hover:text-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="relative h-[85vh] w-[90vw] max-w-7xl">
            <Image
              src={images[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
              quality={100}
            />
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-md">
                {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 h-[400px] md:h-[500px] overflow-hidden rounded-3xl">
        {images.slice(0, 5).map((image, i) => (
          <div
            key={i}
            className={`relative overflow-hidden cursor-pointer group ${
              i === 0 ? "col-span-2 row-span-2 h-full" : "h-full"
            }`}
            onClick={() => {
                if (i === 4) {
                    setIsGridOpen(true);
                } else {
                    openLightbox(i);
                }
            }}
          >
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
          </div>
        ))}
      </div>

      <Dialog open={isGridOpen} onOpenChange={setIsGridOpen}>
        <DialogContent className="max-w-7xl h-[90vh] bg-background/95 w-full p-0 overflow-hidden flex flex-col backdrop-blur-xl border-none text-foreground">
          <div className="p-4 border-b flex items-center justify-between bg-black/5 z-10 sticky top-0">
            <DialogTitle className="text-lg font-semibold flex items-center gap-2">
              Photo Gallery{" "}
              <span className="text-muted-foreground font-normal text-sm">
                ({images.length} photos)
              </span>
            </DialogTitle>
            <DialogClose className="rounded-full p-2 hover:bg-black/10 transition-colors">
               <X className="h-5 w-5" />
            </DialogClose>
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted cursor-pointer"
                  onClick={() => openLightbox(i)}
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
    </>
  );
}
