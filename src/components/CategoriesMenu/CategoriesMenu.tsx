import { ApiCategoriesStructure } from "@/api/types";
import styles from "@/components/CategoriesMenu/CategoriesMenu.module.scss";

interface ButtonProps {
  categories: ApiCategoriesStructure;
  onClick: (category: string) => void;
}

const CategoriesMenu = ({
  categories,
  onClick,
}: ButtonProps): React.ReactElement => {
  return (
    <aside className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        {Object.entries(categories).map((category, index) => (
          <li className="menu__item" key={index}>
            <button
              className={styles["menu__button"]}
              onClick={() => onClick(category[1])}
            >
              {category[1]}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoriesMenu;
