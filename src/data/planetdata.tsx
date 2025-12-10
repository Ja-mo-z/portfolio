// static planet info
import type { PlanetType } from "../types/planet";
import { motion } from "motion/react";

// Import all icons (for Vite to bundle them correctly)
import WritingPlanet from "../assets/planets/Writing_Planet.png";
import GraphicDesignPlanet from "../assets/planets/Graphic_Design_Planet.png";
import BrandDesignPlanet from "../assets/planets/Brand_Design_Planet.png";
import SocialMediaPlanet from "../assets/planets/Social_Media_Planet.png";
import AnimationPlanet from "../assets/planets/Animation_Planet.png";
import FilmVideoPlanet from "../assets/planets/FilmVideo_Planet.png";
import XRPlanet from "../assets/planets/XR_Planet.png";
import Sparkle from "../assets/Sparkle.png";

// Import all tab contents (for Vite to bundle them correctly)
import AboutTab from "../components/ModalContent/About/AboutTab";
import XR from "../components/ModalContent/XR";
import Animation from "../components/ModalContent/Animation";
import FilmVideo from "../components/ModalContent/FilmVideo";
// import GraphicDesign from "../components/ModalContent/GraphicDesign";
// import SocialMedia from "../components/ModalContent/SocialMedia";
// import BrandDesign from "../components/ModalContent/BrandDesign";
// import Writing from "../components/ModalContent/Writing";

export const planets: PlanetType[] = [
  {
    id: "about",
    title: "About Me!",
    icon: Sparkle,
    size: 0.1,
    position: { x: 0.05, y: 0.05 },
    shouldRotate: false,
    content: <AboutTab />,
  },
  {
    id: "writing",
    title: "Writing",
    icon: WritingPlanet,
    size: 0.15,
    position: { x: 0.05, y: 0.6 },
    content: (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <h1>Writing</h1>
      </motion.div>
    ),
  },
  {
    id: "design",
    title: "Design",
    size: 0.15,
    icon: BrandDesignPlanet,
    position: { x: 0.35, y: 0.35 },
    content: <div></div>,
  },
  {
    id: "film_video",
    title: "Film/Video",
    size: 0.15,
    icon: FilmVideoPlanet,
    position: { x: 0.7, y: 0.2 },
    content: <FilmVideo />,
  },
  {
    id: "graphic",
    title: "Illustrations",
    size: 0.085,
    icon: GraphicDesignPlanet,
    position: { x: 0.55, y: 0.55 },
    content: <div></div>,
  },
  {
    id: "social",
    title: "Social Media Marketing",
    size: 0.075,
    icon: SocialMediaPlanet,
    position: { x: 0.25, y: 0.65 },
    content: <div></div>,
  },
  {
    id: "xr",
    title: "XR",
    size: 0.075,
    icon: XRPlanet,
    position: { x: 0.8, y: 0.05 },
    content: <XR />,
  },
  {
    id: "animation",
    title: "Animation",
    size: 0.075,
    icon: AnimationPlanet,
    position: { x: 0.6, y: 0.15 },
    content: <Animation />,
  },
];
