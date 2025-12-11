import PDFTabShowcase from "./PDFTabShowcase";
const tabs = [
  {
    name: "Scripts",
    documents: [
      {
        id: 0,
        title: "Script 1",
        description: "First script PDF.",
        url: "/pdfs/script1.pdf",
      },
      {
        id: 1,
        title: "Script 2",
        description: "Second script PDF.",
        url: "/pdfs/script2.pdf",
      },
    ],
  },
  {
    name: "Stories",
    documents: [
      {
        id: 0,
        title: "Story 1",
        description: "Short story PDF.",
        url: "/pdfs/story1.pdf",
      },
    ],
  },
  {
    name: "Essays",
    documents: [
      {
        id: 0,
        title: "Coloring Historical Pictures",
        description: "Essay PDF.",
        url: "/pdfs/442_final_proj.pdf",
      },
    ],
  },
];

export default function WritingTab() {
  return <PDFTabShowcase tabData={tabs} />;
}
