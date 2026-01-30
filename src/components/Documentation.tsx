import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import help from "../assets/icons/help.svg";

export default function Documentation({ size }: { size: number }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Fixed icon, bottom-right */}
      <img
        src={help}
        alt="Help Icon"
        style={{ width: size, height: size }}
        className="fixed bottom-3 right-16 z-[9999] cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed z-[10000] bottom-20 right-20 w-80 max-h-[35vh] overflow-auto
             bg-white/20 backdrop-blur-xl rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top title bar */}
            <div className="sticky top-0 z-20 flex justify-between items-center bg-white/10 backdrop-blur-md rounded-t-xl px-4 py-2">
              <h3 className="font-semibold text-sm">Documentation</h3>
              <button
                className="text-white text-md bg-transparent p-0 border-none cursor-pointer hover:scale-125 transform transition-transform duration-200 ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                ×
              </button>
            </div>

            {/* Modal content */}
            <div className="p-4 text-white text-sm space-y-3">
              <p className="font-bold text-sky-200 ">
                What you can do on this site!
              </p>
              <ul className="list-disc ml-5 text-white/80 space-y-1">
                <li>
                  <b className="text-indigo-300 ">Drag the planets</b> (and the
                  lone dancing sparkle) wherever you want!
                </li>
                <li>
                  Click the planets to{" "}
                  <b className="text-indigo-300">
                    explore some projects I’ve worked on.
                  </b>
                </li>
                <li>
                  Play some relaxing background{" "}
                  <b className="text-indigo-300">music</b>.
                </li>
                <li>Know what time it is on my end of the galaxZ.</li>
              </ul>

              <p className="font-semibold text-sky-200 ">How I made it</p>
              <ul className="list-disc ml-5 text-white/80 space-y-1">
                <li>
                  Built using React and Vite, then deployed on GitHub Pages.
                </li>
                <li>
                  Created the planets and dancing sparkle using Procreate.
                </li>
              </ul>

              <p className="font-semibold text-sky-200 ">Resources</p>
              <ul className="list-disc ml-5 text-white/80 space-y-1">
                <li>
                  <a
                    href="https://ui.aceternity.com/components/shooting-stars-and-stars-background"
                    className="underline hover:text-indigo-400 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Starry background
                  </a>
                </li>
                <li>
                  <a
                    href="https://socket.dev/npm/package/rocket-cursor-component "
                    className="underline hover:text-indigo-400 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rocket cursor
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.epidemicsound.com/music/tracks/7dcbeeae-9cc6-42c6-bf09-a523c2e2cd2e/"
                    className="underline hover:text-indigo-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Music
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.svgrepo.com/"
                    className="underline hover:text-indigo-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Icons
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/framer-motion"
                    className="underline hover:text-indigo-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Motion for React
                  </a>
                </li>
              </ul>

              <p className="font-semibold text-sky-200 ">Future developments</p>
              <ul className="list-disc ml-5 text-white/80 space-y-1">
                <li>
                  Improve the planet modals (appearance, resizability, and
                  functionality)
                </li>
                <li>
                  Introduce the capability to enlarge pictures or videos within
                  the website
                </li>
                {/* <li>Make the modals more stylized</li> */}
                <li>Light/dark mode</li>
                <li>Accessibility improvements</li>
                <li>Recreate icons in my own style</li>
                <li>Clean up the codebase</li>
                <li>Make the dancing Sparkle on beat with the music</li>
              </ul>

              <p className="text-white/80">
                If something isn’t working, please shoot me an email at{" "}
                <a
                  href="mailto:jamizh@umich.edu"
                  className="underline hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jamizh@umich.edu
                </a>
                !
              </p>
              <div className="border-t-1 border-white/70 my-2" />

              <p className="text-white/60" style={{ fontSize: "0.5rem" }}>
                Last updated: December 2025
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
