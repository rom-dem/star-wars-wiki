import { ItemStructure } from "@/api/types";
import styles from "@/components/ItemCard/ItemCard.module.scss";
import Image from "next/image";

interface ItemCardProps {
  item: ItemStructure;
}

export const ItemCard = ({
  item: { name },
}: ItemCardProps): React.ReactElement => {
  return (
    <article className={styles["item-card"]}>
      <Image
        src=""
        alt={name}
        width={350}
        height={350}
        className={styles["item-card__image"]}
      />
      <h2 className={styles["item-card__name"]}>{name}</h2>
    </article>
  );
};
