
import { Project } from "../../types/project";

export const p1: Project = {
  id: "thryft",
  title: "Thryft",
  shortDescription: "A Tinder-inspired matching marketplace for used items.",
  description: "Thryft is a marketplace for buying and selling used items with a swipe-based matching system. Users can creat profiles, list items for sale, moderate other users, chat with potential buyers or sellers, and view items on their feed.",
  technologies: ["Ruby", "Rails", "HTML/CSS", "Heroku", "Cucumber", "RSpec"],
  image: "/images/thryft_cover.png",
  github: "https://github.com/anthony-lamelas/Thryft",
  demo: "https://thryft-team9-34327d4250fb.herokuapp.com/",
  role: "Team Lead and Full-Stack Developer",
  features: [
    "Tinder-style swipe interface for browsing items",
    "Real-time messaging between buyers and sellers",
    "Category and price range filtering",
    "Seller dashboard with analytics and total value tracking",
    "Listing report system for community moderation",
  ],
  screenshots: [
    "/images/image.png",
    "/images/image1.png"
  ],
  contributors: [
    { name: "Raymond Lin", linkedin: "https://www.linkedin.com/in/raymond-lin-282bb0203/" },
    { name: "Uriel Olayinka", linkedin: "https://www.linkedin.com/in/uriel-olayinka/" },
    { name: "Edward Kang", linkedin: "https://www.linkedin.com/in/edward-m-kang/" },
    { name: "Karl Zerbe", linkedin: "https://www.linkedin.com/in/karl-zerbe/" },
    { name: "Alicia Tian", linkedin: "https://www.linkedin.com/in/alicia-tian233/" },
    { name: "Pengcheng Weng"}
  ]
};
