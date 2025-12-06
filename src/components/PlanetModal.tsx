type PlanetModalProps = {
  title: string;
  zIndex: number;
};
export default function PlanetModal({ title, zIndex }: PlanetModalProps) {
  // const top = planetPosition.y + 140; // distance below planet
  // const left = planetPosition.x - 100; // center under planet

  return (
    <div
      className="planet-modal"
      style={{
        position: "absolute",
        // top,
        // left,
        width: 300,
        zIndex,
      }}
    >
      <h2>{title}</h2>
      <p>Your content goes here.</p>
    </div>
  );
}
