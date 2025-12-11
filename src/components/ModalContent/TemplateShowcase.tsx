import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "motion/react";

export interface PDFDocument {
  id: number;
  title: string;
  description: string | React.ReactElement;
  url: string;
}

export interface Video {
  id: number;
  title: string;
  description: string | React.ReactElement;
  embedUrl?: string;
  videoSrc?: string;
}

interface TabSection {
  name?: string; // If undefined → no tabs
  title?: string; // Section header
  tools?: string[];
  documents?: PDFDocument[];
  videos?: Video[];
}

interface ShowcaseProps {
  tabData: TabSection[];
}

export default function TemplateShowcase({ tabData }: ShowcaseProps) {
  const hasTabs = tabData.length > 1;
  const [activeTab, setActiveTab] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [tabWidth, setTabWidth] = useState(0);

  // Compute tab underline width
  useLayoutEffect(() => {
    if (!hasTabs) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setTabWidth(containerRef.current.offsetWidth / tabData.length);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [tabData.length, hasTabs]);

  const active = tabData[hasTabs ? activeTab : 0];
  const docs = active.documents ?? [];
  const videos = active.videos ?? [];
  const tools = active.tools ?? [];

  return (
    <div className="relative w-full max-w-md p-3 text-white text-sm">
      <div className="">
        {/* ---------------- TABS (conditional) ---------------- */}
        {hasTabs && (
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

            <div className="absolute inset-0 flex z-10">
              {tabData.map((tab, i) => (
                <button
                  key={i}
                  className="flex-1 flex items-center justify-center text-xs font-semibold"
                  onClick={() => setActiveTab(i)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Title */}
        {active.title && (
          <div className="text-lg text-sky-200 font-bold mb-3">
            {active.title}
          </div>
        )}

        {/* ---------------- TOOLS ---------------- */}
        {tools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 gap-3 text-center mb-6"
          >
            {tools.map((t) => (
              <div
                key={t}
                className="text-white/80 text-xs font-semibold bg-black/30 rounded-md p-1"
              >
                {t}
              </div>
            ))}
          </motion.div>
        )}

        {/* ---------------- CONTENT LIST ---------------- */}
        <div className="space-y-6">
          {/* PDFs */}
          {docs.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer bg-black/30 p-2 rounded-md hover:bg-black/50"
              onClick={() => window.open(doc.url, "_blank")}
            >
              <div className="font-semibold text-indigo-200 hover:text-white flex items-center gap-2">
                {doc.title}
              </div>

              <div className="mt-1 text-xs text-white/70 bg-white/5 p-2 rounded-md">
                {doc.description}
              </div>
            </motion.div>
          ))}

          {/* Videos */}
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <div className="overflow-hidden rounded-md">
                {v.embedUrl && (
                  <iframe
                    width="100%"
                    src={v.embedUrl}
                    title={v.title}
                    allowFullScreen
                    className="rounded-md w-full aspect-video"
                  />
                )}
                {v.videoSrc && (
                  <video
                    controls
                    src={v.videoSrc}
                    className="rounded-md w-full aspect-video"
                  />
                )}
              </div>

              <div className="mt-2">
                <div className="font-semibold text-indigo-200">{v.title}</div>
                <div className="text-white/70 text-xs mt-1">
                  {v.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
