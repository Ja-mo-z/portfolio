import TemplateShowcase from "./TemplateShowcase";

export default function Animation() {
  const tabData = [
    {
      name: "Finished",
      // title: "Finished Animation Projects",
      tools: [
        "Procreate",
        "Premiere Pro",
        "After Effects",
        "Illustrator",

        "Davinci Resolve",
      ],
      videos: [
        {
          id: 0,
          title: "Fibarcode Product Video",
          description:
            "Short description of the first video project. Explore the Design Planet to see more of my work with Fibarcode!",
          embedUrl: "https://www.youtube.com/embed/bTZkqVq29wQ",
        },
        {
          id: 1,
          title: "Just Keep Swimming",
          description: "Short description of the second video project.",
          embedUrl: "https://www.youtube.com/embed/WHz7r5i27os",
        },
        {
          id: 2,
          title: "Golden Shovel Agency Animated Logo",
          description: "Short description of the third video project.",
          embedUrl: "https://www.youtube.com/embed/xhZO8VmhIwE",
        },
      ],
    },
    {
      name: "Experimenting",
      // title: "Experimental Animation Projects",
      tools: ["After Effects", "Moho", "Photoshop"],
      videos: [
        {
          id: 3,
          title: "Morphing Shapes",
          description: "Short description of the fourth video project.",
          embedUrl: "https://www.youtube.com/embed/dTg96kWUarA",
        },
        // Add more experimental videos here if you have them
      ],
    },
  ];

  return <TemplateShowcase tabData={tabData} />;
}
