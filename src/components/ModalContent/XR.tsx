// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import VideoShowcaseTab from "./VideoShowcaseTemplate";
// import VideoShowcaseTemplate from "./VideoShowcaseTemplate";
import TemplateShowcase from "./MediaShowcase";

export default function XR() {
  const tabData = [
    {
      //   title: "Immersive Experiences",
      tools: ["Unreal Engine", "Unity", "Sketchfab", "Figma", "Mixamo", "Jira"],
      videos: [
        {
          id: 0,
          title: "DnaVR",
          description: (
            <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
              <p>November 1st, 2023 - December 5th, 2023</p>
              <p>
                A virtual reality experience that allows users to explore the
                structure of DNA in an immersive 3D environment. Created using
                Unreal Engine and optimized for VR headsets.
              </p>

              <p>
                I contributed to designing and building interactive elements
                like the environment of the cell, the tutorial slides, and other
                mechanics. I also created the website in Wix, detailing our
                process and a fictitious subscription plan for the DNAVR
                product. If you want to view the tutorial slides, explore the
                Design planet! And if you want to see the website,
                <strong>
                  <a
                    href="https://jamizh.wixsite.com/dnavr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400"
                  >
                    click here
                  </a>
                </strong>
                .
              </p>
            </div>
          ),

          embedUrl: "https://www.youtube.com/embed/bTZkqVq29wQ",
        },
        {
          id: 1,
          title: "An Interpretation of BBB 1695",
          description: (
            <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
              <p>September 11th, 2023 - October 2nd, 2023</p>
              <p>
                BBB 1695 is a room in the Bob and Betty Beyster Building. It has
                since been renovated, but its likeness will forever be preserved
                in this VR project. Using Unreal Engine 5, I recreated BBB 1695
                and designed playful interactive events using custom objects,
                materials, and scripting. Depending on whether the user
                successfully finishes their tasks, the experience shifts from a
                celebratory fireworks scene or to a chaotic cascade of falling
                ducks and destruction.
              </p>
            </div>
          ),
          embedUrl: "https://www.youtube.com/embed/WHz7r5i27os",
        },
        {
          id: 2,
          title: "A2GO",
          description: (
            <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
              <p>October 4th, 2023 - October 30th, 2023</p>
              <p>
                For this project, I created a campus-based experience inspired
                by Pokémon Go, where landmarks represented notable locations
                around the University of Michigan campus. Through this project,
                I learned to manage complex tasks by breaking the project into
                smaller, achievable goals, and gained hands-on experience
                creating and managing scripts, switching between scenes, and
                handling data efficiently in Unity.
              </p>
            </div>
          ),
          embedUrl: "https://www.youtube.com/embed/xhZO8VmhIwE",
        },
        {
          id: 3,
          title: "VR Magic Show",
          description:
            "Just a simple magic show using basic Unreal Engine 5 blueprinting!",
          embedUrl: "https://www.youtube.com/embed/dTg96kWUarA",
        },
      ],
    },
  ];
  //   const tools = [
  //     "Unreal Engine",
  //     "Unity",
  //     "Sketchfab",
  //     "Figma",
  //     "Mixamo",
  //     "Jira",
  //   ];
  //   const videos = [
  //     {
  //       id: 0,
  //       title: "DnaVR",
  //       description: (
  //         <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
  //           <p>November 1st, 2023 - December 5th, 2023</p>
  //           <p>
  //             A virtual reality experience that allows users to explore the
  //             structure of DNA in an immersive 3D environment. Created using
  //             Unreal Engine and optimized for VR headsets.
  //           </p>

  //           <p>
  //             I contributed to designing and building interactive elements like
  //             the environment of the cell, the tutorial slides, and other
  //             mechanics. I also created the website in Wix, detailing our process
  //             and a fictitious subscription plan for the DNAVR product. If you
  //             want to view the tutorial slides, explore the Design planet! And if
  //             you want to see the website,
  //             <strong>
  //               <a
  //                 href="https://jamizh.wixsite.com/dnavr"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="underline hover:text-blue-400"
  //               >
  //                 click here
  //               </a>
  //             </strong>
  //             .
  //           </p>
  //         </div>
  //       ),

  //       embedUrl: "https://www.youtube.com/embed/bTZkqVq29wQ",
  //     },
  //     {
  //       id: 1,
  //       title: "An Interpretation of BBB 1695",
  //       description: (
  //         <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
  //           <p>September 11th, 2023 - October 2nd, 2023</p>
  //           <p>
  //             BBB 1695 is a room in the Bob and Betty Beyster Building. It has
  //             since been renovated, but its likeness will forever be preserved in
  //             this VR project. Using Unreal Engine 5, I recreated BBB 1695 and
  //             designed playful interactive events using custom objects, materials,
  //             and scripting. Depending on whether the user successfully finishes
  //             their tasks, the experience shifts from a celebratory fireworks
  //             scene or to a chaotic cascade of falling ducks and destruction.
  //           </p>
  //         </div>
  //       ),
  //       embedUrl: "https://www.youtube.com/embed/WHz7r5i27os",
  //     },
  //     {
  //       id: 2,
  //       title: "A2GO",
  //       description: (
  //         <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
  //           <p>October 4th, 2023 - October 30th, 2023</p>
  //           <p>
  //             For this project, I created a campus-based experience inspired by
  //             Pokémon Go, where landmarks represented notable locations around the
  //             University of Michigan campus. Through this project, I learned to
  //             manage complex tasks by breaking the project into smaller,
  //             achievable goals, and gained hands-on experience creating and
  //             managing scripts, switching between scenes, and handling data
  //             efficiently in Unity.
  //           </p>
  //         </div>
  //       ),
  //       embedUrl: "https://www.youtube.com/embed/xhZO8VmhIwE",
  //     },
  //     {
  //       id: 3,
  //       title: "VR Magic Show",
  //       description:
  //         "Just a simple magic show using basic Unreal Engine 5 blueprinting!",
  //       embedUrl: "https://www.youtube.com/embed/dTg96kWUarA",
  //     },
  //   ];

  return (
    // <VideoShowcaseTemplate
    //   tools={tools}
    //   videos={videos}
    //   //   tabTitle="Tools & Projects"
    // />
    <TemplateShowcase tabData={tabData} />
  );
}
