
import { Project } from "../../types/project";

export const p2: Project = {
  id: "stroke-prediction",
  title: "Stroke Prediction",
    shortDescription: "Utilizing various machine learning algorithms to predict whether a patient will have a stroke.",
    description: "This project focuses on training and evaluating logistic regression, K-nearest neighbors, and support vector machines to predict stroke occurrences based on patient data. The dataset includes over 5000 examples and contains features such as glucose, BMI, marriage status, and much more. Overall, the models perfored moderately with logistic regrssion achieving the best results.",
  technologies: ["Python", "Scikit-learn", "Jupyter Notebooks"],
  image: "/images/stroke.png",
  github: "https://github.com/anthony-lamelas/Stroke_Prediction",
  role: "Software Engineer",
  features: [
    "Logistic regression, K-nearest neighbors, and SVM model comparison",
    "Analysis of 5000+ patient records with multiple health indicators",
    "Feature importance evaluation for stroke risk factors",
    "Data preprocessing and handling of imbalanced datasets",
    "Polynomial feature transformations and ridge regularization"
  ],
  screenshots: [
  ],
  contributors: [
   { name: "Lily McAmis", linkedin: "https://www.linkedin.com/in/lily-mcamis/" }
  ]
};