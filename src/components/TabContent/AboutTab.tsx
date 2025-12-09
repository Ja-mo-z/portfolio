import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "motion/react";

export default function TabPanel() {
  const tabs = ["About", "Projects", "Contact"];
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tabWidth, setTabWidth] = useState(0);

  // Calculate tab width on mount & resize
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setTabWidth(containerRef.current.offsetWidth / tabs.length);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [tabs.length]);

  return (
    <div
      ref={containerRef}
      style={{ height: 24 }}
      className="relative w-full max-w-md bg-white/20 backdrop-blur-md rounded-lg p-1"
    >
      {/* Highlight bar */}
      {tabWidth > 0 && (
        <motion.div
          className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md"
          animate={{ x: active * tabWidth }}
          style={{ width: tabWidth, height: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Tabs */}
      <div className="relative flex">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            style={{ height: 24, fontSize: "0.75rem" }}
            onClick={() => setActive(i)}
            className="flex-1 text-center z-10 text-white font-semibold bg-transparent hover:bg-white/10"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
