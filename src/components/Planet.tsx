import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import type { PlanetType } from "../types/planet";

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
  variant = "standard",
}: PlanetType) {
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isFeatured = variant === "featured";
  const rotationDelay = useRef(Math.random() * 10).current;

  const planetSize = size ?? 0.1; // interpreted as vw fraction

  const modalStyle = isFeatured
    ? {
        position: "fixed" as const,

        transform: "translate(-50%, -50%)",
        // width: "min(80vw, 900px)",
        // height: "min(80vh, 700px)",
        zIndex: 3000,
      }
    : {
        position: "absolute" as const,
        top: "calc(100% + 8px)",
        left: "50%",
        transform: "translateX(-50%)",
        // width: "min(50vw, 400px)",
        // height: "min(60vh, 400px)",
        zIndex: (zIndex ?? 1000) + 1,
      };

  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{
        x: position.x,
        y: position.y,
        translateX: "-50%",
        translateY: "-50%",
        zIndex,
      }}
      drag={!isFeatured}
      dragConstraints={dragConstraints}
      dragMomentum={false}
      dragElastic={0}
      onPointerDown={() => onFocus?.()}
      onDragStart={() => {
        setIsDragging(true);
        onFocus?.();
      }}
      onDragEnd={(_, info) => {
        setIsDragging(false);
        onMove?.({
          x: info.point.x,
          y: info.point.y,
        });
      }}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.05, rotate: -5 }}
      transition={{ type: "tween", stiffness: 300, damping: 30 }}
      onClick={isDragging ? undefined : () => setIsOpen(true)}
    >
      {/* Planet icon */}
      <motion.div className="flex flex-col items-center cursor-pointer select-none">
        <motion.img
          src={icon}
          draggable={false}
          className="object-contain select-none"
          style={{
            width: `clamp(48px, ${planetSize * 100}vw, 400px)`,
            height: `clamp(48px, ${planetSize * 100}vw, 400px)`,
          }}
          animate={{
            rotate: shouldRotate ? 360 : 0,
            filter: "drop-shadow(0 0 16px rgba(255,255,255,0.4))",
          }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear",
            delay: rotationDelay,
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (!isDragging) setIsOpen((v) => !v);
          }}
        />

        {!isOpen && (
          <div className="text-sm mt-1 max-w-32 text-center select-none">
            {title}
          </div>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`modal-${id}`}
            style={modalStyle}
            className={`overflow-auto rounded-xl shadow-xl ${
              isFeatured
                ? "bg-black/60 backdrop-blur-xl"
                : "bg-white/20 backdrop-blur-xl"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "tween", stiffness: 120, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 flex justify-between items-center bg-white/10 backdrop-blur-md rounded-t-xl px-4 py-2">
              <h3 className="font-semibold text-sm">{title}</h3>
              <button
                className="text-white text-md hover:scale-125 transition-transform"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                ×
              </button>
            </div>

            <div className="p-4">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
