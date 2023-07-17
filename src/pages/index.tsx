import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import CategoriesMenu from "@/components/CategoriesMenu/CategoriesMenu";
import { ItemsList } from "@/components/ItemsList/ItemsList";
import { apiCategories } from "@/api/apiClient/apiEndpoints";
import useApi from "@/hooks/useApi";
import { useState } from "react";
import { initialStateValues } from "@/utils/dataUtils/dataUtils";
import Pagination from "@/components/Pagination/Pagination";
const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialStateValues.category,
  );
  let [selectedPage, setSelectedPage] = useState(initialStateValues.page);
  const { data, isLoading } = useApi(selectedCategory, selectedPage);

  const handleCategoryOnClick = (selectedCategory: string) => {
    setSelectedPage(initialStateValues.page);
    setSelectedCategory(selectedCategory);
  };

  const isPreviousDisabled = !data?.previous;

  const isNextDisabled = !data?.next;

  const handlePreviousPageOnClick = () => {
    setSelectedPage(selectedPage - 1);
  };

  const handleNextPageOnClick = () => {
    setSelectedPage(selectedPage + 1);
  };

  if (isLoading) {
    return (
      <div className={`${montserrat.className} ${styles.loader}`}>
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
        <CategoriesMenu
          categories={apiCategories}
          onClick={handleCategoryOnClick}
        />
        <main className={`${styles.main}`}>
          <ItemsList items={data!} />
          <Pagination
            isNextDisabled={isNextDisabled}
            isPreviousDisabled={isPreviousDisabled}
            paginationNext={handleNextPageOnClick}
            paginationPrevious={handlePreviousPageOnClick}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
