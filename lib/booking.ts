import type { Property } from "@/lib/properties";

export function getWhatsAppNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94777661193";
}

export function getEmail() {
  return process.env.NEXT_PUBLIC_EMAIL || "mistygreens@gmail.com";
}

export function buildWhatsAppLink(property: Property) {
  let number = getWhatsAppNumber();
  if (property.contactNumbers && property.contactNumbers.length > 0) {
    number = property.contactNumbers[0];
  }
  number = number.replace(/[^0-9]/g, "");

  const text = [
    "Hi Misty Greens 👋",
    `I’d like to book / inquire about: ${property.name}`,
    `Location: ${property.city}, ${property.country}`,
    "",
    "Dates: ____ to ____",
    "Guests: ____",
    "Any special requests: ____"
  ].join("\n");

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encoded}`;
}
