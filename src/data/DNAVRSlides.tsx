import Carousel from "../components/ModalContent/Templates/Carousel";

// import Slide00 from "../assets/design/EECS 498 P3 Tutorial Slides/00 Inventory Info.png";
// import Slide01 from "../assets/design/EECS 498 P3 Tutorial Slides/01 Left controller.png";
// import Slide02 from "../assets/design/EECS 498 P3 Tutorial Slides/02 Left controller.png";
// import Slide03 from "../assets/design/EECS 498 P3 Tutorial Slides/03 Left controller.png";
// import Slide04 from "../assets/design/EECS 498 P3 Tutorial Slides/04 Transcription Intro.png";
// import Slide05 from "../assets/design/EECS 498 P3 Tutorial Slides/05 Nucleotide Task 5.png";
import Slide06 from "../assets/design/EECS 498 P3 Tutorial Slides/06 Adenine.png";
import Slide07 from "../assets/design/EECS 498 P3 Tutorial Slides/07 Thymine.png";
import Slide08 from "../assets/design/EECS 498 P3 Tutorial Slides/08 Guanine.png";
import Slide09 from "../assets/design/EECS 498 P3 Tutorial Slides/09 Cytosine.png";
import Slide10 from "../assets/design/EECS 498 P3 Tutorial Slides/10 Uracil.png";
// import Slide11 from "../assets/design/EECS 498 P3 Tutorial Slides/11 Nucleotide Task 6.png";
import Slide12 from "../assets/design/EECS 498 P3 Tutorial Slides/12 Translation Info.png";
import Slide13 from "../assets/design/EECS 498 P3 Tutorial Slides/13 mRNA.png";
import Slide14 from "../assets/design/EECS 498 P3 Tutorial Slides/14 mRNA.png";
import Slide15 from "../assets/design/EECS 498 P3 Tutorial Slides/15 Ribosomes.png";
// import Slide17 from "../assets/design/EECS 498 P3 Tutorial Slides/17 tRNA task.png";
import Slide18 from "../assets/design/EECS 498 P3 Tutorial Slides/18 tRNA.png";
import Slide20 from "../assets/design/EECS 498 P3 Tutorial Slides/20 DNA.png";
import Slide21 from "../assets/design/EECS 498 P3 Tutorial Slides/21 Protein info.png";
import Slide22 from "../assets/design/EECS 498 P3 Tutorial Slides/22 Protein packaging task.png";
// import Slide23 from "../assets/design/EECS 498 P3 Tutorial Slides/23 Protein task.png";
import Slide24 from "../assets/design/EECS 498 P3 Tutorial Slides/24 Transport Protein.png";
import Slide25 from "../assets/design/EECS 498 P3 Tutorial Slides/25 Protein.png";
// import Slide26 from "../assets/design/EECS 498 P3 Tutorial Slides/26 Protein task.png";
// import Slide27 from "../assets/design/EECS 498 P3 Tutorial Slides/27 Continue.png";
// import Slide28 from "../assets/design/EECS 498 P3 Tutorial Slides/28 Virus info.png";
// import Slide29 from "../assets/design/EECS 498 P3 Tutorial Slides/29 Virus task.png";
import Slide30 from "../assets/design/EECS 498 P3 Tutorial Slides/30 Virus 2.png";
// import Slide31 from "../assets/design/EECS 498 P3 Tutorial Slides/31 Virus continue.png";
import Slide32 from "../assets/design/EECS 498 P3 Tutorial Slides/32 Lysosome.png";
import Slide33 from "../assets/design/EECS 498 P3 Tutorial Slides/33 Nucleus.png";
import Slide34 from "../assets/design/EECS 498 P3 Tutorial Slides/34 Endoplasmic reticulum.png";
import Slide35 from "../assets/design/EECS 498 P3 Tutorial Slides/35 Golgi apparatus.png";
import Slide36 from "../assets/design/EECS 498 P3 Tutorial Slides/36 Suspicious organelles.png";
import Slide37 from "../assets/design/EECS 498 P3 Tutorial Slides/37 Mitochondria.png";

const EECS498Carousel = [
  // { id: 0, imgSrc: Slide00 },
  // { id: 1, imgSrc: Slide01 },
  // { id: 2, imgSrc: Slide02 },
  // { id: 3, imgSrc: Slide03 },
  // { id: 4, imgSrc: Slide04 },
  // { id: 5, imgSrc: Slide05 },
  { id: 6, imgSrc: Slide06 },
  { id: 7, imgSrc: Slide07 },
  { id: 8, imgSrc: Slide08 },
  { id: 9, imgSrc: Slide09 },
  { id: 10, imgSrc: Slide10 },
  // { id: 11, imgSrc: Slide11 },
  { id: 12, imgSrc: Slide12 },
  { id: 13, imgSrc: Slide13 },
  { id: 14, imgSrc: Slide14 },
  { id: 15, imgSrc: Slide15 },
  // { id: 16, imgSrc: Slide17 },
  { id: 17, imgSrc: Slide18 },
  { id: 18, imgSrc: Slide20 },
  { id: 19, imgSrc: Slide21 },
  { id: 20, imgSrc: Slide22 },
  // { id: 21, imgSrc: Slide23 },
  { id: 22, imgSrc: Slide24 },
  { id: 23, imgSrc: Slide25 },
  // { id: 24, imgSrc: Slide26 },
  // { id: 25, imgSrc: Slide27 },
  // { id: 26, imgSrc: Slide28 },
  // { id: 27, imgSrc: Slide29 },
  { id: 28, imgSrc: Slide30 },
  // { id: 29, imgSrc: Slide31 },
  { id: 30, imgSrc: Slide32 },
  { id: 31, imgSrc: Slide33 },
  { id: 32, imgSrc: Slide34 },
  { id: 33, imgSrc: Slide35 },
  { id: 34, imgSrc: Slide36 },
  { id: 35, imgSrc: Slide37 },
];

export const DNAVRSlides = {
  id: 100,
  description:
    "A few of the DNAVR tutorial slides explaining transcription, translation, and cellular processes.",
  imgSrc: <Carousel images={EECS498Carousel} />,
};
