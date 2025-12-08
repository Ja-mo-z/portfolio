import { motion } from "framer-motion";
import Sparkle from "../assets/Sparkle.png";

export default function About() {
  return (
    <motion.div className="flex flex-col items-center">
      <motion.img
        src={Sparkle}
        alt="Animated Planet"
        className="h-32 w-32"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <p>About Me!</p>
    </motion.div>
  );
}
