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
  },
  {
    title: "Wedding & Family Bookings",
    description:
      "Plan guest transport for weddings, family functions and celebrations, with vehicle options to suit your group and itinerary.",
    icon: "users",
    image: weddingPhoto,
    imageAlt: "Decorative lights and flowers at a wedding reception",
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
    photoNote: "Illustrative outing photo; not a specific local resort.",
  },
];
