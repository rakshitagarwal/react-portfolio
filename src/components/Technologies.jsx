import { TECHNOLOGIES } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconMap = {
  react: { Icon: RiReactjsLine, className: "text-7xl text-cyan-400" },
  nextjs: { Icon: TbBrandNextjs, className: "text-7xl" },
  nodejs: { Icon: FaNodeJs, className: "text-7xl text-green-500" },
  mongodb: { Icon: SiMongodb, className: "text-7xl text-green-500" },
  mysql: { Icon: SiMysql, className: "text-7xl text-sky-700" },
  tailwind: { Icon: SiTailwindcss, className: "text-7xl text-cyan-500" },
};

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {TECHNOLOGIES.map((tech, index) => {
          const config = iconMap[tech];
          if (!config) return null;

          const { Icon, className } = config;

          return (
            <motion.div
              key={tech}
              variants={iconVariants(2 + index)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <Icon className={className} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
