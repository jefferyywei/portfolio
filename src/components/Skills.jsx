import {
  FaPython,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaRust,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiC,
  SiOcaml,
  SiFlask,
  SiPytorch,
  SiFirebase,
  SiAssemblyscript,
  SiNextdotjs,
  SiScikitlearn,
  SiOpencv,
  SiPostgresql,
  SiExpress,
  SiGraphql,
} from "react-icons/si";

import { TbBrandReactNative, TbSql } from "react-icons/tb";

import "./Skills.scss";
import { motion } from "framer-motion";

const languages = [
  { label: "Python", icon: <FaPython /> },
  { label: "Java", icon: <FaJava /> },
  { label: "JavaScript", icon: <FaJs /> },
  { label: "TypeScript", icon: <SiTypescript /> },
  { label: "C", icon: <SiC /> },
  { label: "SQL", icon: <TbSql /> },
  { label: "Rust", icon: <FaRust /> },
  { label: "OCaml", icon: <SiOcaml /> },
  { label: "Assembly", icon: <SiAssemblyscript /> },
];

const frameworks = [
  { label: "React", icon: <FaReact /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
  { label: "React Native", icon: <TbBrandReactNative /> },
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "Express", icon: <SiExpress /> },
  { label: "Flask", icon: <SiFlask /> },
  { label: "PyTorch", icon: <SiPytorch /> },
  { label: "scikit-learn", icon: <SiScikitlearn /> },
  { label: "OpenCV", icon: <SiOpencv /> },
];

const tools = [
  { label: "Git", icon: <FaGitAlt /> },
  { label: "Docker", icon: <FaDocker /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "Firebase", icon: <SiFirebase /> },
  { label: "GraphQL", icon: <SiGraphql /> },
  { label: "Figma", icon: <FaFigma /> },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: "easeOut",
    },
  }),
};

function SkillGrid({ title, skills }) {
  return (
    <div className="skills-category">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </motion.h2>
      <div className="skills-grid">
        {skills.map((tech, index) => (
          <motion.div
            className="badge"
            key={tech.label}
            data-label={tech.label}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={badgeVariants}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skills-section">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills & Stack
      </motion.h1>
      <SkillGrid title="Languages" skills={languages} />
      <SkillGrid title="Frameworks & Libraries" skills={frameworks} />
      <SkillGrid title="Developer Tools & Platforms" skills={tools} />
    </div>
  );
}
