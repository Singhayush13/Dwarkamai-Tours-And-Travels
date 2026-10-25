import bus20 from "../assets/20seat.jpg";
import bus32 from "../assets/32seat.jpg";
import bus44 from "../assets/optimized/44seat.jpg";

export interface Vehicle {
  name: string;
  seats: number;
  type: string;
  image: string;
}

export const fleet: Vehicle[] = [
  { name: "20 Seater Mini Bus", seats: 20, type: "Non-AC", image: bus20 },
  { name: "32 Seater Bus", seats: 32, type: "Non-AC", image: bus32 },
  { name: "44 Seater Bus", seats: 44, type: "Non-AC", image: bus44 },
];
