import { motion, AnimatePresence } from "motion/react";
import planetTemp from "../assets/planets/Writing_Planet.png";
import { useState, useRef } from "react";
import type { PlanetType } from "../types/planet";

export default function Planet({
  id,
  title,
  icon,
  size,
  position,
  content,
  onMove,
  onFocus,
  zIndex,
  dragConstraints,
}: PlanetType) {
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const planetSize = size ?? 32;
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  const rotationDelay = useRef(Math.random() * 10).current;

  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{
        x: position.x * screenW,
        y: position.y * screenH,
        zIndex: zIndex ?? (isDragging ? 9999 : 1000),
      }}
      drag
      dragConstraints={dragConstraints}
      dragMomentum={false}
      dragElastic={0}
      onPointerDown={() => onFocus && onFocus()}
      onDragStart={() => {
        setIsDragging(true);
        onFocus && onFocus();
      }}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        onMove &&
          onMove({
            x: info.point.x,
            y: info.point.y,
          });
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      whileDrag={{ scale: 1.05, rotate: -5 }}
      onClick={isDragging ? undefined : () => setIsOpen(true)}
      transition={{ type: "tween", stiffness: 300, damping: 30 }}
    >
      {/* Planet icon and title */}
      <motion.div className="flex flex-col items-center cursor-pointer select-none">
        <motion.img
          src={icon}
          className={`h-${planetSize} w-${planetSize} object-contain select-none`}
          draggable={false}
          animate={{
            filter: "drop-shadow(0 0 32px rgba(255, 255, 255, 0.6))",
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
            delay: rotationDelay,
          }}
        />
        {!isOpen && <div className="text-sm mt-1 select-none">{title}</div>}
      </motion.div>

      {/* Modal below planet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`modal-${id}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "tween", stiffness: 120, damping: 20 }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: (zIndex ?? 1000) + 1,
            }}
            className="bg-white/10 backdrop-blur-lg text-white rounded-lg p-3 w-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-sm">{title}</h3>
              <button
                className="text-blue-400 text-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                ×
              </button>
            </div>
            <div>{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
