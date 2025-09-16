// pages/index.js (or your main page)
import { useState, useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

// Import your existing page components
import Accueil from "./Accueil";
import AboutScreen from "./about/AboutScreen";
import Project from "./project/Project";
import TheseScreen from "./these/TheseScreen";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  // Optional: Add keyboard navigation (arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const sections = ["accueil", "about", "project", "these"];
      const currentIndex = sections.findIndex(
        (section) =>
          document.getElementById(section)?.getBoundingClientRect().top <= 100
      );

      if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
        e.preventDefault();
        document.getElementById(sections[currentIndex + 1])?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        e.preventDefault();
        document.getElementById(sections[currentIndex - 1])?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Optional: Prevent scrolling during smooth scroll animation
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <section id="accueil" className={styles.section}>
        <Accueil />
      </section>
      <section id="about" className={styles.section}>
        <AboutScreen />
      </section>
      <section id="project" className={styles.section}>
        <Project />
      </section>
      <section id="these" className={styles.section}>
        <TheseScreen />
      </section>
      <div className={styles.sectionIndicator}>
        {["accueil", "about", "project", "these"].map((section, index) => (
          <button
            key={section}
            className={styles.indicatorDot}
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>
    </div>
  );
}
