import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverZoom from "./HoverZoom";

export interface CarouselItem {
  id: number;
  imgSrc: string;
  title?: string;
  description?: string;
  link?: string;
  hoverZoom?: boolean;
}

interface CarouselProps {
  images: CarouselItem[];
  width?: number; // px
  height?: number; // px
}

export default function ImageCarousel({
  images,
  width = 400,
  height = 250,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative overflow-hidden rounded-md"
      style={{ width, height }}
    >
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[currentIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center w-full h-full"
        >
          {images[currentIndex].link ? (
            <a
              href={images[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              <img
                src={images[currentIndex].imgSrc}
                alt={images[currentIndex].title ?? ""}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </a>
          ) : images[currentIndex].hoverZoom ? (
            <HoverZoom src={images[currentIndex].imgSrc} />
          ) : (
            <img
              src={images[currentIndex].imgSrc}
              alt={images[currentIndex].title ?? ""}
              className="max-w-full max-h-full object-contain rounded-md"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? "bg-sky-300" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
