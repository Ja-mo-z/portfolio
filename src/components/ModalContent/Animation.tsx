import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import VideoShowcaseTab from "./VideoShowcaseTemplate";
import VideoShowcaseTemplate from "./VideoShowcaseTemplate";

export default function Animation() {
  const tools = [
    "Procreate",
    "Premiere Pro",
    "After Effects",
    "Illustrator",
    "Photoshop",
    "Davinci Resolve",
  ];
  const videos = [
    {
      id: 0,
      title: "Fibarcode Product Video",
      description:
        "Short description of the first video project. Explore the Design Planet to see more of my work with Fibarcode! ",
      ytId: "bTZkqVq29wQ",
    },
    {
      id: 1,
      title: "Just Keep Swimming",
      description: "Short description of the second video project.",
      ytId: "WHz7r5i27os",
    },
    {
      id: 2,
      title: "Golden Shovel Agency Animated Logo",
      description: "Short description of the third video project.",
      ytId: "xhZO8VmhIwE",
    },
    {
      id: 3,
      title: "Morphing Shapes",
      description: "Short description of the third video project.",
      ytId: "dTg96kWUarA",
    },
  ];

  return <VideoShowcaseTemplate tools={tools} videos={videos} />;
}
