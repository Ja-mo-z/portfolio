import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import VideoShowcaseTab from "./VideoShowcaseTemplate";
import VideoShowcaseTemplate from "./VideoShowcaseTemplate";

export default function XR() {
  const tools = [
    "Unreal Engine",
    "Unity",
    "Sketchfab",
    "Figma",
    "Mixamo",
    "Jira",
  ];
  const videos = [
    {
      id: 0,
      title: "DnaVR",
      description:
        "https://jamizh.wixsite.com/dnavr Short description of the first video project. ",
      ytId: "bTZkqVq29wQ",
    },
    {
      id: 1,
      title: "An Interpretation of BBB 1670",
      description: "Short description of the second video project.",
      ytId: "WHz7r5i27os",
    },
    {
      id: 2,
      title: "A2GO",
      description: "Short description of the third video project.",
      ytId: "xhZO8VmhIwE",
    },
    {
      id: 3,
      title: "VR Magic Show",
      description: "Short description of the third video project.",
      ytId: "dTg96kWUarA",
    },
  ];

  return (
    <VideoShowcaseTemplate
      tools={tools}
      videos={videos}
      //   tabTitle="Tools & Projects"
    />
  );
}
