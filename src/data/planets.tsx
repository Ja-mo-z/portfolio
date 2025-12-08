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
    position: { x: 100, y: 100 },
    content: (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <h1>YAYAYAYS</h1>hey
      </motion.div>
    ),
  },

  {
    id: "graphic",
    title: "Illustrations",
    size: 32,
    icon: GraphicDesignPlanet,
    position: { x: 300, y: 200 },
    content: <div></div>,
  },

  {
    id: "design",
    title: "Design",
    size: 64,
    icon: BrandDesignPlanet,
    position: { x: 400, y: 300 },
    content: <div></div>,
  },

  {
    id: "social",
    title: "Social Media Marketing",
    size: 32,

    icon: SocialMediaPlanet,
    position: { x: 500, y: 200 },
    content: <div></div>,
  },

  {
    id: "animation",
    title: "Animation",
    size: 16,

    icon: AnimationPlanet,
    position: { x: 1000, y: 600 },
    content: <div></div>,
  },

  {
    id: "film_video",
    title: "Film/Video",
    size: 64,
    icon: FilmVideoPlanet,
    position: { x: 600, y: 200 },
    content: <div></div>,
  },

  {
    id: "xr",
    title: "XR",
    size: 32,
    icon: XRPlanet,
    position: { x: 600, y: 300 },
    content: <div></div>,
  },
];
