import Resume from "./Resume";
import Footer from "./Footer";
import styles from "../../styles/These.module.css";

function TheseScreen() {
  return (
    <>
      <section className={styles.these}>
        <Resume></Resume>
        <Footer></Footer>
      </section>
    </>
  );
}

export default TheseScreen;
