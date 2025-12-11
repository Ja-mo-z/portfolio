import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import VideoShowcaseTab from "./VideoShowcaseTemplate";
import VideoShowcaseTemplate from "./VideoShowcaseTemplate";

export default function FilmVideo() {
  const tools = [
    "Davinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Panasonic Lumix",
    "Black Magic Pocket 4k",
    "DJI Mini 3",
  ];
  const videos = [
    {
      id: 0,
      title: "Saved",
      description: (
        <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          This was the first film I worked on with the amazing director Tianyi
          Zhai! I served as the Director of Photography, which meant I was
          behind the camera - and also the one figuring out how to fly a DJI
          drone for the very first time. I broke two propellers during my
          initial practice run. Despite the rocky start, capturing the aerial
          shot of the bridge and water that Evelyn looks out over became one of
          my favorite visual contributions to the film and a major learning
          moment for me.
        </div>
      ),
      embedUrl: "https://videopress.com/embed/qqwW4dOr",
    },
    {
      id: 1,
      title: "Swallows Under Eave",
      description: (
        <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          <p>
            Forever grateful to work with Tianyi again! For this project, I was
            the script supervisor. This role was perhaps one of the hardest
            things I’ve ever had to do on a film set because it requires acute
            attention to detail.{" "}
          </p>
          <p>
            As script supervisor, I had to constantly be on the lookout,
            ensuring continuity across different shots and scenes. Did the
            actress reach with her left hand or right hand when we were filming
            this scene from a different angle? How did she deliver her lines?
            What did her hair look like?
          </p>
          <p>
            After this experience, I’ve become more attentive to little details
            while watching shows or movies, and have gained a new appreciation
            for script supervisors. Kudos to those doing it professionally!
          </p>
        </div>
      ),
      embedUrl: "https://videopress.com/v/YbqlkeWm ",
    },
    {
      id: 2,
      title: "Unfashionable",
      description: (
        <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          <p>
            Short description: The creative process of an STAMPS student
            attending the University of Michigan.
          </p>
          <p>
            This project was half an excuse for me to catch up with my friend,
            Sonia Xiang! Beyond that, I really, really wanted to dig deeper into
            other people’s artistic minds. Throughout the filming, I was really
            inspired by her resourcefulness and ideas. For one part of the
            costume, she scavenged trash bags from the STAMPS building and
            essentially melted them down into the shapes she wanted to form.{" "}
          </p>
          <p>
            I hope I gave her process and personality the justice it deserves in
            the video. I wanted to collaborate again the next year, but
            unfortunately she’d moved away. It was so nice to meet up with her
            and chat as she worked on her assignment, so next time we’re in the
            same area, I hope we can work on something together again!
          </p>
        </div>
      ),
      embedUrl: "https://www.youtube.com/embed/F8RrV07Aj9c?si=EIBuKB7CxR9C39wG",
    },
    {
      id: 3,
      title: "The Shortcut",
      description: (
        <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          <p>
            The Detroit 48-Hour Film Festival is a rapid-fire filmmaking
            competition where teams write, shoot, and edit an entire short film
            in just two days. I worked as a production assistant, which meant
            supporting the crew wherever needed. That could look like setting up
            equipment, managing the schedule, and helping the shoot run smoothly
            under an extremely tight timeline.
          </p>
          <p>
            What I remember most from the experience? An incredible location and
            an even more incredible team … paired with an incredible number of
            mosquito bites. So, so, <i>so</i> many bloodsucking mosquitos. We
            filmed at the height of summer in a forest beside a barn with only
            two working cans of bug spray, so we literally delivered ourselves
            like a Doordash meal. Despite that, it was a fun, fast-paced
            introduction to on-set production and collaboration.
          </p>
        </div>
      ),
      embedUrl: "https://www.youtube.com/embed/FSs-OHM0Qlo",
    },
    {
      id: 4,
      title: "Kazuhiro Soda Interview",
      description: (
        <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          <p>
            “WOLV-TV Spotlight” is part of the University of Michigan’s
            WOLV-TV’s interview program. Each episode features conversations
            with influential figures across the broader entertainment world.
          </p>
          <p>
            In this episode, Alexander Marshall sat down with Peabody
            Award–winning Japanese documentary filmmaker Soda Kazuhiro, known
            for his observational style and acclaimed works such as Campaign and
            Mental.{" "}
          </p>
          <p>
            I was one of the camera operators and editor for this episode.
            Honestly, I was so impressed by not only Soda Kazuhiro’s career and
            documentary philosophy, but also Alex’s interviewing skills. As
            someone who’s on the shyer side, with about five overlapping trains
            of thought during any given conversation, I really admire the ease
            and clarity Alex brings to an interview. It’s something I hope to
            grow into myself … one day.
          </p>
        </div>
      ),
      embedUrl: "https://www.youtube.com/embed/ch3ip54nSbw",
    },
    {
      id: 5,
      title: "Introducing CLAWS",
      description: (
        <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          <p>
            Every production has its own story, and this one was no exception.
            At the time of filming, CLAWS had eight subteams and nine subteam
            leads, which is no small coordination effort. My initial proposal
            was to film B-roll and have our project manager narrate, but the PM
            felt strongly that every lead should appear on camera.
          </p>
          <p>
            The only time everyone was available happened to be the night before
            our NASA SUITS submission deadline, so I invested heavily in
            pre-production to keep things running smoothly. I drafted the script
            early, tested the filming setup in advance, and worked out a
            preliminary edit to guide the final cut.
          </p>
          <p>
            Editing was my biggest challenge. I anticipated it would take longer
            than anticipated, and my computer at the time struggled to handle
            the footage. I often couldn’t see the true quality of a sequence
            until exporting, which itself was a long process.
          </p>
          <p>
            Despite the tight turnaround and technical limitations, I’m proud of
            how the final video came together and how effectively it represents
            the breadth of work across all our subteams. If you want to see what
            I did for CLAWS's social media accounts, check out the Social Media
            Marketing planet!{" "}
          </p>
        </div>
      ),
      embedUrl: "https://www.youtube.com/embed/WzRxykvbU1w",
    },
  ];

  return <VideoShowcaseTemplate tools={tools} videos={videos} />;
}
