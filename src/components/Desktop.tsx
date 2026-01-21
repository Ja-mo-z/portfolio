import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Planet from "./Planet";
import Greetings from "./Greetings";
import Ambient from "./Ambient";
import Documentation from "./Documentation";
import { planets as initialPlanets } from "../data/planetdata";

type PositionFraction = {
  id: string;
  x: number;
  y: number;
};

export default function Desktop() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  // store positions as fractions (0–1)
  const [positions, setPositions] = useState<PositionFraction[]>(() =>
    initialPlanets.map((p) => ({
      id: p.id,
      x: p.position.x,
      y: p.position.y,
    }))
  );

  const [topId, setTopId] = useState<string | null>(null);

  // measure container
  useLayoutEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleFocus = useCallback((id: string) => {
    setTopId(id);
  }, []);

  const handleMove = useCallback(
    (
      id: string,
      pixelPos: {
        x: number;
        y: number;
      }
    ) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      const HORIZONTAL_RADIUS = 160;
      const TOP_RADIUS = 140;
      const BOTTOM_PADDING = 240;

      const rawX = pixelPos.x - rect.left;
      const rawY = pixelPos.y - rect.top;

      const clampedX = Math.min(
        Math.max(rawX, HORIZONTAL_RADIUS),
        rect.width - HORIZONTAL_RADIUS
      );

      const clampedY = Math.min(
        Math.max(rawY, TOP_RADIUS),
        rect.height - BOTTOM_PADDING
      );

      setPositions((prev) =>
        prev.map((p) =>
          p.id === id
            ? {
                ...p,
                x: clampedX / rect.width,
                y: clampedY / rect.height,
              }
            : p
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
        className="desktop relative w-[90vw] h-[90vh] mx-auto my-auto overflow-visible"
      >
        {initialPlanets.map((p, i) => {
          const pos = positions.find((x) => x.id === p.id)!;
          const zIndex = p.id === topId ? 2000 : 1000 + i;

          return (
            <Planet
              key={p.id}
              id={p.id}
              title={p.title}
              icon={p.icon}
              size={p.size}
              shouldRotate={p.shouldRotate}
              content={p.content}
              variant={p.variant}
              zIndex={zIndex}
              dragConstraints={containerRef}
              position={{
                x: pos.x * containerSize.width,
                y: pos.y * containerSize.height,
              }}
              onMove={(pixelPos) => handleMove(p.id, pixelPos)}
              onFocus={() => handleFocus(p.id)}
            />
          );
        })}
      </motion.div>
    </>
  );
}
