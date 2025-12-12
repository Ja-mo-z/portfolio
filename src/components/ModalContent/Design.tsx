import MediaShowcase from "./Templates/MediaShowcase";
import Carousel from "./Templates/Carousel";

// Individual images
import AndyWarhog from "@/assets/design/graphic design/Andy Warhog.png";
import CameraBasics from "@/assets/design/graphic design/Camera Basics.png";
import Debugged from "@/assets/design/graphic design/debugged.png";
import Finalfeesh2 from "@/assets/design/graphic design/Finalfeesh2.png";
import JamieDragon from "@/assets/design/graphic design/JamieZhou_dragon.jpg";
import JamieFish from "@/assets/design/graphic design/JamieZhou_fishshirt.jpg";
import Salt from "@/assets/design/graphic design/salt.png";
import ShapeWoman from "@/assets/design/graphic design/Shape Woman.png";
import Tide from "@/assets/design/graphic design/tide.png";

// Mango images for carousel
import Mango1 from "@/assets/design/graphic design/Mango City 1.png";
import Mango2 from "@/assets/design/graphic design/Mango City 2.png";
import Mango3 from "@/assets/design/graphic design/Mango City 3.png";

const MangoCarousel = [
  { id: 1, imgSrc: Mango1, title: "Mango City 1" },
  { id: 2, imgSrc: Mango2, title: "Mango City 2" },
  { id: 3, imgSrc: Mango3, title: "Mango City 3" },
];

// Film Noir images
import FN1 from "@/assets/design/web/Film Noir/Starting Page 1.png";
import FN2 from "@/assets/design/web/Film Noir/Starting Page 2.png";
import FN3 from "@/assets/design/web/Film Noir/Starting Page 3.png";

const FilmNoirCarousel = [
  { id: 1, imgSrc: FN1, title: "Starting Page 1" },
  { id: 2, imgSrc: FN2, title: "Starting Page 2" },
  { id: 3, imgSrc: FN3, title: "Starting Page 3" },
];

// Fibarcode prototype images
import F01 from "@/assets/design/Fibarcode/Fibarcode prototype/01 Cover.png";
import F02 from "@/assets/design/Fibarcode/Fibarcode prototype/02 Table of Contents.png";
import F03 from "@/assets/design/Fibarcode/Fibarcode prototype/03 transition page.png";
import F04 from "@/assets/design/Fibarcode/Fibarcode prototype/04 Introduction.png";
import F05 from "@/assets/design/Fibarcode/Fibarcode prototype/05 transition page.png";
import F06 from "@/assets/design/Fibarcode/Fibarcode prototype/06 Logos - symbol.png";
import F07 from "@/assets/design/Fibarcode/Fibarcode prototype/07 Logos - horizontal.png";
import F08 from "@/assets/design/Fibarcode/Fibarcode prototype/08 Logos - vertical.png";
import F09 from "@/assets/design/Fibarcode/Fibarcode prototype/09 transition page.png";
import F10 from "@/assets/design/Fibarcode/Fibarcode prototype/10 Color.png";
import F11 from "@/assets/design/Fibarcode/Fibarcode prototype/11 Color - examples.png";
import F12 from "@/assets/design/Fibarcode/Fibarcode prototype/12 transition page.png";
import F13 from "@/assets/design/Fibarcode/Fibarcode prototype/13 Typography - Lovelo.png";
import F14 from "@/assets/design/Fibarcode/Fibarcode prototype/14 Typography - Noto Sans.png";
import F15 from "@/assets/design/Fibarcode/Fibarcode prototype/15 Typography - Example.png";

