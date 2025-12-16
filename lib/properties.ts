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
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Stunning panoramic view of Nuwara Eliya city",
      "Beautiful Gregory Lake view from the apartment",
      "Private balcony for sunsets and misty mornings",
      "Walkable access to key attractions and essentials"
    ],
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 5,
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
      "Beautiful garden area"
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
      { q: "Is the apartment suitable for families?", a: "Yes. The layout is comfortable for families and small groups, with a kitchen and living/dining space." },
      { q: "Do you provide hot water?", a: "Yes — the bathroom includes hot water." },
      { q: "Is parking available?", a: "Yes, a dedicated parking facility is available at the building." },
      { q: "How close is Gregory Lake?", a: "Gregory Lake is one of the closest highlights — perfect for evening walks and family time." }
    ]
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
      { q: "Is the master bedroom air-conditioned?", a: "Yes — the master bedroom is air-conditioned for extra comfort." },
      { q: "Do you have a swimming pool and gym?", a: "Yes — the building includes a large swimming pool and a fully equipped gym." },
      { q: "Is this good for long-term stays?", a: "Yes. The space, amenities, and expressway access make it ideal for long-term and business stays." }
    ]
  }
];

export function getProperty(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug);
}
