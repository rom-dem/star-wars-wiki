import { ApiCategoriesStructure } from "@/api/types";
import styles from "@/components/CategoriesMenu/CategoriesMenu.module.scss";
import { useState } from "react";

interface ButtonProps {
  categories: ApiCategoriesStructure;
}

const CategoriesMenu = ({ categories }: ButtonProps): React.ReactElement => {
  return (
    <aside className="menu">
      <ul className={styles["menu__list"]}>
        {Object.entries(categories).map((category, index) => (
          <li className="menu__item" key={index}>
            <button className={styles["menu__button"]}>{category[1]}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoriesMenu;
