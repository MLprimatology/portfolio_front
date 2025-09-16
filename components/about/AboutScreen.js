// components/AboutMe.js
import styles from "../../styles/AboutMe.module.css";
import { Github, Linkedin } from "lucide-react";

function AboutScreen() {
  return (
    <section className={styles.about}>
      <div className={styles.card}>
        <img
          src="/profile.jpg"
          alt="Photo de profil"
          className={styles.avatar}
        />
        <h2 className={styles.name}>Mathieu Legrand</h2>
        <h3 className={styles.title}>
          Développeur d'application web & mobile (full stack JavaScript)
        </h3>
        <p className={styles.description}>
          Titulaire d’un doctorat en Sciences de la Vie et de la Santé obtenu à
          l’Université de Strasbourg, j’ai consacré plusieurs années à la
          recherche scientifique avant d’opérer une reconversion professionnelle
          vers le développement d’applications web, domaine dans lequel je mets
          désormais à profit mes compétences analytiques, ma rigueur et ma
          capacité à résoudre des problématiques complexes.
        </p>
        <div className={styles.socials}>
          <a
            href="https://github.com/MLprimatology"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mathieu-legrand-5a9350186"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutScreen;
