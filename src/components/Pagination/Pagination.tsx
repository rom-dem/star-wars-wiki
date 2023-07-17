import styles from "@/components/Pagination/Pagination.module.scss";

interface PaginationProps {
  paginationPrevious: () => void;
  paginationNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const Pagination = ({
  paginationPrevious,
  isPreviousDisabled,
  paginationNext,
  isNextDisabled,
}: PaginationProps): React.ReactElement => {
  return (
    <nav className={styles["pagination"]}>
      <button
        className={styles["pagination__button"]}
        onClick={paginationPrevious}
        disabled={isPreviousDisabled}
        name="previous"
      >
        Previous Page
      </button>
      <button
        className={styles["pagination__button"]}
        onClick={paginationNext}
        disabled={isNextDisabled}
        name="next"
      >
        Next Page
      </button>
    </nav>
  );
};

export default Pagination;
