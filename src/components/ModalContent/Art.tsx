import TemplateShowcase from "./MediaShowcase";

// Digital Art Assets
import Symmetryfinal from "../../assets/art/Symmetryfinal.jpg";
import GirlAndFlyingPlatypus from "../../assets/art/Girl and City.jpg";
import UncleSam from "../../assets/art/Uncle Sam Devouring World Final.jpg";
import FirstPanel from "../../assets/art/First panel.jpg";
import SecondPanel from "../../assets/art/Second Panel.jpg";
import ThirdPanel from "../../assets/art/Third Panel.jpg";
import FourthPanel from "../../assets/art/Fourth Panel.jpg";
import google from "../../assets/art/google.jpg";
import CutPaper from "../../assets/art/CutPaper.jpg";
import ScreenPrint from "../../assets/art/Screen Print.jpg";
// Traditional Art Assets
import BackyardAnimals from "../../assets/art/BackyardAnimals.png";
import WomanWaterfall from "../../assets/art/WomanWaterfall.png";

// Doodles
import fish_doodles482 from "../../assets/art/fish_doodles482.png";
import doodle1 from "../../assets/art/doodles/IMG_3311.jpg";
import doodle2 from "../../assets/art/doodles/IMG_3312.jpg";
import doodle3 from "../../assets/art/doodles/IMG_3313.jpg";
import doodle4 from "../../assets/art/doodles/IMG_3314.jpg";
import doodle5 from "../../assets/art/doodles/IMG_3315.jpg";
import doodle6 from "../../assets/art/doodles/IMG_3317.jpg";

export default function Art() {
  const tabData = [
    {
      name: "Digital",
      tools: ["Procreate", "Photoshop", "Illustrator"],
      images: [
        {
          id: 0,
          imgSrc: CutPaper,
        },
        {
          id: 1,
          imgSrc: Symmetryfinal,
        },
        {
          id: 2,
          imgSrc: GirlAndFlyingPlatypus,
        },
        {
          id: 3,
          imgSrc: UncleSam,
        },
        { id: 4, imgSrc: google, height: 150 },
        {
          id: 5,
          imgSrc: ScreenPrint,
        },
        {
          id: 6,
          imgSrc: FirstPanel,
        },
        {
          id: 7,
          imgSrc: SecondPanel,
        },
        {
          id: 8,
          imgSrc: ThirdPanel,
        },
        {
          id: 9,
          imgSrc: FourthPanel,
        },
      ],
    },
    {
      name: "Paintings",
      tools: ["Acrylic"],
      images: [
        {
          id: 10,
          imgSrc: BackyardAnimals,
        },
        {
          id: 11,
          imgSrc: WomanWaterfall,
        },
      ],
    },
    {
      name: "Doodles",

      images: [
        {
          id: 18,
          imgSrc: doodle6,
        },
        {
          id: 12,
          imgSrc: fish_doodles482,
        },
        {
          id: 13,
          imgSrc: doodle1,
        },
        {
          id: 14,
          imgSrc: doodle2,
        },
        {
          id: 15,
          imgSrc: doodle3,
        },
        {
          id: 16,
          imgSrc: doodle4,
        },
        {
          id: 17,
          imgSrc: doodle5,
        },
      ],
    },
  ];

  return <TemplateShowcase tabData={tabData} />;
}
