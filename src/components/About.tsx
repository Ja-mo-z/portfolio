import { motion, AnimatePresence } from "framer-motion";
import Sparkle from "../assets/Sparkle.png";
import { useState } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {};
  return (
    <motion.div className="flex flex-col items-center">
      <motion.img
        src={Sparkle}
        alt="Animated Planet"
        className="h-32 w-32"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <p>About Me!</p>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="about-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "tween", stiffness: 120, damping: 20 }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20000,
            }}
            className="bg-white/10 backdrop-blur-lg text-white rounded-lg p-3 w-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-sm">Hi!</h3>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
