import content from "../data/portfolio.json";
import profileImage from "../assets/kevinRushProfile.png";
import aboutImage from "../assets/about.jpg";
import logoImage from "../assets/kevinRushLogo.png";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
export const TECHNOLOGIES = content.technologies;
export const EXPERIENCES = content.experiences;
export const IMAGES = {
  profile: profileImage,
  about: aboutImage,
  logo: logoImage,
};
export const PROJECTS = content.projects.map((project) => ({
  ...project,
  image: project.imageKey ? imageMap[project.imageKey] ?? null : null,
}));
