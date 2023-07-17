import { ItemStructure } from "@/api/types";
import styles from "@/components/ItemCard/ItemCard.module.scss";
import Image from "next/image";
import cardImage from "../../../public/characters.webp";

interface ItemCardProps {
  item: ItemStructure;
}

const ItemCard = ({
  item: { name, title },
}: ItemCardProps): React.ReactElement => {
  return (
    <article className={styles["item-card"]}>
      <Image
        src={cardImage}
        alt={`${name || title}`}
        width={350}
        height={350}
        className={styles["item-card__image"]}
      />
      <h2 className={styles["item-card__name"]}>{name || title}</h2>
    </article>
  );
};

export default ItemCard;
