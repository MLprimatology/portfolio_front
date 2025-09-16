import "../styles/globals.css";
import Head from "next/head";
import Home from "../components/Home";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio - Mathieu Legrand - Développeur web full Stack</title>
        <meta
          name="description"
          content="Mon parcours, mes projets ainsi que mon CV seront présentés sur ce site vous permettant d'en apprendre davanateg sur moi"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Home></Home>
    </>
  );
}

export default App;
