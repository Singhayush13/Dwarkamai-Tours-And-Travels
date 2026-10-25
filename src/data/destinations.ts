import bus1 from "../assets/optimized/bus1.jpg";
import bus2 from "../assets/bus2.jpg";
import bus3 from "../assets/bus3.jpg";
import bus from "../assets/bus.jpg";

export interface Destination {
  name: string;
  description: string;
  image: string;
  category: "Pilgrimage" | "City travel";
}

export const destinations: Destination[] = [
  {
    name: "Shirdi",
    description: "Enquire about group travel for a Shirdi darshan journey.",
    image: bus1,
    category: "Pilgrimage",
  },
  {
    name: "Shani Shingnapur",
    description: "Plan a pilgrimage trip to Shani Shingnapur with your group.",
    image: bus2,
    category: "Pilgrimage",
  },
  {
    name: "Trimbakeshwar",
    description: "Ask us about arranging coach travel to Trimbakeshwar.",
    image: bus3,
    category: "Pilgrimage",
  },
  {
    name: "Mumbai",
    description: "Explore group travel options for Mumbai and nearby routes.",
    image: bus,
    category: "City travel",
  },
  {
    name: "Pune",
    description: "Enquire about a group trip to Pune from your pickup location.",
    image: bus2,
    category: "City travel",
  },
];
