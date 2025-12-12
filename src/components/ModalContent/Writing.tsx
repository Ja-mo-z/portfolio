import PDFTabShowcase from "./Templates/PDFTabShowcase";
const tabs = [
  {
    name: "Stories",
    documents: [
      {
        id: 4,
        title: "Why We Eat - WIP",
        description: (
          <div className="">
            <p>
              The first few pages of a story about a girl chasing an unreliable
              hero, carried forward by her hunger — both literal and emotional —
              as she searches for a place to belong. I want to explore themes of
              greed, family, and misplaced obsession.{" "}
            </p>
          </div>
        ),
        url: "pdfs/Why We Eat.pdf",
      },
      {
        id: 0,
        title: "Had A Farm",
        description: (
          <div>
            <p>
              Old MacDonald{" "}
              <i>
                <b>had</b>
              </i>{" "}
              a Farm. Hmmm, why the past tense?
            </p>
          </div>
        ),
        url: "pdfs/HadFarm.pdf",
      },
      {
        id: 1,
        title: "The Start of a World",
        description: (
          <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            {" "}
            <p>
              In <strong>“Start of a World”</strong>, I wanted to twist the
              common trope of trying to prevent the end of the world into trying
              to prevent the start of one. The God in “The Start of a World”
              wants to break out of the cycle of rebirth and redeath, while the
              planet desperately wants to live again.
            </p>
            <p>
              This was based on{" "}
              <strong>
                <a
                  href="https://www.youtube.com/watch?v=h6fcK_fRYaI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  The Egg
                </a>
              </strong>
              , which is a theory about life that essentially boils down to: you
              are everyone and everything that has existed and will ever exist;
              the only beings in this world are you and your God.
            </p>
          </div>
        ),
        url: "pdfs/StartWorld.pdf",
      },

      {
        id: 2,
        title: "I See You",
        description: (
          <div className="h-24 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            <p>
              I wrote this book when I was 16. The only idea I remember clearly
              is that I wanted it to begin with a funeral and end with a
              wedding. It’s been more than five years, though, so I’ve forgotten
              the actual plot. I briefly skimmed through it before putting it
              here, and I can confidently tell you that as a 16 year old, I was
              really really ...
            </p>
            <p>... not Mary Shelley.</p>
            <p>
              Nevertheless, I’m proud of it, simply because getting through the
              first draft is sometimes the hardest part of the process — and I
              got through it, however poorly planned and unedited it is. If you
              deign to read it, watch out for iffy grammar and plot holes.
            </p>
          </div>
        ),
        url: "pdfs/ISeeYou.pdf",
      },
    ],
  },

  {
    name: "Essays",
    documents: [
      {
        id: 0,
        title: "Historical Image Colorization",
        description:
          "A research paper done on a method of converting black-and-white images into colored ones using neural networks.",
        url: "pdfs/442.pdf",
      },
      {
        id: 1,
        title: "Locked in Place",
        description:
          "Analysis of Flannery O’Connor’s A Good Man is Hard to Find and how it explores entrenched hierarchies, systemic injustices, and stagnant societal norms.",
        url: "pdfs/locked_in_place.pdf",
      },
      {
        id: 2,
        title: "A Snapshot of the Camera",
        description:
          "An introductory guide to understanding the fundamental concepts and techniques of the Exposure Triangle.",
        url: "pdfs/camera_basics.pdf",
      },
      // {
      //   id: 3,
      //   title: "Alcohol and Dopamine",
      //   description:
      //     "An exploration of the relationship between alcohol consumption and dopamine levels in the brain.",
      //   url: "pdfs/alcohol_and_dopamine.pdf",
      // },
    ],
  },
  {
    name: "Copywriting",
    documents: [
      {
        id: 0,
        title: "POP IT",
        description:
          "A hypothetical commercial for PopSocket written in AV script format.",
        url: "pdfs/PopIt.pdf",
      },
    ],
  },
];

export default function WritingTab() {
  return <PDFTabShowcase tabData={tabs} />;
}
