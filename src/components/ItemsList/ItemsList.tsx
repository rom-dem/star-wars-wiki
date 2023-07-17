import styles from "@/components/ItemsList/ItemsList.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import { ApiData } from "@/api/types";

interface ItemsListProps {
  items: ApiData;
  selectedCategory: string;
}

export const ItemsList = ({
  items: { results },
  selectedCategory,
}: ItemsListProps): React.ReactElement => {
  return (
    <ul className={styles["items-list"]}>
      {results.map((item, index) => (
        <li key={item.url} className="items-list__item item">
          <ItemCard
            item={item}
            isLazy={index < 2 ? "eager" : "lazy"}
            selectedCategory={selectedCategory}
          />
        </li>
      ))}
    </ul>
  );
};
