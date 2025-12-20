export type Property = {
  slug: string;
  name: string;
  locationShort: string;
  city: string;
  region: string;
  country: string;
  headline: string;
  description: string;
  imageSrc: string;
  highlights: string[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  features: string[];
  amenities: string[];
  nearby: string[];
  idealFor: string[];
  checkIn: string;
  checkOut: string;
  houseRules: string[];
  faqs: { q: string; a: string }[];
  galleryImages: string[];
  contactNumbers: string[];
};

export const PROPERTIES: Property[] = [
  {
    slug: "nuwara-eliya-lakeview-point",
    name: "Luxury Two-Bedroom Apartment",
    locationShort: "Nuwara Eliya (Lake View Point)",
    city: "Nuwara Eliya",
    region: "Central Province",
    country: "Sri Lanka",
    headline: "Wake up to cool hill‑country air and sweeping views of Gregory Lake.",
    description:
      "Experience the charm and cool climate of Sri Lanka’s hill country from the comfort of a modern, luxurious apartment. Perfect for families, couples, and holiday seekers looking for relaxation and convenience. Situated in the heart of Nuwara Eliya, close to major attractions, restaurants, and supermarkets. Enjoy beautiful mountain views and easy access to the city’s scenic sites.",
    imageSrc: "/nuwara-eliya-lakeview-cover.jpeg",
    highlights: [
      "Stunning panoramic view of Nuwara Eliya city",
      "Beautiful Gregory Lake view from the apartment",
      "Private balcony for sunsets and misty mornings",
      "Walkable access to key attractions and essentials"
    ],
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 6,
    features: [
      "Two spacious, fully furnished bedrooms",
      "Modern living and dining area",
      "Fully equipped kitchen",
      "Stylish bathroom with hot water",
      "Private balcony with scenic views",
      "High-speed Wi-Fi",
      "Smart TV"
    ],
    amenities: [
      "24/7 security",
      "Parking facility",
      "Lift access",
      "Backup power",
     
    ],
    nearby: [
      "Gregory Lake",
      "Victoria Park",
      "Nuwara Eliya Golf Club",
      "Hakgala Botanical Garden",
      "Tea plantations"
    ],
    idealFor: ["Families", "Couples", "Holiday seekers", "Workations"],
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    houseRules: [
      "No smoking inside the apartment",
      "No parties or loud music (quiet hours 10 PM – 8 AM)",
      "Respect neighbors and common areas",
      "Keep the apartment tidy; damages will be charged"
    ],
   faqs: [
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in is from 2:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out may be arranged subject to availability."
  },
  {
    q: "Is the apartment suitable for families and groups?",
    a: "Yes. The apartment is ideal for families, couples, and small groups, offering spacious bedrooms, a living area, and a fully equipped kitchen."
  },
  {
    q: "Do you provide hot water and heating?",
    a: "Yes. Hot water is available in the bathroom, and the cool climate of Nuwara Eliya ensures a naturally comfortable stay."
  },
  {
    q: "Is parking available on-site?",
    a: "Yes. Secure on-site parking is available for guests."
  },
  {
    q: "How far is Gregory Lake from the apartment?",
    a: "Gregory Lake is located very close to the apartment and is easily accessible for walks, boating, and leisure activities."
  },

],
    galleryImages: [
      "/nuwara-eliya-gallary11.jpeg",
      "/nuwara-eliya-gallary2.jpeg",
      "/nuwara-eliya-gallary3.jpeg",
      "/nuwara-eliya-gallary4.jpeg", 
       "/nuwara-eliya-gallary5.jpeg", 
        "/nuwara-eliya-gallary6.jpeg", 
        "/nuwara-eliya-gallary7.jpeg",
        "/nuwara-eliya-gallary8.jpeg",
        "/nuwara-eliya-gallary9.jpeg",
        "/nuwara-eliya-gallary10.jpeg",
        "/nuwara-eliya-gallary1.jpeg",
        "/nuwara-eliya-gallary12.jpeg",
        "/nuwara-eliya-gallary13.jpeg",
        
    ],
    contactNumbers: ["0094773540636", "0094779557520"],

  },
  {
    slug: "kahathuduwa-canterbury-golf-view",
    name: "Luxury Three-Bedroom Apartment",
    locationShort: "Kahathuduwa (Canterbury Golf Course)",
    city: "Kahathuduwa",
    region: "Western Province",
    country: "Sri Lanka",
    headline: "Premium living with uninterrupted views of the Canterbury Golf Course.",
    description:
      "Experience premium living overlooking the breathtaking Canterbury Golf Course. Perfect for families, executives, or holiday travelers seeking comfort, luxury, and convenience. Situated in Kahathuduwa, Piliyandala – a peaceful residential area with quick access to the Southern Expressway, supermarkets, schools, and restaurants.",
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Direct golf-course view from the balcony",
      "Large pool + fully equipped gym",
      "Quick access to Southern Expressway",
      "Great for long-stays and business travel"
    ],
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 7,
    features: [
      "Three spacious bedrooms",
      "Modern living and dining area with balcony",
      "Stunning Canterbury Golf Course view",
      "Fully equipped kitchen",
      "Stylish bathrooms with hot water",
      "Air-conditioned master bedroom",
      "High-speed Wi-Fi",
      "Smart TV"
    ],
    amenities: [
      "24/7 security with gated entrance",
      "Large swimming pool",
      "Fully equipped gym",
      "Children's play area",
      "Dedicated parking space",
      "Elevator access",
      "Backup generator"
    ],
    nearby: [
      "Canterbury Golf Course",
      "Southern Expressway entrance",
      "Piliyandala town",
      "Supermarkets & shopping"
    ],
    idealFor: ["Families", "Executives", "Holiday travelers", "Long stays"],
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    houseRules: [
      "No smoking inside the apartment",
      "No parties or events",
      "Pool & gym rules must be followed",
      "Keep noise to a minimum after 10 PM"
    ],
    faqs: [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in starts from 2:00 PM and check-out is by 11:00 AM. Flexible arrangements can be discussed based on availability."
  },
  {
    q: "Is the apartment suitable for long-term stays?",
    a: "Yes. With spacious interiors, full amenities, and easy access to the Southern Expressway, the apartment is well suited for long-term and corporate stays."
  },
 
  {
    q: "Are the swimming pool and gym available to guests?",
    a: "Yes. Guests have full access to the swimming pool, gym, and other shared facilities within the complex."
  },
  {
    q: "Is the apartment family-friendly?",
    a: "Absolutely. The apartment offers ample space, secure surroundings, and family-friendly amenities."
  },
  {
    q: "How convenient is the location?",
    a: "The apartment is conveniently located near the Southern Expressway, supermarkets, restaurants, and Piliyandala town."
  }
],
    galleryImages: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-68ccdac1863f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918760383-edce1d90a8f5?q=80&w=2067&auto=format&fit=crop"
    ],
    contactNumbers: ["0094777661193", "0094779557520"]

  }
];

export function getProperty(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug);
}
