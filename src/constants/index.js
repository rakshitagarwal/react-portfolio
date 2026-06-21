import content from "../data/portfolio.json";
import profileImage from "../assets/main.png";
import aboutImage from "../assets/secondary.jpg";
import logoImage from "../assets/kevinRushLogo.png";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import resumePdf from "../assets/cv/Rakshit_Agarwal.pdf";

const imageMap = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4,
};

export const PROFILE = content.profile;
export const HERO_CONTENT = content.profile.heroBio;
export const ABOUT_TEXT = content.profile.aboutBio;
export const CONTACT = content.contact;
export const SOCIAL = content.social;
export const TECHNOLOGY_CATEGORIES = content.technologyCategories;
export const EXPERIENCES = content.experiences;
export const IMAGES = {
  profile: profileImage,
  about: aboutImage,
  logo: logoImage,
};
export const RESUME = {
  url: resumePdf,
  fileName: "Rakshit_Agarwal_Resume.pdf",
};
export const PROJECTS = content.projects.map((project) => ({
  ...project,
  image: project.imageKey ? imageMap[project.imageKey] ?? null : null,
}));
