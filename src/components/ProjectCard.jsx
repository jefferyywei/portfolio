import './ProjectCard.scss';
import githubIcon from '../assets/images/github.png';
import { motion } from 'framer-motion';

function ProjectCard({ title, label, description, tech, image, github, demo, align = 'left' }) {
  const isLeft = align === 'left';

  return (
    <div className={`project-card ${align === 'right' ? 'reverse' : ''}`}>
      <motion.div
        className="project-image"
        initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src={image} alt={title} />
      </motion.div>

      <motion.div
        className="project-info"
        initial={{ opacity: 0, x: isLeft ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {label && <p className="project-label">{label}</p>}
        <h2 className="project-title">{title}</h2>
        <div className="project-description-box">
          <p>{description}</p>
        </div>
        <p className="project-tech">{tech.join(' · ')}</p>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              <span>Live Demo ↗</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
