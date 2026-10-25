export interface Service {
  title: string;
  description: string;
  icon: "landmark" | "briefcase" | "users" | "route";
}

export const services: Service[] = [
  {
    title: "Pilgrim Tours",
    description:
      "Travel to Shirdi, Shani Shingnapur and Trimbakeshwar with a journey planned around your group.",
    icon: "landmark",
  },
  {
    title: "Corporate & Events",
    description:
      "Group transport for corporate trips, team outings and events, with coach options for your group.",
    icon: "briefcase",
  },
  {
    title: "Family Functions",
    description:
      "Coordinate travel for weddings, celebrations and family gatherings with a vehicle suited to your group.",
    icon: "users",
  },
  {
    title: "Custom Group Travel",
    description:
      "Share your route and travel requirements to enquire about a trip tailored to your plans.",
    icon: "route",
  },
];
