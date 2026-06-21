import { TECHNOLOGY_CATEGORIES } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbDatabase } from "react-icons/tb";
import {
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiApachekafka,
  SiRabbitmq,
  SiDocker,
  SiPostman,
  SiJira,
  SiBitbucket,
  SiStripe,
  SiRazorpay,
} from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { VscGitCompare } from "react-icons/vsc";
import { motion } from "framer-motion";

const iconMap = {
  react: { Icon: RiReactjsLine, className: "text-5xl text-cyan-400", label: "React" },
  nextjs: { Icon: TbBrandNextjs, className: "text-5xl", label: "Next.js" },
  angular: { Icon: SiAngular, className: "text-5xl text-red-600", label: "Angular" },
  html: { Icon: SiHtml5, className: "text-5xl text-orange-500", label: "HTML" },
  css: { Icon: SiCss3, className: "text-5xl text-blue-500", label: "CSS" },
  tailwind: { Icon: SiTailwindcss, className: "text-5xl text-cyan-500", label: "Tailwind CSS" },
  nodejs: { Icon: FaNodeJs, className: "text-5xl text-green-500", label: "Node.js" },
  express: { Icon: SiExpress, className: "text-5xl", label: "Express" },
  mongodb: { Icon: SiMongodb, className: "text-5xl text-green-500", label: "MongoDB" },
  mysql: { Icon: SiMysql, className: "text-5xl text-sky-700", label: "MySQL" },
  postgres: { Icon: SiPostgresql, className: "text-5xl text-sky-700", label: "PostgreSQL" },
  redis: { Icon: DiRedis, className: "text-5xl text-red-700", label: "Redis" },
  firebase: { Icon: SiFirebase, className: "text-5xl text-yellow-500", label: "Firebase" },
  neondb: { Icon: TbDatabase, className: "text-5xl text-green-400", label: "Neon DB" },
  kafka: { Icon: SiApachekafka, className: "text-5xl", label: "Kafka" },
  rabbitmq: { Icon: SiRabbitmq, className: "text-5xl text-orange-600", label: "RabbitMQ" },
  stripe: { Icon: SiStripe, className: "text-5xl text-purple-500", label: "Stripe" },
  razorpay: { Icon: SiRazorpay, className: "text-5xl text-blue-600", label: "Razorpay" },
  docker: { Icon: SiDocker, className: "text-5xl text-blue-500", label: "Docker" },
  git: { Icon: FaGitAlt, className: "text-5xl text-orange-600", label: "Git" },
  postman: { Icon: SiPostman, className: "text-5xl text-orange-500", label: "Postman" },
  jira: { Icon: SiJira, className: "text-5xl text-blue-500", label: "Jira" },
  bitbucket: { Icon: SiBitbucket, className: "text-5xl text-blue-400", label: "Bitbucket" },
  gitlens: { Icon: VscGitCompare, className: "text-5xl text-cyan-400", label: "GitLens" },
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
      <div className="space-y-16">
        {TECHNOLOGY_CATEGORIES.map((category) => (
          <div key={category.name}>
            <h2 className="mb-8 text-center text-xl font-light tracking-wide text-neutral-400">
              {category.name}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {category.items.map((tech, index) => {
                const config = iconMap[tech];
                if (!config) return null;

                const { Icon, className, label } = config;

                return (
                  <motion.div
                    key={tech}
                    variants={iconVariants(2 + index * 0.3)}
                    initial="initial"
                    animate="animate"
                    title={label}
                    className="rounded-2xl border-4 border-neutral-800 p-3"
                  >
                    <Icon className={className} aria-label={label} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