const FibarcodePrototype = [
  { id: 1, imgSrc: F01, title: "Cover" },
  { id: 2, imgSrc: F02, title: "Table of Contents" },
  { id: 3, imgSrc: F03, title: "Transition Page 1" },
  { id: 4, imgSrc: F04, title: "Introduction" },
  { id: 5, imgSrc: F05, title: "Transition Page 2" },
  { id: 6, imgSrc: F06, title: "Logo - Symbol" },
  { id: 7, imgSrc: F07, title: "Logo - Horizontal" },
  { id: 8, imgSrc: F08, title: "Logo - Vertical" },
  { id: 9, imgSrc: F09, title: "Transition Page 3" },
  { id: 10, imgSrc: F10, title: "Color Palette" },
  { id: 11, imgSrc: F11, title: "Color Examples" },
  { id: 12, imgSrc: F12, title: "Transition Page 4" },
  { id: 13, imgSrc: F13, title: "Typography - Lovelo" },
  { id: 14, imgSrc: F14, title: "Typography - Noto Sans" },
  { id: 15, imgSrc: F15, title: "Typography Example" },
];
// Fibarcode static images
import FBarcode from "@/assets/design/Fibarcode/fibarcode barcode.png";
import FOrigin from "@/assets/design/Fibarcode/Fibarcode Origin.png";
import FRotated from "@/assets/design/Fibarcode/Rotated logos.png";
export default function Design() {
  const tabData = [
    {
      name: "Brand",
      tools: ["Inkscape", "Figma", "Adobe Color"],
      subheading: (
        <div>
          <p>
            This was what I started with: a single slide of inspiration,
            provided by the founder.
          </p>
          <p>
            I led a full brand and content build for Fibarcode, creating the
            visual identity, messaging, logo, brand guidelines, and a product
            video—all within a fast-paced 90-hour turnaround. My goal was to
            clarify their product story across web and social while establishing
            a cohesive, memorable brand.
          </p>
          <p>
            For the logo, I explored concepts rooted in textiles, technology,
            and sustainability. The final design combines fiber strands and
            barcode elements through simplified linework. I iterated on line
            density, spacing, and form—aligning three segments into a structure
            inspired by a fabric cross-section, adding a slight tilt for energy,
            and softening the design with rounded line ends.
          </p>
          <p>
            To improve product clarity, I proposed visually splitting the name
            as Fibar-code, highlighting the “fiber” aspect. The identity uses a
            black-and-white base with warm reds and oranges added per the
            founder’s request. I also created a brand guide covering color
            usage, typography (Lovelo paired with Noto Sans), and layout
            principles.
          </p>
          <div className="border-t-1 border-white/70 my-2" />
        </div>
      ),
      images: [
        {
          id: 2,
          title: "Fibarcode Barcode",
          imgSrc: FBarcode,
        },
        {
          id: 3,
          title: "Fibarcode Origin",
          imgSrc: FOrigin,
        },
        {
          id: 4,
          title: "Rotated Logos",
          imgSrc: FRotated,
        },
        {
          id: 1,
          title: "Fibarcode Brand Guidelines",
          imgSrc: <Carousel images={FibarcodePrototype} />,
          width: 400,
          height: 250,
        },
      ],
    },

    {
      name: "Graphic Design",
      subheading: (
        <div>
          <p>
            A selection of my personal and school projects, including
            illustrations, digital paintings, and visual experiments.
          </p>
          <div className="border-t-1 border-white/70 my-2" />
        </div>
      ),
      images: [
        { id: 1, imgSrc: AndyWarhog, title: "Andy Warhog" },
        { id: 2, imgSrc: CameraBasics, title: "Camera Basics" },
        { id: 3, imgSrc: Debugged, title: "Debugged" },
        { id: 4, imgSrc: Finalfeesh2, title: "Finalfeesh2" },
        { id: 5, imgSrc: JamieDragon, title: "Dragon Shirt" },
        { id: 6, imgSrc: JamieFish, title: "Fish Shirt" },
        {
          id: 7,
          title: "Mango City Series",
          imgSrc: <Carousel images={MangoCarousel} />,
          width: 256,
          height: 256,
        },
        { id: 8, imgSrc: Salt, title: "Salt" },
        { id: 9, imgSrc: ShapeWoman, title: "Shape Woman" },
        { id: 10, imgSrc: Tide, title: "Tide" },
      ],
    },
    {
      name: "Web",
      tools: ["Figma", "Framer"],
      images: [
        {
          id: 1,
          title: "Film Noir Project",
          imgSrc: <Carousel images={FilmNoirCarousel} />,
          width: 400,
          height: 250,
        },
      ],
    },
  ];
  return <MediaShowcase tabData={tabData} />;
}
