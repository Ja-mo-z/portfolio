import { motion } from "motion/react";

export interface Video {
  id: number;
  title: string;
  description: string;
  ytId: string;
}

interface VideoShowcaseProps {
  tools: string[];
  videos: Video[];
  tabTitle?: string;
}

export default function VideoShowcaseTemplate({
  tools,
  videos,
  tabTitle = "Tools",
}: VideoShowcaseProps) {
  return (
    <div className="relative w-full max-w-md p-3 text-white text-sm">
      <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4">
        {/* Header */}
        <div className="text-lg text-sky-200 font-bold mb-1">{tabTitle}</div>

        {/* ------------------ TOOLS GRID ------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 gap-4 text-center mb-6"
        >
          {tools.map((tool) => (
            <div
              key={tool}
              className="text-white/80 text-xs font-semibold bg-black/30 rounded-md p-1"
            >
              {tool}
            </div>
          ))}
        </motion.div>

        {/* ------------------ VIDEOS LIST ------------------ */}
        <div className="space-y-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-md">
                <iframe
                  width="100%"
                  src={`https://www.youtube.com/embed/${v.ytId}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-md"
                />
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
