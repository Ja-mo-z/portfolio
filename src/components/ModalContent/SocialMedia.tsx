import MediaShowcase from "./Templates/MediaShowcase";
import Carousel from "./Templates/Carousel";
// Claws Board Images
import CLAWSBoard1 from "@/assets/social_media/CLAWS Board/1.png";
import CLAWSBoard2 from "@/assets/social_media/CLAWS Board/2.png";
import CLAWSBoard3 from "@/assets/social_media/CLAWS Board/Adhav's Slide.png";
import CLAWSBoard4 from "@/assets/social_media/CLAWS Board/Emma's Slide.png";
import CLAWSBoard5 from "@/assets/social_media/CLAWS Board/Molly's Slide.png";
import CLAWSBoard6 from "@/assets/social_media/CLAWS Board/Nathan (INTJ).png";

// CLAWS Subteam Leads Images
import CLAWSLead1 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2467.png";
import CLAWSLead2 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2468.png";
import CLAWSLead3 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2469.png";
import CLAWSLead4 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2470.png";
import CLAWSLead5 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2472.png";
import CLAWSLead6 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2473.png";
import CLAWSLead7 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2474.png";
import CLAWSLead8 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2475.png";
import CLAWSLead9 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2476.png";
import CLAWSLead10 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2477.png";
import CLAWSLead11 from "@/assets/social_media/CLAWS Subteam Leads/IMG_2478.png";

// Golden Shovel
import GS1 from "@/assets/social_media/Golden Shovel/1.png";
import GSWebinar from "@/assets/social_media/Golden Shovel/Innovation for the future webinar.png";
import GSTourism from "@/assets/social_media/Golden Shovel/Tourism Strategies Infographic.png";

// A2tech360
import A2_360Tile1080 from "@/assets/social_media/A2tech/360 25 Tile Lineup 1080x1350.jpg";
import A2_360Tile1200 from "@/assets/social_media/A2tech/360 25 Tile Lineup 1200x630.jpg";
import A2_Artboard2 from "@/assets/social_media/A2tech/Artboard 2.jpg";
import A2_BoLSPath1200 from "@/assets/social_media/A2tech/BoLS 25 Path to Commercialization 1200x630.jpg";
import A2_BoLSSpeaker1080 from "@/assets/social_media/A2tech/BoLS 25 Social Keynote Speaker 1080x1350.jpg";
import A2_BoLSSpeaker1200 from "@/assets/social_media/A2tech/BoLS 25 Social Keynote Speaker 1200x630.jpg";
import A2_Path1080 from "@/assets/social_media/A2tech/BoLS Path to Commercialization 1080x1350.jpg";
import A2_Companies from "@/assets/social_media/A2tech/Companies.jpg";
import A2_Maker1080 from "@/assets/social_media/A2tech/Maker Works Partner 25 Tile 1080x1350.jpg";
import A2_Maker1200 from "@/assets/social_media/A2tech/Maker Works Partner 25 Tile 1200x630.jpg";
import A2_StudentFlyer from "@/assets/social_media/A2tech/Student Flyer 2025 JT Edits.jpg";
import A2_TechTalk from "@/assets/social_media/A2tech/Tech Talk - Brandon Tucker.jpg";
import Accumtech from "@/assets/social_media/A2tech/Accumtech.png";
import Arka from "@/assets/social_media/A2tech/Arka.png";
import Cahoots from "@/assets/social_media/A2tech/Cahoots.png";
import { desc } from "framer-motion/client";

