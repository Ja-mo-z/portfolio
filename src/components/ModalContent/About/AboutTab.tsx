import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "motion/react";
import sparkles from "../../../assets/sparkles_emoji.svg";
import mailIcon from "../../../assets/Mail.png";
import linkedInIcon from "../../../assets/LinkedIn.png";

export default function AboutTab() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{ fontSize: "0.75rem" }}
      className="relative w-full max-w-md rounded-lg p-3 leading-relaxed"
    >
      <div className="bg-white-100/70 backdrop-blur-xl rounded-lg p-4 text-white">
        {/* Header */}
        <div>
          <div className="flex items-center justify-left gap-2 mb-1">
            <div className="text-lg  text-sky-200  font-bold mb-1 text-neutral-300">
              Jamie Z.
            </div>{" "}
            <img
              src={sparkles}
              alt="Sparkles"
              className="inline-block size-4 "
            />
          </div>
        </div>
        <p className="text-white/80 mb-4">
          Aspiring writer, filmmaker, illustrator, and developer
        </p>
        {/* Contact */}
        <div className="flex gap-2 mb-6 text-white/70 text-xs">
          <a
            href="https://www.linkedin.com/in/zhou-jamie/"
            target="_blank"
            className="hover:scale-110 transform transition-transform duration-200 ease-in-out"
          >
            <img src={linkedInIcon} className="inline-block size-8 mr-1" />
          </a>

          <a
            href="mailto:jamizh@gmail.com"
            target="_blank"
            className="hover:scale-110 transform transition-transform duration-200 ease-in-out"
          >
            <img src={mailIcon} className="inline-block size-8 mr-1" />
          </a>
        </div>
        {/* Divider */}
        <div className="border-t-1 border-white/70 my-2" />
        <div className="mt-6">
          Hello! Thank you for stopping by. My name is Jamie, and I am currently
          working on ...
        </div>
        {/* Section 1 */}
        <div className="mb-6">
          <ul className="list-disc ml-5 space-y-1 mt-2 text-white/80">
            <li>Writing a novel</li>
            <li>Color grading a short film</li>
            <li>Mobile app development</li>
            <li>Digital art and illustration</li>
            <li>Design</li>
            <li>Animation</li>
          </ul>
        </div>
        {/* Divider */}
        <div className="border-t-1 border-white/70 my-2" />
        {/* Section 2 */}
        <div className="mb-6 mt-6">
          <div className="font-semibold text-indigo-200 mb-2 text-sm">
            What gets me excited
          </div>
          <ul className="list-disc ml-5 space-y-1 text-white/80">
            <li>Creative, collaborative teams</li>
            <li>Punctuality and communication</li>
            <li>Dark chocolate</li>
            <li>Tasty snacks</li>
            <li>Good food</li>
            <li>Great stories</li>
            <li>No bugs within my vincinity</li>
          </ul>
        </div>
        {/* Divider */}
        <div className="border-t-1 border-white/70 my-2" />
        {/* Section 3 */}
        <div className="mb-6 mt-6">
          <div className="font-semibold text-indigo-200 mb-2 text-sm">
            What I want to try
          </div>
          <ul className="list-disc ml-5 space-y-1 text-white/80">
            <li>3D modeling and printing</li>
            <li>Crochet</li>
            <li>Acting</li>
            <li>Songwriting</li>
          </ul>
        </div>
        {/* Divider */}
        <div className="border-t-1 border-white/70 my-2" />
        {/* Section 3 */}
        <div className="mb-2 mt-6">
          <div className="font-semibold text-indigo-200 mb-2 text-sm">
            Education
          </div>

          <span className="flex justify-between">
            <div className="font-semibold "> Bachelor of Science</div>
            <div className="text-white/50 text-xs ">Aug 2021 - May 2025</div>
          </span>
          <ul className="text-white/80">
            <li className="">Film, Television, and Media</li>
            <li className="">Computer Science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
