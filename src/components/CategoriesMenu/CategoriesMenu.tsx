import { ApiCategoriesStructure } from "@/api/types";
import styles from "@/components/CategoriesMenu/CategoriesMenu.module.scss";
import { v4 as uuidv4 } from "uuid";

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
        {Object.entries(categories).map((category) => (
          <li className="menu__item" key={uuidv4()}>
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
