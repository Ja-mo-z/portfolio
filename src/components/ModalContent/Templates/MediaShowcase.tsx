import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "motion/react";

export interface Image {
  id: number;
  title?: string | React.ReactElement;
  description?: string | React.ReactElement;
  imgSrc: string | React.ReactElement;
  height?: number;
  width?: number;
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
  subheading?: string | React.ReactElement; // Section subheader
  tools?: string[];
  images?: Image[];
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
  const images = active.images ?? [];
  const videos = active.videos ?? [];
  const tools = active.tools ?? [];

  return (
    <div className="relative w-full max-w-md p-3 text-white text-sm">
      <div>
        {/* ---------------- TABS (conditional) ---------------- */}
        {hasTabs && (
          <div
            ref={containerRef}
            className="relative w-full h-8 mb-4 bg-white/20 backdrop-blur-md rounded-lg"
          >
            {tabWidth > 0 && (
              <motion.div
                className="absolute top-0 left-0 bg-gradient-to-r from-sky-500 to-sky-200 rounded-md"
                style={{ width: tabWidth, height: "100%" }}
                animate={{ x: activeTab * tabWidth }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <div className="absolute inset-0 flex z-10">
              {tabData.map((tab, i) => (
                <button
                  key={i}
                  className="flex-1 flex items-center justify-center text-xs font-semibold "
                  onClick={() => setActiveTab(i)}
                >
                  <p className="text-shadow-lg">{tab.name} </p>
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
        {/* ---------------- Subheading ---------------- */}
        {active.subheading && (
          <div className="text-white/80 text-xs mb-4">{active.subheading}</div>
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
                className="text-white/60 text-xs font-semibold bg-black/20 rounded-md p-1"
              >
                {t}
              </div>
            ))}
          </motion.div>
        )}

        {/* ---------------- CONTENT LIST ---------------- */}
        <div className="space-y-6">
          {/* Images */}
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <div className="overflow-hidden rounded-md flex justify-center items-center">
                {typeof img.imgSrc === "string" ? (
                  <img
                    src={img.imgSrc}
                    className="rounded-md w-full object-cover"
                    // alt={img.title}
                    style={{
                      height: img.height ?? "auto",
                      width: img.width ?? "80%",
                    }}
                  />
                ) : (
                  img.imgSrc
                )}
              </div>

              <div className="mt-2">
                <div className="font-semibold text-indigo-300">{img.title}</div>
                <div className="text-white/70 text-xs mt-1">
                  {img.description}
                </div>
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
                {v.videoSrc &&
                  (v.videoSrc.endsWith(".gif") ? (
                    <img
                      src={v.videoSrc}
                      className="rounded-md w-full aspect-video object-cover"
                      alt={v.title}
                    />
                  ) : (
                    <video
                      controls
                      src={v.videoSrc}
                      className="rounded-md w-full aspect-video"
                    />
                  ))}
              </div>

              <div className="mt-2">
                <div className="font-semibold text-indigo-300">{v.title}</div>
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
