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

export const planets: PlanetType[] = [
  {
    id: "writing",
    title: "Writing",
    icon: WritingPlanet,
    size: 64,
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
    size: 64,
    icon: BrandDesignPlanet,
    position: { x: 0.35, y: 0.35 },
    content: <div></div>,
  },
  {
    id: "film_video",
    title: "Film/Video",
    size: 64,
    icon: FilmVideoPlanet,
    position: { x: 0.7, y: 0.2 },
    content: <div></div>,
  },
  {
    id: "graphic",
    title: "Illustrations",
    size: 32,
    icon: GraphicDesignPlanet,
    position: { x: 0.55, y: 0.55 },
    content: <div></div>,
  },
  {
    id: "social",
    title: "Social Media Marketing",
    size: 32,
    icon: SocialMediaPlanet,
    position: { x: 0.25, y: 0.65 },
    content: <div></div>,
  },
  {
    id: "xr",
    title: "XR",
    size: 32,
    icon: XRPlanet,
    position: { x: 0.8, y: 0.05 },
    content: <div></div>,
  },
  {
    id: "animation",
    title: "Animation",
    size: 16,
    icon: AnimationPlanet,
    position: { x: 0.6, y: 0.15 },
    content: <div></div>,
  },
];
