"use client";

import { useState } from "react";
import { Search, Calendar, Users, Home, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";

const ROOMS = [
  { id: "nuwara-eliya", name: "Nuwara Eliya (Lake View)", price: "Luxury Two-Bedroom" },
  { id: "kahathuduwa", name: "Kahathuduwa (Golf View)", price: "Luxury Three-Bedroom" },
];

const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function BookingWidget() {
  const [room, setRoom] = useState(ROOMS[0]);
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(new Date(), 1));
  const [guests, setGuests] = useState(2);
  const [isRoomOpen, setIsRoomOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  // Placeholder number - User needs to update this
  const WHATSAPP_NUMBER = "+94 77 766 1193"; 

  const handleBook = () => {
    if (!checkIn || !checkOut) return;

    const message = `*New Booking Request*%0A%0A` +
      `*Room:* ${room.name}%0A` +
      `*Check-in:* ${format(checkIn, "dd MMM yyyy")}%0A` +
      `*Check-out:* ${format(checkOut, "dd MMM yyyy")}%0A` +
      `*Guests:* ${guests}%0A%0A` +
      `Please confirm availability and rates.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="glass mx-auto flex w-full max-w-5xl flex-col gap-2 rounded-[2rem] p-2 sm:flex-row sm:items-center sm:gap-0 sm:p-2.5">
      
      {/* Room Select */}
      <div className="group relative flex w-full flex-1 flex-col justify-center px-6 py-3 transition-colors hover:bg-white/5 sm:rounded-l-[1.5rem] sm:border-r sm:border-white/10">
        <Popover open={isRoomOpen} onOpenChange={setIsRoomOpen}>
          <PopoverTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3 ">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-white transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Home className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs font-medium text-white group-hover:text-primary">Room</div>
                <div className="truncate font-semibold text-white">{room.name}</div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-2" align="start">
             <div className="flex flex-col gap-1">
                {ROOMS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setRoom(r);
                      setIsRoomOpen(false);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-md p-2 text-sm transition-colors hover:bg-muted",
                      room.id === r.id && "bg-muted font-medium"
                    )}
                  >
                    <div className="flex flex-col items-start text-left">
                       <span>{r.name}</span>
                       <span className="text-xs text-muted-foreground">{r.price}</span>
                    </div>
                    {room.id === r.id && <Check className="h-4 w-4 text-primary" />}
                  </button>
                ))}
             </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Check-in */}
      <div className="group relative flex w-full flex-1 flex-col justify-center px-6 py-3 transition-colors hover:bg-white/5 sm:border-r sm:border-white/10">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-white transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-white group-hover:text-primary">Check-in</div>
                <div className="font-semibold text-white">
                  {checkIn ? format(checkIn, "dd MMM") : "Select"}
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

       {/* Check-out */}
       <div className="group relative flex w-full flex-1 flex-col justify-center px-6 py-3 transition-colors hover:bg-white/5 sm:border-r sm:border-white/10">
         <Popover>
          <PopoverTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-white transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-white group-hover:text-primary">Check-out</div>
                <div className="font-semibold text-white">
                   {checkOut ? format(checkOut, "dd MMM") : "Select"}
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
             <CalendarComponent
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              disabled={(date) => (checkIn ? date <= checkIn : date < new Date())}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Guests */}
      <div className="group relative flex w-full flex-1 flex-col justify-center px-6 py-3 transition-colors hover:bg-white/5">
         <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
          <PopoverTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-white transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-white group-hover:text-primary">Guests</div>
                <div className="font-semibold text-white">{guests} {guests === 1 ? 'Guest' : 'Guests'}</div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-2" align="start">
             <div className="grid grid-cols-4 gap-2">
                {GUESTS.map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                        setGuests(g);
                        setIsGuestOpen(false);
                    }}
                    className={cn(
                      "flex h-10 items-center justify-center rounded-md text-sm transition-colors hover:bg-primary hover:text-primary-foreground",
                      guests === g ? "bg-primary text-primary-foreground font-bold" : "bg-muted"
                    )}
                  >
                    {g}
                  </button>
                ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Book Button */}
      <div className="p-1">
        <Button 
          onClick={handleBook}
          className="h-14 w-full rounded-full bg-primary px-8 text-primary-foreground shadow-soft hover:bg-primary/90 sm:w-auto"
        >
          Book via WhatsApp
        </Button>
      </div>
    </div>
  );
}
