import { useState, useRef, useCallback } from "react";
import Planet from "./Planet";
import Greetings from "./Greetings";
import { planets as initialPlanets } from "../data/planetdata";
import { motion } from "framer-motion";
import About from "./TabContent/About/AboutTab";
import Ambient from "./Ambient";

export default function Desktop() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [positions, setPositions] = useState(() =>
    initialPlanets.map((p) => ({
      id: p.id,
      x: p.position.x,
      y: p.position.y,
    }))
  );

  const [topId, setTopId] = useState<string | null>(null);

  const handleFocus = useCallback((id: string) => setTopId(id), []);

  const handleMove = useCallback(
    (id: string, pos: { x: number; y: number }) => {
      const container = containerRef.current;
      if (!container) return;

      // get container bounds
      const rect = container.getBoundingClientRect();

      // clamp position inside container (middle 90% already)
      const planetSize = 64; // size of planet image
      const clampedX = Math.min(Math.max(pos.x, 0), rect.width - planetSize);
      const clampedY = Math.min(Math.max(pos.y, 0), rect.height - planetSize);

      setPositions((prev) =>
        prev.map((p) => (p.id === id ? { ...p, x: clampedX, y: clampedY } : p))
      );
      setTopId(id);
    },
    []
  );

  // console.log(initialPlanets);

  return (
    <>
      <Ambient />
      {/* <div className="absolute top-24 left-24 z-20000">
        <About />
      </div> */}
      <Greetings />

      <motion.div
        ref={containerRef}
        className="desktop relative w-[90vw] h-[90vh] mx-auto my-auto"
      >
        {initialPlanets.map((p, i) => {
          const pos = positions.find((x) => x.id === p.id)!;
          const zIndex = p.id === topId ? 2000 : 1000 + i;

          return (
            <Planet
              key={p.id}
              id={p.id}
              icon={p.icon}
              size={p.size}
              title={p.title}
              shouldRotate={p.shouldRotate}
              content={p.content}
              position={{ x: pos.x, y: pos.y }}
              onMove={(pos) => handleMove(p.id, pos)}
              onFocus={() => handleFocus(p.id)}
              zIndex={zIndex}
              dragConstraints={containerRef}
            />
          );
        })}
      </motion.div>
    </>
  );
}
