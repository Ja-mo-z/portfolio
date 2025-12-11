import PDFTabShowcase from "./PDFTabShowcase";
const tabs = [
  {
    name: "Stories",
    documents: [
      {
        id: 0,
        title: "The Start of a World",
        description: (
          <div className="h-12 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            {" "}
            <p>
              In <strong>“Start of a World”</strong>, I wanted to twist the
              common trope of trying to prevent the end of the world into trying
              to prevent the start of one. The God in “Start of a World” wants
              to break out of the cycle of rebirth and redeath, while the planet
              desperately wants to live again.
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
        id: 1,
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
        id: 2,
        title: "I See You",
        description: (
          <div className="h-12 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            <p>
              I wrote this book when I was 16. The only idea I remember clearly
              is that I wanted it to begin with a funeral and end with a
              wedding. It’s been more than five years, though, so I’ve forgotten
              most of it. I briefly skimmed through it before putting it here,
              and I can confidently tell you that as a 16 year old, I was really
              really … not Mary Shelley.
            </p>
            <p>
              Nevertheless, I’m proud of it, simply because getting through the
              first draft is sometimes the hardest part of the process — and I
              got through it, however poorly planned and unedited it is. If you
              deign to read it, watch out for iffy grammar and plot holes.
            </p>
          </div>
        ),
        url: "pdfs/HadFarm.pdf",
      },
    ],
  },

  {
    name: "Essays",
    documents: [
      {
        id: 0,
        title: "Coloring Historical Pictures",
        description:
          "A research paper done on a method of converting black-and-white images into colored ones using neural networks.",
        url: "pdfs/442.pdf",
      },
      {
        id: 1,
        title: "The Impact of Social Media on Mental Health",
        description:
          "Analysis of Flannery O’Connor’s A Good Man is Hard to Find and how it explores entrenched hierarchies, systemic injustices, and stagnant societal norms.",
        url: "pdfs/mental_health.pdf",
      },
    ],
  },
  {
    name: "Copywriting",
    documents: [
      {
        id: 0,
        title: "Pop it, Lock it",
        description:
          "A hypothetical commercial for PopSocket written in AV script format.",
        url: "pdfs/product_descriptions.pdf",
      },
    ],
  },
];

export default function WritingTab() {
  return <PDFTabShowcase tabData={tabs} />;
}
