import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import VideoShowcaseTab from "./VideoShowcaseTemplate";
import VideoShowcaseTemplate from "./VideoShowcaseTemplate";

export default function FilmVideo() {
  const tools = [
    "Davinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Panasonic Lumix",
    "Black Magic Pocket 4k",
    "DJI Mini 3",
  ];
  const videos = [
    {
      id: 0,
      title: "Saved",
      description: "hort description of the first video project. ",
      ytId: "bTZkqVq29wQ",
    },
    {
      id: 1,
      title: "Unfashionable",
      description: "Short description of the second video project.",
      ytId: "WHz7r5i27os",
    },
    {
      id: 2,
      title: "Kazuhiro Soda Interview",
      description: "Short description of the third video project.",
      ytId: "xhZO8VmhIwE",
    },
    {
      id: 3,
      title: "Introducing CLAWS",
      description: "Short description of the third video project.",
      ytId: "dTg96kWUarA",
    },
    {
      id: 4,
      title: "Swallows Under Eaves",
      description: "Short description of the third video project.",
      ytId: "dTg96kWUarA",
    },
  ];

  return (
    <VideoShowcaseTemplate
      tools={tools}
      videos={videos}
      tabTitle="My Tools & Projects"
    />
  );
}
