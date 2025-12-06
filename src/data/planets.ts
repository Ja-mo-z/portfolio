// static planet info (will change in Desktop, where planets are dynamic)
export type PlanetData = {
  id: string;
  title: string;
  position: { x: number; y: number };
};

export const planets: PlanetData[] = [
  { id: "brand", title: "Brand Design", position: { x: 100, y: 100 } },
  // {
  //   id: "graphic",
  //   title: "Graphic Design",
  //   defaultPosition: { x: 300, y: 200 },
  // },
];
