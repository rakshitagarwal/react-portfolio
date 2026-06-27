import { downloadResume, SOCIAL } from "../constants";
import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from "react-icons/fa";

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
};

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center gap-4">
        <button
          type="button"
          onClick={downloadResume}
          aria-label="Download resume"
          className="text-2xl transition-colors hover:text-cyan-400"
        >
          <FaDownload />
        </button>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {SOCIAL.map(({ platform, url }) => {
          const Icon = socialIcons[platform];
          if (!Icon) return null;

          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform}
              className="transition-colors hover:text-cyan-400"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
