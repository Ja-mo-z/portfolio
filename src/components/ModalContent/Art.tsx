import TemplateShowcase from "./MediaShowcase";
import fish_doodles482 from "../../assets/art/fish_doodles482.png";
import Symmetryfinal from "../../assets/art/Symmetryfinal.jpg";
import GirlAndFlyingPlatypus from "../../assets/art/Girl and City.jpg";
import UncleSam from "../../assets/art/Uncle Sam Devouring World Final.jpg";
import FirstPanel from "../../assets/art/First panel.jpg";
import SecondPanel from "../../assets/art/Second Panel.jpg";
import ThirdPanel from "../../assets/art/Third Panel.jpg";
import FourthPanel from "../../assets/art/Fourth Panel.jpg";

export default function Art() {
  const tabData = [
    {
      name: "Digital",
      tools: ["Procreate", "Photoshop", "Illustrator"],
      images: [
        {
          id: 0,
          imgSrc: Symmetryfinal,
        },
        {
          id: 1,
          imgSrc: GirlAndFlyingPlatypus,
        },
        {
          id: 2,
          imgSrc: UncleSam,
        },
        {
          id: 3,
          imgSrc: FirstPanel,
        },
        {
          id: 4,
          imgSrc: SecondPanel,
        },
        {
          id: 5,
          imgSrc: ThirdPanel,
        },
        {
          id: 6,
          imgSrc: FourthPanel,
        },
      ],
    },
    {
      name: "Paintings",
      tools: ["Acrylic"],
      images: [
        {
          id: 7,
          title: "Animals in My Backyard",
          imgSrc: FourthPanel,
        },
        {
          id: 8,
          title: "Animals in My Backyard",
          imgSrc: FourthPanel,
        },
      ],
    },
    {
      name: "Doodles",

      images: [
        {
          id: 9,
          imgSrc: fish_doodles482,
        },
      ],
    },
  ];

  return <TemplateShowcase tabData={tabData} />;
}
