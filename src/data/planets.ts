// static planet info (will change in Desktop, where planets are dynamic)
export type PlanetData = {
  id: string;
  title: string;
  position: { x: number; y: number };
};

export const planets: PlanetData[] = [
  { id: "writing", title: "Writing", position: { x: 100, y: 100 } },
  {
    id: "graphic",
    title: "Graphic Design",
    position: { x: 300, y: 200 },
  },
];
