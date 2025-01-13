import css from "./Pagination.module.css";
import { useSelector } from "react-redux";

import {
  selectPage,
  selectPerPage,
  selectTotalPages,
} from "../../redux/news/selectors.js";

const Pagination = () => {
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);

  return (
    <div className={css.pagination}>
      <div className={css["arrows-box-left"]}>
        <img
          src="/double-arrow-left.png"
          alt="<<"
          className={css["double-left"]}
        />
        <img src="/left-arrow.png" alt="<" className={css["single-left"]} />
      </div>

      <div className={css["arrows-box-right"]}>
        <img src="/right-arrow.png" alt=">" className={css["single-right"]} />
        <img
          src="/double-right-arrow.png"
          alt=">>"
          className={css["double-right"]}
        />
      </div>
    </div>
  );
};

export default Pagination;
