import React, { useRef } from "react";

import styles from "../styles/ModalMail.module.css";
import emailjs from "@emailjs/browser";

function ModalMail({ setIsModalOpen }) {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xggcrmn",
        "template_g4vcvkr",
        form.current,
        "Zmx7wxlITICFSTKYK"
      )
      .then(
        () => {
          alert("Message envoyé !");
          form.current.reset();
          setIsModalOpen(false);
        },
        (error) => {
          alert("Erreur, merci de réessayer", error.text);
        }
      );
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Contactez-moi</h3>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <input type="text" name="subject" placeholder="Sujet" required />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="4"
            required
          />
          <div className={styles.formButtons}>
            <button type="submit" className={styles.button}>
              Envoyer
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className={styles.button}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalMail;
