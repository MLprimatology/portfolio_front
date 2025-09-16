import styles from "../../styles/Resume.module.css";

export default function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles.subj}>
        <h1 className={styles.title}>Mon sujet de thèse :</h1>
        <h2 className={styles.subtitle}>
          Stratégie de gestion du risque social chez deux espèces de macaques :{" "}
          <span className={styles.species}>Macaca mulatta</span> et{" "}
          <span className={styles.species}>Macaca Tonkeana</span>
        </h2>
      </div>

      <div className={styles.resume}>
        <h2 className={styles.subtitle}> Résumé de la thèse</h2>
        <p>
          La vie en groupe social est un équilibre permanent entre bénéfices et
          risques. Nous nous sommes intéressés aux risques que peuvent
          représenter les congénères durant les interactions sociales chez deux
          espèces de macaques au degré de tolérance sociale différent (
          <em>M. mulatta</em> et <em>M. tonkeana</em>). En s’intéressant au
          toilettage social, nous avons étudié comment ces deux espèces adaptent
          leur comportement à leurs congénères pour minimiser les risques durant
          les interactions. Ils adapteraient ce comportement en minimisant les
          contacts oculaires et en protégeant leurs parties du corps vulnérables
          pour réduire les risques liés à l’interaction. Un score de confiance a
          alors été élaboré afin d’apporter un regard nouveau sur la nature des
          relations sociales chez les macaques. Dans un second temps, nous avons
          testé cette hypothèse de valence attribuée au contact oculaire à
          l’aide d’un nouvel outil : le digit-tracking. Bien que l’outil soit
          très prometteur, nous n’avons pas réussi à valider cette hypothèse.
        </p>
      </div>
    </div>
  );
}
