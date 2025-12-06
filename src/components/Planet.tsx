import { motion } from "framer-motion";
import planetTemp from "../assets/planets/Writing_Planet.png";
import { useState } from "react";

export type PlanetProps = {
  id: string;
  title: string;
  position: { x: number; y: number };
  onMove: (pos: { x: number; y: number }) => void;
};

export default function Planet({ title, position, onMove }: PlanetProps) {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2"
      style={{
        position: "absolute",
        x: position.x,
        y: position.y,
      }}
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        onMove({
          x: info.point.x,
          y: info.point.y,
        });
      }}
      transition={{ duration: 0.25 }}
      // Glow only while dragging -- NOT WORKING
      animate={
        isDragging
          ? {
              filter: "drop-shadow(0 0 18px rgba(255, 255, 255, 0.9))",
              scale: 1.1,
              rotate: 2,
            }
          : { filter: "none", scale: 1, rotate: 0 }
      }
      whileDrag={{
        scale: 1.1,
        rotate: -5,
        // filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))",
      }}
    >
      <motion.img
        src={planetTemp}
        className="h-16 w-16 select-none"
        draggable={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "tween", stiffness: 50 }}
      />

      <div className="text-center text-sm select-none">{title}</div>
    </motion.div>
  );
}
