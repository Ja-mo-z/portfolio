export type PlanetPosition = {
  x: number;
  y: number;
};

export type PlanetType = {
  id: string;
  title: string;
  content: React.ReactElement;
  position: PlanetPosition;
  dragConstraints?: React.RefObject<HTMLDivElement | null>;
  zIndex?: number;
  onFocus?: () => void;
  onMove?: (pos: PlanetPosition) => void;
  onClick?: () => void;
};

export type PlanetState = Record<
  string,
  {
    position: PlanetPosition;
    isOpen: boolean;
    zIndex: number;
  }
>;

// export type PlanetData = {
//   id: string;
//   title: string;
//   position: { x: number; y: number };
// };
