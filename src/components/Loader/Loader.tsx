import styles from "@/components/Loader/Loader.module.scss";

export const Loader = (): React.ReactElement => {
  return (
    <div className={styles.loader}>
      <span className={styles["loader__content"]} />
      <h2 className={styles["loader__title"]}>Loading....</h2>
    </div>
  );
};
