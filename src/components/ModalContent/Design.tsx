import MediaShowcase from "./Templates/MediaShowcase";
import Carousel from "./Templates/Carousel";
import HoverZoom from "./Templates/HoverZoom";

// DNAVR Tutorial Slides
import { DNAVRSlides } from "../../data/DNAVRSlides";

// Individual images
import AndyWarhog from "@/assets/design/graphic design/Andy Warhog.png";
import Finalfeesh2 from "@/assets/design/graphic design/Finalfeesh2.png";
import DragonFruitShirt from "@/assets/design/graphic design/Dragon Fruit Shirt.png";
import FishShirt from "@/assets/design/graphic design/JamieZhou_fishshirt.jpg";
import Salt from "@/assets/design/graphic design/salt.png";
import ShapeWomanShirt from "@/assets/design/graphic design/ShapeWomanShirt.png";

// Mango images for carousel
import Mango1 from "@/assets/design/graphic design/Mango City 1.png";
import Mango2 from "@/assets/design/graphic design/Mango City 2.png";
import Mango3 from "@/assets/design/graphic design/Mango City 3.png";

const MangoCarousel = [
  { id: 1, imgSrc: Mango1, title: "Mango City 1" },
  { id: 2, imgSrc: Mango2, title: "Mango City 2" },
  { id: 3, imgSrc: Mango3, title: "Mango City 3" },
];

