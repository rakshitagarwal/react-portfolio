import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const ProjectImagePlaceholder = ({ title }) => (
  <div className="mb-6 flex h-[150px] w-[150px] items-center justify-center rounded bg-neutral-800 text-center text-sm text-neutral-500">
    {title}
  </div>
);

const ProjectLinkButton = ({ href, label }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded bg-purple-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-800"
      >
        {label}
      </a>
    );
  }

  return (
    <span className="cursor-not-allowed rounded bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-500">
      {label}
    </span>
  );
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                />
              ) : (
                <ProjectImagePlaceholder title={project.title} />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <ProjectLinkButton href={project.liveUrl} label="Live" />
                <ProjectLinkButton href={project.codeUrl} label="Code" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
