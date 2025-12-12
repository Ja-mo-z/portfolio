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

export default function SocialMedia() {
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

  const tabData = [
    {
      name: "A2tech360",
      //   tools: ["Illustrator", "Photoshop"],
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
    },
  ];
  return <MediaShowcase tabData={tabData} />;
}
