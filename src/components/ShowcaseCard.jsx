import { motion } from "framer-motion";
import githubIcon from "../assets/images/github.png";

function ShowcaseCard({ title, description, tech = [], image, github, demo }) {
  return (
    <motion.article
      className="showcase-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="thumb">
        <img src={image} alt={`${title} preview`} loading="lazy" />
        <div className="overlay">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} GitHub`}
            >
              <img src={githubIcon} alt="" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="demo-link"
              aria-label={`${title} Live Site`}
            >
              <span>Live Site ↗</span>
            </a>
          )}
        </div>
      </div>

      <h3 className="showcase-title">{title}</h3>
      {description && <p className="showcase-desc">{description}</p>}

      {tech?.length > 0 && (
        <ul className="tech-chips">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}

export default ShowcaseCard;
