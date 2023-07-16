import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import CategoriesMenu from "@/components/CategoriesMenu/CategoriesMenu";
import { ItemsList } from "@/components/ItemsList/ItemsList";
import { apiCategories } from "@/api/apiClient/apiEndpoints";
import { mockPeopleItems } from "@/mocks/itemsMocks";

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
      <div className={`${styles.container} ${montserrat.className}`}>
        <CategoriesMenu categories={apiCategories} />
        <main className={`${styles.main}`}>
          <ItemsList items={mockPeopleItems} />
        </main>
      </div>
    </>
  );
};

export default Home;
