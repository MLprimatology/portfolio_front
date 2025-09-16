// components/Header.js
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

function Header() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Navigation items with corresponding section IDs
  const navItems = [
    { sectionId: "accueil", label: "Accueil" },
    { sectionId: "about", label: "À propos de moi" },
    { sectionId: "project", label: "Mes projets" },
    { sectionId: "these", label: "Ma thèse" },
  ];

  // Use Intersection Observer to track which section is currently visible
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Trigger when section is 20% visible from top
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={styles.header}>
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`${styles.headerBtn} ${
            activeSection === item.sectionId ? styles.active : ""
          }`}
          onClick={() => scrollToSection(item.sectionId)}
        >
          {item.label}
        </button>
      ))}
    </header>
  );
}

export default Header;
