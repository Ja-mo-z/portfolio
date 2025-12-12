import MediaShowcase from "./Templates/MediaShowcase";
export default function Design() {
  const tabData = [
    {
      name: "Brand",
      tools: ["Inkscape", "Figma", "Adobe Color"],
    },
    {
      name: "Graphic",
      tools: ["Procreate", "Canva", "Illustrator", "Photoshop"],
    },
    {
      name: "Web",
      tools: ["Figma", "Framer"],
    },
  ];
  return <MediaShowcase tabData={tabData} />;
}
