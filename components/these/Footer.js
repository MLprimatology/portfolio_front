import styles from "../../styles/Footer.module.css";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  const handleClickSocial = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h4>LES PARTENAIRES</h4>
            <ul className={styles.liste}>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.lnca.cnrs.fr/"
                  className={styles.link}
                >
                  LNCA
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="http://ed.vie-sante.unistra.fr/"
                  className={styles.link}
                >
                  Université de Strasbourg
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="http://ed.vie-sante.unistra.fr/"
                  className={styles.link}
                >
                  ED414
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://primatologie.unistra.fr/"
                  className={styles.link}
                >
                  Silabe
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>ME CONTACTER</h4>
            <div className={styles.socials}>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                onClick={() =>
                  handleClickSocial(
                    "https://www.linkedin.com/in/mathieu-legrand-5a9350186"
                  )
                }
                className={styles.socialsIcon}
              />
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                onClick={() =>
                  handleClickSocial("https://github.com/MLprimatology")
                }
                className={styles.socialsIcon}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                onClick={() =>
                  handleClickSocial(
                    "https://www.facebook.com/mathieu.legrand.777"
                  )
                }
                className={styles.socialsIcon}
              />
              <a href="mailto:mathieu.legrand78@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className={styles.socialsIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
