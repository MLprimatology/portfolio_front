import styles from "../../styles/Project.module.css";
import Card from "./Card";
import { projectsInfo, projectsFrontInfo, projectsTiny } from "./allprojects";

function Project() {
  const projectCards = projectsInfo.map((project, i) => {
    return <Card key={i} {...project}></Card>;
  });

  const projectFrontCards = projectsFrontInfo.map((project, i) => {
    return <Card key={i} {...project}></Card>;
  });

  const projectTinyCards = projectsTiny.map((project, i) => {
    return <Card key={i} {...project}></Card>;
  });
  return (
    <div className={styles.background}>
      <div className={styles.cardContainer}>
        <h2 className={styles.titleRow}> Mes projets complets </h2>
        <div className={styles.cardRow}>{projectCards}</div>
        <h2 className={styles.titleRow}> Intégration du backend </h2>
        <div className={styles.cardRow}>{projectTinyCards}</div>
        <h2 className={styles.titleRow}> Mes débuts en développement </h2>
        <div className={styles.cardRow}>{projectFrontCards}</div>
      </div>
    </div>
  );
}

export default Project;
