import { HERO_CONTENT, IMAGES, PROFILE, RESUME } from "../constants";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              {PROFILE.name}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {PROFILE.title}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              href={RESUME.url}
              download={RESUME.fileName}
              className="inline-flex items-center gap-2 rounded bg-purple-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-800"
            >
              Resume
              <FaDownload />
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={IMAGES.profile}
              alt={PROFILE.name}
              className="h-72 w-72 rounded-2xl object-cover object-top sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
