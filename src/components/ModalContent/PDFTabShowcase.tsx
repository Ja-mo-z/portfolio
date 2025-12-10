import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface PDFDocument {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface PDFTabShowcaseProps {
  tabData: { name: string; documents: PDFDocument[] }[];
}

export default function PDFTabShowcase({ tabData }: PDFTabShowcaseProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPDF, setSelectedPDF] = useState<PDFDocument | null>(null);
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
              className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md"
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
                {tab.name}
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
              onClick={() => setSelectedPDF(doc)}
            >
              <div className="font-semibold text-indigo-200">{doc.title}</div>
              <div className="text-white/70 text-xs mt-1">
                {doc.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ------------------ PDF MODAL ------------------ */}
        <AnimatePresence>
          {selectedPDF && (
            <motion.div
              key="pdf-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative w-full max-w-3xl h-[80vh] bg-black/90 rounded-lg overflow-hidden"
              >
                <button
                  className="absolute top-2 right-3 text-white text-3xl hover:scale-125 transition z-10"
                  onClick={() => setSelectedPDF(null)}
                >
                  ×
                </button>

                <iframe
                  src={selectedPDF.url}
                  className="w-full h-full"
                  title={selectedPDF.title}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
