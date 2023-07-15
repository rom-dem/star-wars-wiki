import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>Star Wars Wiki</title>
        <meta name="Characters and items from Star Wars universe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${montserrat.className}`}></main>
    </>
  );
};

export default Home;
