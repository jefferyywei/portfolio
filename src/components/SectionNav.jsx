import { useEffect, useState } from "react";
import "./SectionNav.scss";

const sections = ["home", "about", "projects", "skills", "contact"];

function SectionNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollMid = window.innerHeight / 2;

      let currentSection = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollMid) {
            currentSection = id; // keep updating as we go down
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // fire once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="section-nav">
      {sections.map((id) => (
        <div
          key={id}
          className={`nav-item ${activeSection === id ? "active" : ""}`}
          onClick={() => scrollTo(id)}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </div>
      ))}
    </div>
  );
}

export default SectionNav;
