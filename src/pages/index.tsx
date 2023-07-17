import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import CategoriesMenu from "@/components/CategoriesMenu/CategoriesMenu";
import { ItemsList } from "@/components/ItemsList/ItemsList";
import { apiCategories } from "@/api/apiClient/apiEndpoints";
import useApi from "@/hooks/useApi";
import { useState } from "react";
const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("people");
  const { data, isLoading } = useApi(selectedCategory);

  const handleOnClick = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
  };

  if (isLoading) {
    return (
      <div
        className={`${styles.container} ${montserrat.className} ${styles.loader}`}
      >
        <h2 className={`${styles.main} `}>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Star Wars Wiki</title>
        <meta
          name="description"
          content="Characters and items from Star Wars universe"
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} ${montserrat.className}`}>
        <CategoriesMenu categories={apiCategories} onClick={handleOnClick} />
        <main className={`${styles.main}`}>
          <ItemsList items={data!} />
        </main>
      </div>
    </>
  );
};

export default Home;
