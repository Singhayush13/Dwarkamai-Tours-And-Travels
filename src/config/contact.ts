export const contactConfig = {
  businessName: "Dwarkamai Tours & Travels",
  phoneDisplay: "+91 89997 58984",
  phoneLink: "tel:8999758984",
  whatsappNumber: "918999758984",
  whatsappEnabled: true,
  email: "info@dwarkamaitours.com",
  location: "Vasai, Mumbai, Maharashtra",
} as const;

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