export default function SocialMedia() {
  // CLAWS Images
  const CLAWSBoard = [
    { id: 1, imgSrc: CLAWSBoard1, title: "1" },
    { id: 2, imgSrc: CLAWSBoard2, title: "2" },
    { id: 3, imgSrc: CLAWSBoard3, title: "Adhav" },
    { id: 4, imgSrc: CLAWSBoard4, title: "Emma" },
    { id: 5, imgSrc: CLAWSBoard5, title: "Molly" },
    { id: 6, imgSrc: CLAWSBoard6, title: "Nathan" },
  ];

  const CLAWSSubteamLeads = [
    { id: 1, imgSrc: CLAWSLead1, title: "Lead 1" },
    { id: 2, imgSrc: CLAWSLead2, title: "Lead 2" },
    { id: 3, imgSrc: CLAWSLead3, title: "Lead 3" },
    { id: 4, imgSrc: CLAWSLead4, title: "Lead 4" },
    { id: 5, imgSrc: CLAWSLead5, title: "Lead 5" },
    { id: 6, imgSrc: CLAWSLead6, title: "Lead 6" },
    { id: 7, imgSrc: CLAWSLead7, title: "Lead 7" },
    { id: 8, imgSrc: CLAWSLead8, title: "Lead 8" },
    { id: 9, imgSrc: CLAWSLead9, title: "Lead 9" },
    { id: 10, imgSrc: CLAWSLead10, title: "Lead 10" },
    { id: 11, imgSrc: CLAWSLead11, title: "Lead 11" },
  ];
  // Golden Shovel Images
  const GoldenShovelImages = [
    { id: 1, imgSrc: GS1, title: "Promo Graphic 1" },
    { id: 2, imgSrc: GSWebinar, title: "Innovation for the Future Webinar" },
    { id: 3, imgSrc: GSTourism, title: "Tourism Strategies Infographic" },
  ];

  // Ann Arbor SPARK Images
  const A2TechSignage = [
    { id: 1, imgSrc: A2_360Tile1080, title: "360 Tile Lineup (1080x1350)" },
    { id: 2, imgSrc: A2_360Tile1200, title: "360 Tile Lineup (1200x630)" },
    { id: 9, imgSrc: A2_Maker1080, title: "Maker Works 1080x1350" },
    { id: 10, imgSrc: A2_Maker1200, title: "Maker Works 1200x630" },
  ];
  const A2TechBoLS = [
    { id: 2, imgSrc: A2_BoLSSpeaker1080, title: "Keynote Speaker (1080x1350)" },

    {
      id: 1,
      imgSrc: A2_BoLSPath1200,
      title: "BoLS Path to Commercialization (1200x630)",
    },
    { id: 3, imgSrc: A2_BoLSSpeaker1200, title: "Keynote Speaker (1200x630)" },
    { id: 4, imgSrc: A2_Path1080, title: "BoLS Path (1080x1350)" },
  ];
  const A2TechFlyers = [
    { id: 3, imgSrc: A2_Artboard2, title: "Artboard 2" },

    { id: 8, imgSrc: A2_Companies, title: "Companies" },

    { id: 11, imgSrc: A2_StudentFlyer, title: "Student Flyer 2025" },
    { id: 12, imgSrc: A2_TechTalk, title: "Tech Talk - Brandon Tucker" },
  ];
  const A2TechTent = [
    { id: 1, imgSrc: Accumtech, title: "Accumtech" },
    { id: 2, imgSrc: Arka, title: "Arka" },
    { id: 3, imgSrc: Cahoots, title: "Cahoots" },
  ];

  const tabData = [
    {
      name: "A2Tech360",
      // tools: ["Canva", "Illustrator"],
      subheading: (
        <div>
          <p>
            <i>
              <b>Ann Arbor SPARK’s a2Tech360 </b>
            </i>{" "}
            is a weeklong series of events that showcases the region’s
            innovative spirit through experiences, discussions, and networking
            opportunities.
          </p>
          <br />
          <p>
            As a contract Graphic Designer, I helped prepare presentation
            slides, promotional graphics and flyers, and tent designs. Pictured
            below are some examples of my work with Ann Arbor SPARK.
          </p>
          <div className="border-t-1 border-white/70 my-2" />
        </div>
      ),
      images: [
        {
          id: 0,
          title: "Signage & Tile Graphics",
          description:
            "A selection of digital signage and tile graphics created for a2Tech360.",
          imgSrc: <Carousel images={A2TechSignage} />,
          height: 256,
          width: 256,
        },
        {
          id: 1,
          title: "Speaker Promotions for BoLS Event",
          description:
            "A selection of social media graphics created to promote the Business of Life Sciences speaker event. They were one of several companies to participate in a2tech260.",
          imgSrc: <Carousel images={A2TechBoLS} />,
          height: 256,
          width: 256,
        },
        {
          id: 2,
          title: "Flyers & Event Promotions",
          description:
            "A selection of flyers and promotional graphics created for a2Tech360 events. One flyer mimics Taylor Swift's 'The Life of a Showgirl' aesthetic, as the event happened on the same day as the album came out.",
          imgSrc: <Carousel images={A2TechFlyers} />,
          height: 256,
          width: 256,
        },
        {
          id: 3,
          title: "Booth Tent Designs",
          description:
            "Tent designs created for the Ann Arbor SPARK a2Tech360 event, showcasing participating companies.",
          imgSrc: <Carousel images={A2TechTent} />,
          height: 256,
          width: 256,
        },
      ],
    },
    {
      name: "CLAWS",
      subheading: (
        <div>
          <p>
            <i>
              {" "}
              <b>CLAWS</b>{" "}
            </i>
            is an interdisciplinary team at the University of Michigan that
            builds augmented reality interfaces for astronauts.
          </p>
          <br />
          <p>
            As Content Lead, I planned, created, and delegated social graphics
            for Instagram. Some examples are shown below.
          </p>
          <div className="border-t-1 border-white/70 my-2" />
        </div>
      ),
      //   tools: ["Canva"],
      images: [
        {
          id: 0,
          title: "Introduction to CLAWS Board",
          imgSrc: <Carousel images={CLAWSBoard} />,
          description: (
            <div>
              <br />
            </div>
          ),
          height: 256,
          width: 256,
        },
        {
          id: 1,
          title: "Introduction to CLAWS Subteam Leads",
          imgSrc: <Carousel images={CLAWSSubteamLeads} />,
          description: (
            <div>
              <br />
              <div className="border-t-1 border-white/70 my-2" />

              <p>
                I also established our weekly Instagram takeovers, which boosted
                engagement and strengthened our connection with prospective and
                existing members.
              </p>
              <br />
              <p>
                If you’re interested in learning more about CLAWS, visit the
                Film/Video planet to watch our 2025 midterm introduction video,
                or check out{" "}
                <a
                  href="https://www.instagram.com/claws_um/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CLAWS'S instagram!
                </a>
              </p>
            </div>
          ),
          height: 256,
          width: 256,
        },
      ],
    },
    {
      name: "Golden Shovel",
      //   tools: ["Canva"],
      subheading: (
        <div>
          <p>
            <i>
              {" "}
              <b>Golden Shovel Agency</b>{" "}
            </i>
            is a marketing and communications firm dedicated to economic
            development.
          </p>
          <br />
          <p>
            Under my marketing internship, I created promotional videos,
            graphics, and social posts published across LinkedIn, Meta, and X. I
            also helped grow the company’s LinkedIn following by about 100
            through consistent posting, joining relevant discussion groups, and
            inviting connections to follow the page.
          </p>
          <div className="border-t-1 border-white/70 my-2" />
        </div>
      ),
      images: [
        {
          id: 0,
          title: "A Selection of Golden Shovel Social Media Graphics",
          imgSrc: <Carousel images={GoldenShovelImages} />,

          height: 256,
          width: 256,
        },
      ],
    },
  ];
  return <MediaShowcase tabData={tabData} />;
}
