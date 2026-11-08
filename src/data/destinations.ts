import shirdiTemple from "../assets/destinations/shirdi-sai-baba-temple.jpg";
import shaniTemple from "../assets/destinations/shani-shingnapur-temple.jpg";
import trimbakeshwarTemple from "../assets/destinations/trimbakeshwar-temple.jpg";
import resortIllustration from "../assets/destinations/illustrative-resort-pool.jpg";
import waterParkIllustration from "../assets/destinations/illustrative-water-park.jpg";
import busSide from "../assets/dwarkamai-bus-side.jpeg";

export interface Destination {
  name: string;
  category: "Pilgrimage" | "City trips" | "Resorts & picnics" | "Theme parks";
  description: string;
  image: string;
  imageAlt: string;
  imageCredit?: { label: string; href: string; licenseLabel?: string; licenseHref?: string };
  photoNote?: string;
}

export const destinations: Destination[] = [
  {
    name: "Shirdi",
    category: "Pilgrimage",
    description:
      "Enquire about group bus and car travel to Sai Baba's temple from Vasai, Nalasopara, Virar, Naigaon and across Mumbai.",
    image: shirdiTemple,
    imageAlt: "Exterior of Shri Sai Baba Temple in Shirdi",
    imageCredit: {
      label: "Photo: Nitin3009 / Wikimedia Commons",
      href: "https://commons.wikimedia.org/w/index.php?curid=153518551",
      licenseLabel: "CC BY-SA 4.0",
      licenseHref: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
  {
    name: "Shani Shingnapur",
    category: "Pilgrimage",
    description:
      "Plan a group visit to Shani Shingnapur. Share your pickup point, travel dates and passenger count to discuss an itinerary.",
    image: shaniTemple,
    imageAlt: "Shani Temple at Shani Shingnapur",
    imageCredit: {
      label: "Photo: K.Venkataramana / Wikimedia Commons (CC0)",
      href: "https://commons.wikimedia.org/wiki/File:Shani_Temple_at_Shani_Shingnapur,_Maharastra,_India.jpg",
    },
  },
  {
    name: "Trimbakeshwar",
    category: "Pilgrimage",
    description:
      "Ask about bus and car travel to Trimbakeshwar Temple, with pickup enquiries from the Vasai–Virar area, Mumbai and Thane.",
    image: trimbakeshwarTemple,
    imageAlt: "Trimbakeshwar Shiva Temple in Trimbak",
    imageCredit: {
      label: "Photo: K.Venkataramana / Wikimedia Commons (CC0)",
      href: "https://commons.wikimedia.org/wiki/File:Trimbakeshwar_Shiva_Temple,_Trimbak,_Nashik_District,_Maharastra_(2).jpg",
    },
  },
  {
    name: "Mumbai",
    category: "City trips",
    description:
      "Arrange group travel into Mumbai for city visits, family outings and events, with pickup enquiries from the western suburbs.",
    image: busSide,
    imageAlt: "Dwarkamai branded coach ready for a group trip",
  },
  {
    name: "Pune",
    category: "City trips",
    description:
      "Enquire about bus and car travel for group journeys to Pune. Share your route, dates and passenger count for an availability discussion.",
    image: busSide,
    imageAlt: "Dwarkamai branded coach ready for a group trip",
  },
  {
    name: "Theme park & water park outings",
    category: "Theme parks",
    description:
      "Enquire about group trips to Imagicaa near Khopoli, Wet'nJoy or Water Kingdom. Choose your venue and share your route and travel date.",
    image: waterParkIllustration,
    imageAlt: "Illustrative water-park slides",
    photoNote: "Illustrative photo; not a photo of Imagicaa, Wet'nJoy or Water Kingdom.",
  },
  {
    name: "Resorts & picnics near Vasai–Virar",
    category: "Resorts & picnics",
    description:
      "Plan a day trip or group outing to a resort you choose around Vasai–Virar and nearby areas. Ask about bus and car options.",
    image: resortIllustration,
    imageAlt: "Illustrative resort swimming pool",
    photoNote: "Illustrative image; not a specific local resort.",
  },
];

const featuredDestinationNames = new Set([
  "Shirdi",
  "Shani Shingnapur",
  "Trimbakeshwar",
  "Mumbai",
  "Theme park & water park outings",
  "Resorts & picnics near Vasai–Virar",
]);

export const featuredDestinations = destinations.filter(({ name }) =>
  featuredDestinationNames.has(name),
);
