// static planet info (will change in Desktop, where planets are dynamic)
// import type { PlanetData } from "../types/planet";
import type { PlanetType } from "../types/planet";
import { motion } from "motion/react";

export const planets: PlanetType[] = [
  {
    id: "writing",
    title: "Writing",
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
    title: "Graphic Design",
    position: { x: 300, y: 200 },
    content: <div></div>,
  },
  {
    id: "brand",
    title: "Brand Design",
    position: { x: 400, y: 300 },
    content: <div></div>,
  },
  {
    id: "social",
    title: "Social Media Marketing",
    position: { x: 500, y: 200 },
    content: <div></div>,
  },
  {
    id: "film/video",
    title: "Film/Video",
    position: { x: 600, y: 200 },
    content: <div></div>,
  },
];

// Sample planet data
// const planets: PlanetType[] = [
//   {
//     id: "brand",
//     title: "Brand Design",
// content: (
//   <div>
//     <h2>Brand Projects</h2>
//     <ul>
//       <li>Logo Redesign</li>
//       <li>Brand Guidelines</li>
//     </ul>
//   </div>
// ),
//   },
//   {
//     id: "web",
//     title: "Web Design",
//     content: (
//       <div>
//         <h2>Web Projects</h2>
//         <p>Interactive web pages, portfolios, and responsive designs.</p>
//       </div>
//     ),
//   },
//   {
//     id: "motion",
//     title: "Motion Graphics",
//     content: (
//       <div>
//         <h2>Motion Projects</h2>
//         <video width="320" height="180" controls>
//           <source src="sample_video.mp4" type="video/mp4" />
//         </video>
//       </div>
//     ),
//   },
// ];