// Shirts
const shirts = [
  {
    id: 1,
    imgSrc: DragonFruitShirt,
    title: "Dragon Fruit Shirt",
    hoverZoom: true,
  },
  { id: 2, imgSrc: FishShirt, title: "Fish Shirt", hoverZoom: true },
  {
    id: 3,
    imgSrc: ShapeWomanShirt,
    title: "Shape Woman Shirt",
    hoverZoom: true,
  },
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
import FRotated from "@/assets/design/Fibarcode/Rotated logos.png";
import FBOutlines from "@/assets/design/Fibarcode/Frame 15.png";
import FBLogo from "@/assets/design/Fibarcode/fibarcode_logo.jpeg";
import FBOldLogo from "@/assets/design/Fibarcode/OldLogo.png";

// CLAWS
import Vitals from "@/assets/design/Web/CLAWS/Vitals.jpg";
import VitalsWarning from "@/assets/design/Web/CLAWS/Vitals Warning and Notification.jpg";
import VitalsWarning1 from "@/assets/design/Web/CLAWS/Vitals Warning and Notification-1.jpg";

export const clawsImages = [
  { id: 1, imgSrc: Vitals, title: "Vitals" },
  { id: 2, imgSrc: VitalsWarning, title: "Vitals Warning & Notification" },
  {
    id: 3,
    imgSrc: VitalsWarning1,
    title: "Vitals Warning & Notification (Alt)",
  },
];

export default function Design() {
  const tabData = [
    {
      name: "Brand",
      tools: ["Inkscape", "Figma", "Adobe Color"],
      subheading: (
        <div>
          <p className="text-indigo-300 font-bold text-sm mb-2">Fibarcode</p>
          <p>
            Fibarcode is a startup, founded by Brian Iezzi, that's trying to
            make labels and textiles more sustainable using photonic fibers as
            permanent barcodes.
          </p>

          <div className="border-t-1 border-white/70 my-2" />
        </div>
      ),
      images: [
        {
          id: 3,

          imgSrc: FBOldLogo,
          height: 80,
          description: (
            <div>
              <p>This was the old Fibarcode logo.</p>
              <br />
              <p>
                I was tasked with redesigning the logo. Eventually, I led a full
                brand and content build for Fibarcode, creating the visual
                identity, messaging, logo, brand guidelines, and a product video
                — all within a fast-paced 90-hour turnaround. Explore the
                Animation planet to see the product video!
              </p>
            </div>
          ),
        },
        {
          id: 2,

          description: (
            <div>
              <p>
                To redesign the logo, I explored concepts rooted in textiles,
                technology, and sustainability. I eventually decided on building
                the logo up from an actual barcode.
              </p>
            </div>
          ),
          imgSrc: FBarcode,
          height: 80,
        },

        {
          id: 4,
          imgSrc: <HoverZoom src={FRotated} />,
          description: (
            <div>
              <p>
                I took sections of the barcode and experimented with rotating
                the logo to create dynamic compositions that suggest movement
                and adaptability, reflecting the innovative nature of
                Fibarcode's technology.
              </p>
            </div>
          ),
          //   height: 200,
        },
        {
          id: 6,
          imgSrc: FBLogo,
          width: 100,
          description: (
            <div>
              <p>
                The final design combines fiber strands and barcode elements
                through simplified linework. I iterated on line density,
                spacing, and form. I settled on a clean, modern look with the
                minimal of three lines per section.
              </p>
              <br />
              <p>
                I aligned those three segments into a structure inspired by a
                fabric cross-section, adding a slight tilt for energy and
                softening the design by rounding the ends of the lines.
              </p>
            </div>
          ),
        },
        {
          id: 5,
          imgSrc: <HoverZoom src={FBOutlines} width="400px" height="200px" />,
          //   imgSrc: (
          //     <img src={FBOutlines} style={{ height: "auto", width: "auto" }} />
          //   ),
          description: (
            <div>
              <p>
                As for the text, I proposed visually splitting the name as
                Fibar-code, highlighting the “fiber” and "code" aspects on each
                side. The identity uses a black-and-white base to reflect the
                "barcode" concept.
              </p>
            </div>
          ),
        },
        {
          id: 1,
          title: "Fibarcode Brand Guidelines",
          imgSrc: <Carousel images={FibarcodePrototype} />,
          description: (
            <div>
              I then created a comprehensive brand guide covering color usage,
              typography (Lovelo paired with Noto Sans), and layout principles.
              Early explorations tested gradients vs. solids, organic vs.
              structured forms, and varying line styles. I ultimately landed on
              short, curved lines that echo the logo while adding visual
              contrast.
            </div>
          ),
          width: 400,
          height: 250,
        },
      ],
    },

    {
      name: "Graphic",
      tools: ["Illustrator", "Procreate", "Canva"],

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
        { id: 4, imgSrc: Finalfeesh2 },
        DNAVRSlides,

        { id: 1, imgSrc: AndyWarhog },
        // { id: 2, imgSrc: CameraBasics, title: "Camera Basics" },
        // { id: 3, imgSrc: Debugged },

        {
          id: 7,
          //   title: "Mango City ",
          description:
            "A series of hypothetical logos for a hypothetical city.",
          imgSrc: <Carousel images={MangoCarousel} />,
          width: 256,
          height: 256,
        },
        { id: 8, imgSrc: Salt },
        {
          id: 9,
          description:
            "Random shirt designs (dragon fruit heart, we are all fish, a woman made out of shapes).",
          imgSrc: <Carousel images={shirts} />,
        },
        // { id: 10, imgSrc: Tide, title: "Tide" },
      ],
    },
    {
      name: "Web",
      tools: ["Figma", "Framer"],
      images: [
        {
          id: 1,
          title: (
            <div
              className="font-semibold text-indigo-300 hover:text-white hover:scale-101 transition-transform ease-in-out flex gap-2 items-center"
              onClick={() =>
                window.open(
                  "https://aestheticofillegibility.framer.website/",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              Film Noir Website{" "}
              <span className="inline-block ml-1 ">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"
                  />
                </svg>
              </span>
            </div>
          ),
          description: (
            <div>
              I created the initial website concept and built page templates in
              Framer, mapping out text placement, image structure, and key
              visual effects. The client requested a Film Noir–inspired
              aesthetic, so I focused on designs that conveyed mood, tension,
              and intentional disorder. What you see above are a few of the
              concepts I developed.
            </div>
          ),
          imgSrc: <Carousel images={FilmNoirCarousel} />,
          width: 400,
          height: 250,
        },
        {
          id: 2,
          imgSrc: <Carousel images={clawsImages} />,
          title: "CLAWS Vitals Page Designs",
          description: (
            <div>
              <p>
                CLAWS is an interdisciplinary team at the University of Michigan
                that builds augmented reality interfaces for astronauts.{" "}
              </p>
              <br />
              <p>
                I was a part of CLAWS for 3 years, and was on the Web, UI/UX,
                and Content team respectively. When I was on the UI/UX team, I
                designed the Vitals pages. What you see above are warnings,
                notifications, and a normal view of the Vitals page.
              </p>
              <br />
              <p>
                My design process involved researching existing astronaut
                interfaces, sketching wireframes, and iterating on visual
                elements to ensure clarity and usability in high-stress
                situations. Vitals that are related to each other are grouped
                together, and the visual semi-circles and sparse use of colors
                are meant to allow easy readability at a glance.
              </p>
              <br />
              <p>
                If you're interested in seeing more of my work with CLAWS,
                explore the Social Media & Marketing and Film/Video planets!
              </p>
            </div>
          ),
        },
      ],
    },
  ];
  return <MediaShowcase tabData={tabData} />;
}
