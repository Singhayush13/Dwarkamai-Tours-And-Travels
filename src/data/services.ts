import fleetPhoto from "../assets/dwarkamai-fleet-three-buses.jpeg";
import resortIllustration from "../assets/destinations/illustrative-resort-pool.jpg";
import shirdiTemple from "../assets/destinations/shirdi-sai-baba-temple.jpg";
import weddingPhoto from "../assets/destinations/wedding-reception-lights.jpg";

export interface Service {
  title: string;
  description: string;
  icon: "landmark" | "briefcase" | "users" | "route";
  image: string;
  imageAlt: string;
  audience: string;
  planningNote: string;
  imageCredit?: { label: string; href: string; licenseLabel?: string; licenseHref?: string };
  photoNote?: string;
}

export const services: Service[] = [
  {
    title: "Pilgrim Tours",
    description:
      "Group bus and car travel for pilgrimages to Shirdi, Shani Shingnapur and Trimbakeshwar. Share your pickup point, dates and group size to enquire.",
    icon: "landmark",
    image: shirdiTemple,
    imageAlt: "Exterior of Shri Sai Baba Temple in Shirdi",
    audience: "Pilgrim groups and families travelling together.",
    planningNote: "Share your pickup point, temple route, travel dates and passenger count. The listed non-AC buses and other options can be discussed for suitability.",
    imageCredit: {
      label: "Photo: Nitin3009 / Wikimedia Commons",
      href: "https://commons.wikimedia.org/w/index.php?curid=153518551",
      licenseLabel: "CC BY-SA 4.0",
      licenseHref: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
  {
    title: "Company & Corporate Bookings",
    description:
      "Arrange group transport for company outings, staff travel, corporate events and team picnics. Ask about bus and car options for your requirements.",
    icon: "briefcase",
    image: fleetPhoto,
    imageAlt: "Three Dwarkamai coaches parked together",
    audience: "Companies planning team outings, staff travel or corporate events.",
    planningNote: "Include the event venue, pickup locations, schedule and group size so the transport plan can be discussed.",
  },
  {
    title: "Wedding & Family Bookings",
    description:
      "Plan guest transport for weddings, family functions and celebrations, with vehicle options to suit your group and itinerary.",
    icon: "users",
    image: weddingPhoto,
    imageAlt: "Decorative lights and flowers at a wedding reception",
    audience: "Families coordinating guest travel for weddings and functions.",
    planningNote: "Share venue details, pickup points, passenger count and timings. Vehicle availability and arrangements are confirmed directly.",
    imageCredit: {
      label: "Photo: zoe.wang / Flickr",
      href: "https://www.flickr.com/photos/40394481@N03/6646226103",
      licenseLabel: "CC BY 2.0",
      licenseHref: "https://creativecommons.org/licenses/by/2.0/",
    },
  },
  {
    title: "Picnic & Group Bookings",
    description:
      "Enquire about buses or cars for picnics, day trips, group outings and custom routes across the Mumbai region and beyond.",
    icon: "route",
    image: resortIllustration,
    imageAlt: "Illustrative resort swimming pool",
    audience: "Families, friends and groups planning picnics or day outings.",
    planningNote: "Tell us your chosen destination, date and group size. The resort image is illustrative and does not represent a specific venue.",
    photoNote: "Illustrative outing photo; not a specific local resort.",
  },
];
