import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import ModalMail from "./ModalMail";

function Accueil() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickButtonPorteFolio = () => {
    router.push("/project");
  };

  const handleClickButtonAbout = () => {
    router.push("/about");
  };

  const handleClickSocial = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.background}>
      <main className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/monkeyComputer.png"
            width={700}
            height={500}
            alt="Image d'un singe derrière un ordinateur"
          />
        </div>
        <h1 className={styles.title}>Mathieu Legrand</h1>
        <h2 className={styles.subtitle}>
          Docteur en primatologie reconverti en développeur d'applications web &
          mobile (full stack JS)
        </h2>

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
              handleClickSocial("https://www.facebook.com/mathieu.legrand.777")
            }
            className={styles.socialsIcon}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            onClick={() => setIsModalOpen(true)}
            className={styles.socialsIcon}
          />
        </div>
        {isModalOpen && <ModalMail setIsModalOpen={setIsModalOpen} />}
      </main>
    </div>
  );
}

export default Accueil;
