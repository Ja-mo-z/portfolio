import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
// import external_link from "../../assets/icons/external_link.svg";

export interface PDFDocument {
  id: number;
  title: string;
  description: string | React.ReactElement;
  url: string;
}

interface PDFTabShowcaseProps {
  tabData: { name: string; documents: PDFDocument[] }[];
}

export default function PDFTabShowcase({ tabData }: PDFTabShowcaseProps) {
  const [activeTab, setActiveTab] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [tabWidth, setTabWidth] = useState(0);

  // Calculate tab width
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setTabWidth(containerRef.current.offsetWidth / tabData.length);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [tabData.length]);

  const activeDocuments = tabData[activeTab]?.documents ?? [];

  return (
    <div className="relative w-full max-w-md p-3 text-white text-sm">
      <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4">
        {/* ------------------ TABS ------------------ */}
        <div
          ref={containerRef}
          className="relative w-full h-8 mb-4 bg-white/20 backdrop-blur-md rounded-lg"
        >
          {tabWidth > 0 && (
            <motion.div
              className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-fuchsia-400 rounded-md"
              style={{ width: tabWidth, height: "100%" }}
              animate={{ x: activeTab * tabWidth }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          <div className="absolute top-0 left-0 w-full h-full flex z-10">
            {tabData.map((tab, i) => (
              <button
                key={tab.name}
                className="flex-1 flex items-center justify-center h-full text-xs font-semibold text-white z-10"
                onClick={() => setActiveTab(i)}
              >
                {tab.name}{" "}
              </button>
            ))}
          </div>
        </div>

        {/* ------------------ PDF LIST ------------------ */}
        <div className="space-y-4">
          {activeDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer bg-black/30 p-2 rounded-md hover:bg-black/50"
            >
              <div
                className="font-semibold text-indigo-200 hover:text-white hover:scale-101 transition-transform ease-in-out flex gap-2 items-center"
                onClick={() =>
                  window.open(`${import.meta.env.BASE_URL}${doc.url}`, "_blank")
                }
              >
                {doc.title}{" "}
                <span className="inline-block ml-1 ">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-white/70 text-xs mt-1 bg-white/5 p-2 rounded-md ">
                {doc.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
