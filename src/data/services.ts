export interface Service {
  title: string;
  description: string;
  icon: "landmark" | "briefcase" | "users" | "route";
}

export const services: Service[] = [
  {
    title: "Pilgrim Tours",
    description:
      "Group bus and car travel for pilgrimages to Shirdi, Shani Shingnapur and Trimbakeshwar. Share your pickup point, dates and group size to enquire.",
    icon: "landmark",
  },
  {
    title: "Company & Corporate Bookings",
    description:
      "Arrange group transport for company outings, staff travel, corporate events and team picnics. Ask about bus and car options for your requirements.",
    icon: "briefcase",
  },
  {
    title: "Wedding & Family Bookings",
    description:
      "Plan guest transport for weddings, family functions and celebrations, with vehicle options to suit your group and itinerary.",
    icon: "users",
  },
  {
    title: "Picnic & Group Bookings",
    description:
      "Enquire about buses or cars for picnics, day trips, group outings and custom routes across the Mumbai region and beyond.",
    icon: "route",
  },
];
