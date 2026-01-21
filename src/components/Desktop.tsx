import { useState, useRef, useCallback } from "react";
import Planet from "./Planet";
import Greetings from "./Greetings";
import { planets as initialPlanets } from "../data/planetdata";
import { motion } from "framer-motion";
import Ambient from "./Ambient";
import Documentation from "./Documentation";

export default function Desktop() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // keep positions as fractions 0-1
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

      const rect = container.getBoundingClientRect();
      const planetSize = 64;

      // Convert pixel position back to fraction
      const fractionX = Math.min(Math.max(pos.x / rect.width, 0), 1);
      const fractionY = Math.min(Math.max(pos.y / rect.height, 0), 1);

      setPositions((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, x: fractionX, y: fractionY } : p
        )
      );
      setTopId(id);
    },
    []
  );

  return (
    <>
      <Documentation size={32} />
      <Ambient />
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
              position={{ x: pos.x, y: pos.y }} // fractions 0-1
              onMove={(pos) => handleMove(p.id, pos)}
              onFocus={() => handleFocus(p.id)}
              zIndex={zIndex}
              dragConstraints={containerRef}
              variant={p.variant}
            />
          );
        })}
      </motion.div>
    </>
  );
}
