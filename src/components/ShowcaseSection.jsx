import ShowcaseCard from "./ShowcaseCard";
import { motion } from "framer-motion";

// import thumbs
import church from "../assets/images/church.png";
import gabbys from "../assets/images/gabbys.png";
import mind from "../assets/images/mind.png";

const showcase = [
  {
    title: "Maryland Information and Network Dynamics Lab",
    description: "Public-facing site for a UMD research lab, featuring project pages, blog posts, and team profiles.",
    tech: ["React", "Gatsby", "GraphQL"],
    image: mind,
    github: "",
    demo: "https://www.mindlab.cs.umd.edu/",
  },
  {
    title: "Gabby's Sweet Treets",
    description: "Bright, inviting site for a local dessert truck with a full menu and photo gallery to showcase treats.",
    tech: ["HTML/CSS", "JavaScript"],
    image: gabbys,
    github: "https://github.com/jefferyywei/sweetlifetruck",
    demo: "https://www.thesweetlifetruck.com/",
  },
  {
    title: "The Church in Gaithersburg",
    description: "Welcoming site for local church with event details and live Google Calendar for upcoming gatherings.",
    tech: ["HTML/CSS", "JavaScript"],
    image: church,
    demo: "https://www.churchingaithersburg.org/",
  },
];

function ShowcaseSection() {
  return (
    <section className="showcase-section">
      <motion.h2
        className="showcase-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        More Projects
      </motion.h2>

      <div className="showcase-grid">
        {showcase.map((p) => (
          <ShowcaseCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

export default ShowcaseSection;
