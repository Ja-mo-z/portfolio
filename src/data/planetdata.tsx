import type { PlanetType } from "../types/planet";

// Icons
import WritingPlanet from "../assets/planets/Writing_Planet.png";
import GraphicDesignPlanet from "../assets/planets/Graphic_Design_Planet.png";
import BrandDesignPlanet from "../assets/planets/Brand_Design_Planet.png";
import SocialMediaPlanet from "../assets/planets/Social_Media_Planet.png";
import AnimationPlanet from "../assets/planets/Animation_Planet.png";
import FilmVideoPlanet from "../assets/planets/FilmVideo_Planet.png";
import XRPlanet from "../assets/planets/XR_Planet.png";
import Sparkle from "../assets/Sparkle.png";
import Sun from "../assets/planets/Sun.png";

// Content
import AboutTab from "../components/ModalContent/About";
import XR from "../components/ModalContent/XR";
import Animation from "../components/ModalContent/Animation";
import FilmVideo from "../components/ModalContent/FilmVideo";
import Design from "../components/ModalContent/Design";
import SocialMedia from "../components/ModalContent/SocialMedia";
import Writing from "../components/ModalContent/Writing";
import Art from "../components/ModalContent/Art";
import FeaturedProjects from "../components/ModalContent/FeaturedProjects";

/**
 * Solar layout notes:
 * - Sun at (0.5, 0.5)
 * - Inner ring ~0.18
 * - Outer ring ~0.28
 * - Slight upward bias to avoid bottom crowding
 */

export const planets: PlanetType[] = [
  {
    id: "about",
    title: "About Me!",
    icon: Sparkle,
    size: 0.09,
    shouldRotate: false,
    position: { x: 0.09, y: 0.1 },
    content: <AboutTab />,
  },
  {
    id: "featured",
    title: "Featured Projects",
    icon: Sun,
    size: 0.75,
    position: { x: 0.5, y: 0.55 },
    variant: "featured",
    content: <FeaturedProjects />,
  },
  {
    id: "film_video",
    title: "Film / Video",
    icon: FilmVideoPlanet,
    size: 0.12,
    position: { x: 0.2, y: 0.72 },
    content: <FilmVideo />,
  },
  {
    id: "art",
    title: "Art",
    icon: GraphicDesignPlanet,
    size: 0.07,
    position: { x: 0.04, y: 0.62 },
    content: <Art />,
  },

  {
    id: "social",
    title: "Social Media & Marketing",
    icon: SocialMediaPlanet,
    size: 0.07,
    position: { x: 0.15, y: 0.4 },
    content: <SocialMedia />,
  },

  {
    id: "writing",
    title: "Writing",
    icon: WritingPlanet,
    size: 0.12,
    position: { x: 0.9, y: 0.55 },
    content: <Writing />,
  },
  {
    id: "design",
    title: "Design",
    icon: BrandDesignPlanet,
    size: 0.12,
    position: { x: 0.7, y: 0.78 },
    content: <Design />,
  },

  {
    id: "xr",
    title: "XR",
    icon: XRPlanet,
    size: 0.07,
    position: { x: 0.75, y: 0.35 },
    content: <XR />,
  },
  {
    id: "animation",
    title: "Animation",
    icon: AnimationPlanet,
    size: 0.07,
    position: { x: 0.9, y: 0.2 },
    content: <Animation />,
  },
];
