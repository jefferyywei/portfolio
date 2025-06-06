import './App.scss';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import corner from './assets/images/corner.png';
import snapchef from './assets/images/snapchef.png'
import upn from './assets/images//upn.png'
import gabbys from './assets/images/gabbys.png'
import mind from './assets/images/mind.png'
import cfs from './assets/images/cfs.png'
import church from './assets/images/church.png'
import insta from './assets/images/instagram.png'
import github from './assets/images/github.png'
import linkedin from './assets/images/linkedin.png'
import resume from './assets/Wei_Jeffery_Resume.pdf'

import ParticleBackground from './components/ParticleBackground';
import ProjectCard from './components/ProjectCard';
import SectionNav from './components/SectionNav';
import Skills from './components/Skills';

function App() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="container">
      <SectionNav />
      <div id='home' className='hero'>
        <ParticleBackground />
        <div className='text-zone'>
          <p className='intro'> Hi, my name is </p>
          <h1 className='large'>Jeffery Wei</h1>
          <TypeAnimation className='small'
            style={{ whiteSpace: 'pre-line' }}
            sequence={[
              'Software engineer working across full-stack and ML systems'
            ]}
            speed={30}
          />
        </div>

        <div className='button-container'>
          <a href={resume} without rel="noopener noreferrer" target="_blank"><button> Resume</button></a>
          <button onClick={handleScroll}> Contact Me</button>
        </div>

        <div className="scroll-container" onClick={handleScroll}>
          <p className="scroll-text">Scroll to explore</p>
          <div className="scroll-icon-wrapper">
            <img src={corner} className="scroll-icon" />
          </div>
        </div>
      </div>

      <motion.div
        id="about"
        className="about"
      >
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          I'm a Computer Science and Applied Mathematics student at the University of Maryland with a deep interest in building intelligent systems that scale.
          I'm especially drawn to the intersection of software engineering and machine learning, where practical infrastructure meets adaptable, data-driven systems.
          <br /><br />
          I'm most motivated by projects that solve meaningful problems—tools that empower people, surface insights from complex data, or make critical systems more accessible and efficient.



        </motion.p>
      </motion.div>

      <div id='projects' className='projects'>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Projects
        </motion.h1>

        <ProjectCard
          align="left"
          label="Featured Project"
          title="SnapChef"
          description="A web app that helps users find recipes using YOLO object detection. Upload a photo of your ingredients, and SnapChef suggests a curated list of dishes you can make."
          tech={['Python', 'Flask', 'OpenCV', 'MongoDB']}
          image={snapchef}
          github="https://github.com/jefferyywei/SnapChef"
          demo="https://jwei.pythonanywhere.com/"
        />
      </div>

      <div id='skills' className='skills'>
        <Skills />
      </div>

      <div id='contact' className='contact'>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
          <a className='email' href="mailto:jefferywei05@gmail.com">
            jefferywei05@gmail.com
          </a>
        </motion.h2>

        <div className='icons-container'>
          {[
            { href: 'https://github.com/jefferyywei', src: github },
            { href: 'https://www.linkedin.com/in/jefferywei/', src: linkedin },
            { href: 'https://www.instagram.com/jefferywei_', src: insta }
          ].map((icon, i) => (
            <motion.div
              className='card'
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <a target='blank' href={icon.href}>
                <img src={icon.src} alt='' />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;