import { FaPython, FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiC, SiOcaml, SiFlask, SiPytorch, SiFirebase } from 'react-icons/si';
import './Skills.scss';
import { motion } from "framer-motion";


const techList = [
    { label: "Python", icon: <FaPython /> },
    { label: "Java", icon: <FaJava /> },
    { label: "C", icon: <SiC /> },
    { label: "JavaScript", icon: <FaJs /> },
    { label: "TypeScript", icon: <SiTypescript /> },
    { label: "React", icon: <FaReact /> },
    { label: "Node.js", icon: <FaNodeJs /> },
    { label: "OCaml", icon: <SiOcaml /> },
    { label: "Firebase", icon: <SiFirebase /> },
    { label: "PyTorch", icon: <SiPytorch /> },
    { label: "Flask", icon: <SiFlask /> },
    { label: "Git", icon: <FaGitAlt /> },
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

            <div className="skills-grid">
                {techList.map((tech, index) => (
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