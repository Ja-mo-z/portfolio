import TemplateShowcase from "./TemplateShowcase";
import GoldenShovelGif from "/videos/GoldenShovel.gif";
import MorphingShapesMp4 from "/videos/MorphingShapes.mp4";
import TitleMGPractice from "/videos/TitleMG.mp4";
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
          embedUrl: "https://www.youtube.com/embed/Cbr8IiMHhyE ",
        },
        {
          id: 1,
          title: "Just Keep Swimming",
          description: (
            <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
              A girl goes for a seemingly ordinary swim but is pulled down by
              unseen forces. This animation explores the overwhelming, addictive
              feeling of hopelessness—the girl gets in the pool and follows the
              jellyfish deeper despite knowing she shouldn’t. The jellyfish
              symbolizes a dangerous comfort, luring her (and others) into the
              darkness.
            </div>
          ),
          embedUrl: "https://www.youtube.com/embed/mxWIG3HSp0Q",
        },
        {
          id: 2,
          title: "Golden Shovel Agency Animated Logo",
          description: "A short motion graphic for Golden Shovel’s podcasts.",
          videoSrc: GoldenShovelGif,
        },
      ],
    },
    {
      name: "Experimentation",
      // title: "Experimental Animation Projects",
      tools: ["After Effects", "Moho", "Photoshop"],
      videos: [
        {
          id: 3,
          title: "Morphing Shapes",
          description: "Made with After Effects.",
          videoSrc: MorphingShapesMp4,
        },
        {
          id: 6,
          title: "Title Animation",
          description: "Made with After Effects.",
          videoSrc: TitleMGPractice,
        },
        {
          id: 4,
          title: "Ballet-Astronaut Animation",
          description: "Made with Adobe Animate.",
          embedUrl: "https://www.youtube.com/embed/n-FsfopKObc",
        },
        {
          id: 5,
          title: "Character Animation",
          description: "Made with Moho.",
          embedUrl: "https://www.youtube.com/embed/lbXoTctF-_E",
        },
      ],
    },
  ];

  return <TemplateShowcase tabData={tabData} />;
}
