import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesktopWarning() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 700);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isMobile || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center text-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-white text-lg md:text-xl max-w-md space-y-4">
          <p>
            ⚠️ This site is best viewed on a desktop. For the best experience,
            please use a larger screen.
          </p>
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
            onClick={() => setIsVisible(false)}
          >
            Continue anyway
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
