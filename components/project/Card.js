import styles from "../../styles/Card.module.css";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faMobile } from "@fortawesome/free-solid-svg-icons";

function Card({ name, title, desc, img, gitlink, stacks, deployURL }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const imgSrc = img;
  const alt = `image de l'application ${name}`;
  const handleClickURL = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={styles.scene} onClick={handleClick}>
      <div className={`${styles.card} ${isFlipped ? styles.isFlipped : ""}`}>
        <div className={styles.cardFront}>
          <h3>
            {name}

            {stacks.some((stack) => stack.toLowerCase().includes("expo")) && (
              <FontAwesomeIcon icon={faMobile} size="1x" />
            )}
          </h3>
          {name != "FaceUp" && (
            <Image src={imgSrc} width={500} height={500} alt={alt} />
          )}
          {name == "FaceUp" && (
            <Image src={imgSrc} width={300} height={500} alt={alt} />
          )}
        </div>
        <div className={styles.cardBack}>
          <h3 className={styles.titleCard}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
          {gitlink && (
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithub}
              size="2x"
              onClick={() => handleClickURL(gitlink)}
            />
          )}

          {deployURL && (
            <FontAwesomeIcon
              className={styles.icon}
              icon={faLink}
              size="2x"
              onClick={() => handleClickURL(deployURL)}
            />
          )}
          <div className={styles.stackLogos}>
            {stacks.map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`logo ${i}`}
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
