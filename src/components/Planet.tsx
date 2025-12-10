import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import type { PlanetType } from "../types/planet";
import useWindowDimensions from "../data/windowSize";

export default function Planet({
  id,
  title,
  icon,
  size,
  shouldRotate = true,
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
  const { width: screenW, height: screenH } = useWindowDimensions();

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
      // whileTap={{ scale: 0.98 }}
      whileDrag={{ scale: 1.05, rotate: -5 }}
      onClick={isDragging ? undefined : () => setIsOpen(true)}
      transition={{ type: "tween", stiffness: 300, damping: 30 }}
    >
      {/* Planet icon and title */}
      <motion.div className="flex flex-col items-center cursor-pointer select-none">
        <motion.img
          src={icon}
          style={{ width: planetSize * screenW, height: planetSize * screenW }}
          className={`object-contain select-none`}
          draggable={false}
          animate={{
            filter: "drop-shadow(0 0 32px rgba(255, 255, 255, 0.6))",
            rotate: shouldRotate ? 360 : 0,
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
              width: Math.min(screenW * 0.4, 400),
              height: Math.min(screenH * 0.5, 300),
            }}
            className="bg-white/10 backdrop-blur-lg text-white rounded-t-lg rounded-b-lg overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="sticky top-0 z-20 flex justify-between items-center 
             bg-black/70 backdrop-blur-lg p-2 rounded-t-md"
            >
              <h3 className="font-semibold text-sm">{title}</h3>
              <button
                className="text-white text-md bg-transparent p-0 border-none cursor-pointer hover:scale-125 transform transition-transform duration-200 ease-in-out"
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
