import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import help from "../assets/icons/help.svg";

export default function Documentation({ size }: { size: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed icon bottom-right */}
      <img
        src={help}
        alt="Help Icon"
        style={{ width: size, height: size }}
        className="fixed bottom-4 right-20 z-[9999] cursor-pointer select-none"
        onClick={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed z-[10000] bottom-20 right-20 w-80 max-h-[60vh] overflow-auto
                       bg-white/20 backdrop-blur-xl rounded-xl p-4 text-white shadow-xl"
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-2">Documentation</h2>
            <p>
              This panel uses a frosted glass effect! It stays above the icon,
              is fully visible on screen, and does not affect any other layout
              elements.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
