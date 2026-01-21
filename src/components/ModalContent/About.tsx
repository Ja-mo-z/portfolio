// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "motion/react";
// import sparkles from "../../assets/sparkles_emoji.svg";
// import mailIcon from "../..assets/icons/Mail.png";
// import linkedInIcon from "../../assets/icons/Linkedin.png";

export default function AboutTab() {
  // const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      // ref={containerRef}
      style={{ fontSize: "0.75rem" }}
      // className="relative w-full max-w-md rounded-lg p-2 leading-relaxed "
    >
      <div className="rounded-lg p-0 ">
        {/* Header */}
        <div>
          <div className="flex items-center justify-left gap-2 mb-1">
            <div className="text-lg  text-sky-200 font-bold mb-1 text-neutral-300">
              Jamie Z.
            </div>{" "}
            {/* <img
              src={sparkles}
              alt="Sparkles"
              className="inline-block size-4 "
            /> */}
          </div>
        </div>
        <p className="text-white/80 mb-4">
          A visual storyteller and creative technologist interested in how
          narrative, design, and emerging media intersect. I’ve worked across
          film, animation, XR, and design, often focusing on projects that
          explore process, emotion, and collaboration.
        </p>
        {/* Contact */}
        <div className="flex gap-2 mb-6 text-white/70 text-xs text-center items-center ">
          <a
            href="https://www.linkedin.com/in/zhou-jamie/"
            target="_blank"
            className="hover:scale-110 transform transition-transform duration-200 ease-in-out"
          >
            {/* <img src={linkedInIcon} className="inline-block size-8 mr-1" />
             */}
            <svg
              fill="skyblue"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              // xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
              </g>
            </svg>
          </a>

          <a
            href="mailto:jamizh@umich.edu"
            target="_blank"
            className="hover:scale-110 transform transition-transform duration-200 ease-in-out"
          >
            {/* <img src={mailIcon} className="inline-block size-8 mr-1" /> */}

            <svg
              viewBox="0 0 24 24"
              width={40}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.5725 9.385C16.829 9.5425 16.9955 9.826 16.9955 10.15L17 14.65C17 15.145 16.595 15.55 16.1 15.55H8.9C8.405 15.55 8 15.145 8 14.65V10.15C8 9.826 8.171 9.5425 8.4275 9.385L12.5 7L16.5725 9.385ZM16.0955 10.1545V10.15L12.5 8.04401L8.89999 10.15L12.5 12.4L16.0955 10.1545ZM8.89999 14.65V11.203L12.5 13.462L16.0955 11.2165L16.1 14.65H8.89999Z"
                  fill="skyblue"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
        {/* Divider */}
        <div className="border-t-1 border-white/70 my-2" />
        <div className="mt-4">
          Hi, I'm Jamie. Thank you for dropping by my galaxZ! Currently, I'm
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
        {/* <div className="border-t-1 border-white/70 my-2" /> */}
        {/* Section 2 */}
        <div className="mb-6 mt-4">
          <div className="font-semibold text-indigo-300 mb-2 text-sm">
            What gets me excited
          </div>
          <ul className="list-disc ml-5 space-y-1 text-white/80">
            <li>Creative, collaborative teams</li>
            <li>Punctuality and clear communication</li>
            <li>Dark chocolate</li>
            <li>Tasty snacks</li>
            <li>Good food</li>
            <li>Great stories</li>
            <li>No bugs within my vincinity</li>
          </ul>
        </div>
        {/* Divider */}
        {/* <div className="border-t-1 border-white/70 my-2" /> */}
        {/* Section 3 */}
        <div className="mb-6 mt-4">
          <div className="font-semibold text-indigo-300 mb-2 text-sm">
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
        {/* <div className="border-t-1 border-white/70 my-2" /> */}
        {/* Section 3 */}
        <div className="mb-2 mt-4">
          <div className="font-semibold text-indigo-300 mb-2 text-sm">
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
