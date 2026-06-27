import content from "../data/portfolio.json";
import profileImage from "../assets/main.png";
import aboutImage from "../assets/secondary.jpg";
import logoImage from "../assets/kevinRushLogo.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import resumePdf from "../assets/cv/Rakshit_Agarwal.pdf";

const imageMap = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4,
  "project-5": project5,
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

export const downloadResume = async () => {
  const response = await fetch(RESUME.url);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = RESUME.fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
export const PROJECTS = content.projects.map((project) => ({
  ...project,
  image: project.imageKey ? imageMap[project.imageKey] ?? null : null,
}));
