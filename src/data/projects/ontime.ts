import { Project } from "../../types/project";

export const onTime: Project = {
  id: "ontime",
  title: "OnTime",
  shortDescription: "A real-time NYC subway tracking maps app that incorporates machine learning delay predictions to recommend the best routes.",
  description: "We built a real-time NYC subway maps application that incorporates subway delay predictions from a trained machine learning model into the actual route times. This allows us to recommend the fastest and most reliable routes to users. We architected the real-time tracking platform using a microservices approach and engineered the independent machine learning pipeline responsible for live transit data ingestion and continuous model retraining to predict arrival delays.",
  technologies: ["React", "Mapbox", "FastAPI", "PostgreSQL", "AWS", "LightGBM", "Scikit-Learn", "Python", "Docker"],
  image: "/images/subway.png",
  github: "https://github.com/anthony-lamelas/OnTime",
  demo: "https://ontimenyc.duckdns.org/",
  role: "Software Engineer",
  features: [
    "Real-time subway tracking maps app with route recommendations based on live delay predictions",
    "Microservices architecture deployed on AWS with a FastAPI backend and React/Mapbox frontend",
    "Independent machine learning microservice for live transit data ingestion",
    "Delay prediction model using LightGBM and scikit-learn with continuous retraining pipeline"
  ],
  contributors: [
    {
      name: "Uriel Olayinka",
      linkedin: "https://www.linkedin.com/in/uriel-olayinka/"
    },
    {
      name: "Edward Kang",
      linkedin: "https://www.linkedin.com/in/edward-m-kang/"
    },
    {
      name: "Chris Brasil",
      linkedin: "https://www.linkedin.com/in/chris-brasil/"
    }
  ],
  screenshots: ["/images/ontime_home.png", "/images/ontime.png"]
};
