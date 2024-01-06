import finance from "../../../public/finance.png";
import development from "../../../public/dev.png";
import devops from "../../../public/devops.png";
import business from "../../../public/business.png";
import sales from "../../../public/sales.png";
import design from "../../../public/design.png";
import profileOne from "../../../public/profile-1.png";
import profileTwo from "../../../public/profile-2.png";
import profileThree from "../../../public/profile-3.png";
import google from "../../../public/google_logo.png";
import uber from "../../../public/uber_logo.png";
import atlassian from "../../../public/atlassian_logo.png";
import netflix from "../../../public/netflix_logo.png";
import terraform from "../../../public/hashicorp_terraform_logo.jpeg";
import walmart from "../../../public/walmart_logo.png";
import nvidea from "../../../public/nvidia_logo.png";
import linkedin from "../../../public/linkedin_logo.jpeg";

export const CATEGORY_CARDS = [
  {
    cardInfo: "Finance",
    cardImage: finance,
  },
  {
    cardInfo: "Development",
    cardImage: development,
  },
  {
    cardInfo: "Sales",
    cardImage: sales,
  },
  {
    cardInfo: "Business",
    cardImage: business,
  },
  {
    cardInfo: "Devops",
    cardImage: devops,
  },
  {
    cardInfo: "Design",
    cardImage: design,
  },
];

export const TESTIMONIAL_CARDS = [
  {
    name: "Arjun Singh",
    profession: "Software Engineer",
    avatarImg: profileOne,
    quote:
      "Hirely made job hunting a breeze! The sleek UI not only made the application process seamless but also allowed me to track my progress effortlessly. The prompt communication from the hiring companies kept me in the loop, making the experience stress-free. The company review ratings were a game-changer, helping me choose the perfect workplace. I secured my dream job, thanks to Hirely!",
  },
  {
    name: "Shweta Tiwari",
    profession: "UX Designer",
    avatarImg: profileTwo,
    quote:
      "Getting hired through Hirely was a game-changer for me. The UI is not only modern and slick but also intuitive. Tracking application progress was as easy as a few clicks. The swift communication from companies made the entire process transparent and stress-free. I highly value the company review ratings; they helped me find the right fit for my career",
  },
  {
    name: "K Sreenivasan",
    profession: "Sr. Devops Engineer",
    avatarImg: profileThree,
    quote:
      "Hirely transformed my job search journey. The UI is not just slick; it's a pleasure to use. Tracking applications was effortless, and the instant responses from hiring companies gave me confidence. The company review ratings were a key factor in my decision-making. I landed a fantastic job, and I couldn't be happier with my experience on Hirely",
  },
];

export const getLogo = (companyName: string) =>
  companyName === "Google"
    ? google
    : companyName === "Atlassian"
      ? atlassian
      : companyName === "Uber"
        ? uber
        : companyName === "Linkedin"
          ? linkedin
          : companyName === "NVIDEA"
            ? nvidea
            : companyName === "Walmart"
              ? walmart
              : companyName === "Netflix"
                ? netflix
                : terraform;
