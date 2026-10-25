import { destinations } from "./destinations";

export interface TravelPackage {
  slug: string;
  name: string;
  description: string;
  image: string;
  destination: string;
}

export const packages: TravelPackage[] = [
  {
    slug: "shirdi-darshan",
    name: "Shirdi Darshan",
    description:
      "Enquire about a Shirdi pilgrimage journey and share your preferred dates and group size.",
    image: destinations[0].image,
    destination: "Shirdi",
  },
  {
    slug: "shirdi-shani-shingnapur",
    name: "Shirdi & Shani Shingnapur",
    description:
      "Ask about combining Shirdi and Shani Shingnapur in a group travel plan.",
    image: destinations[1].image,
    destination: "Shirdi & Shani Shingnapur",
  },
  {
    slug: "mumbai-pune",
    name: "Mumbai – Pune Group Travel",
    description:
      "Enquire about coach travel between Mumbai and Pune for your group.",
    image: destinations[4].image,
    destination: "Mumbai – Pune",
  },
];
