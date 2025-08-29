import "./App.scss";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import corner from "./assets/images/corner.png";
import snapchef from "./assets/images/snapchef.png";
import streamsync from "./assets/images/streamsync.png"
import insta from "./assets/images/instagram.png";
import github from "./assets/images/github.png";
import linkedin from "./assets/images/linkedin.png";

import ParticleBackground from "./components/ParticleBackground";
import ProjectCard from "./components/ProjectCard";
import SectionNav from "./components/SectionNav";
import Skills from "./components/Skills";
import ShowcaseSection from "./components/ShowcaseSection";

function App() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="container">
      <SectionNav />
      <div id="home" className="hero">
        <ParticleBackground />
        <div className="text-zone">
          <p className="intro"> Hi, my name is </p>
          <h1 className="large">Jeffery Wei</h1>
          <TypeAnimation
            className="small"
            style={{ whiteSpace: "pre-line" }}
            sequence={[
              "Building robust applications powered by machine learning insights",
            ]}
            speed={30}
          />
        </div>

        <div className="button-container">
          <a href="/Jeffery_Wei_Resume.pdf" rel="noopener noreferrer" target="_blank">
            <button> Resume</button>
          </a>
          <button onClick={handleScroll}> Contact Me</button>
        </div>

        <div className="scroll-container">
          <p className="scroll-text">Scroll to explore</p>
          <div className="scroll-icon-wrapper">
            <img src={corner} alt="scroll-down" className="scroll-icon" />
          </div>
        </div>
      </div>

      <motion.div id="about" className="about">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          I'm a Computer Science and Applied Mathematics student at the
          University of Maryland, College Park. I enjoy building reliable, user-friendly applications and creating predictive 
          models to uncover insights through machine learning.
          <br />
          <br />
          My experience spans software engineering and AI, from working on data compression and visualization tools at NASA, 
          to building nonprofit web applications with Hack4Impact, to creating an AI-powered job assistant at Microsoft Hack4Good 
          that helps people with disabilities in their job search. I’ve also conducted AI research at The Tensor Lab for Computational Medicine, 
          applying machine learning to analyze genomic data and explore healthcare applications.
          <br />
          <br />
          When not at my desk, you’ll find me staying active at the gym, playing basketball and pickleball, or spending time with friends. 
          At home, I’m usually hanging out with my dog and cat, or tackling a coding challenge over a good cup of coffee.
        </motion.p>
      </motion.div>

      <div id="projects" className="projects">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Projects
        </motion.h1>
        
        <ProjectCard
          align="left"
          label="Featured Project"
          title="StreamSync"
          description="A real-time data dashboard powered by WebSocket streaming. Visualizes finance, IoT, weather, system, and custom data sources in an interactive React interface, with PostgreSQL persistence, custom API integration, and a containerized stack built on Docker."
          tech={["React + TS", "Node.js", "WebSockets", "PostgreSQL, Docker"]}
          image={streamsync}
          github="https://github.com/jefferyywei/streamsync"
          demo=""
        />

        <ProjectCard
          align="right"
          label="Featured Project"
          title="SnapChef"
          description="An interactive cooking assistant that helps users find recipes using YOLO object detection. Upload a photo of your ingredients, and SnapChef suggests a curated list of dishes you can make."
          tech={["Python", "Flask", "Javascript", "OpenCV"]}
          image={snapchef}
          github="https://github.com/jefferyywei/SnapChef"
          demo="https://jwei.pythonanywhere.com/"
        />

        <ShowcaseSection />
      </div>

      <div id="skills" className="skills">
        <Skills />
      </div>

      <div id="contact" className="contact">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Say Hi
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a className="email" href="mailto:jefferywei05@gmail.com">
            jefferywei05@gmail.com
          </a>
        </motion.h2>

        <div className="icons-container">
          {[
            { href: "https://github.com/jefferyywei", src: github },
            { href: "https://www.linkedin.com/in/jefferywei/", src: linkedin },
            { href: "https://www.instagram.com/jefferywei_", src: insta },
          ].map((icon, i) => (
            <motion.div
              className="card"
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <a target="_blank" rel="noopener noreferrer" href={icon.href}>
                <img src={icon.src} alt="" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
