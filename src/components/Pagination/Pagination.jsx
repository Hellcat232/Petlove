import { useDispatch } from "react-redux";
import css from "./Pagination.module.css";

import { useMediaQuery } from "react-responsive";
import { getNews } from "../../redux/news/operation";

const Pagination = ({ keyword, page, perPage, totalPages }) => {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({ minWidth: 768 });

  function handlePageChange(newPage) {
    if (newPage > 0 && newPage <= totalPages) {
      dispatch(getNews({ keyword, page: newPage, limit: perPage }));
    }
  }

  if (!totalPages || totalPages < 1) {
    return null;
  }

  return (
    <div className={css.pagination}>
      <div className={css["arrows-box-left"]}>
        <img
          src="/double-arrow-left.png"
          alt="<<"
          className={`${css["double-left"]} ${
            page === 1 ? css["disabled-double-arrows"] : ""
          }`}
          onClick={() => handlePageChange(1)}
        />
        <img
          src="/left-arrow.png"
          alt="<"
          className={`${css["single-left"]} ${
            page === 1 ? css["disabled"] : ""
          }`}
          onClick={() => page > 1 && handlePageChange(page - 1)}
        />
      </div>

      <div className={css["page-box"]}>
        <button
          className={`${css["page-number"]} ${
            page === page ? css["active"] : ""
          }`}
          key={`page-${page}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
        {page + 1 <= totalPages && (
          <button
            className={`${css["page-number"]} ${
              page + 1 === page ? css["active"] : ""
            }`}
            key={`page-${page + 1}`}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        )}
        {isTablet && page + 2 <= totalPages && (
          <button
            className={`${css["page-number"]} ${
              page + 2 === page ? css["active"] : ""
            }`}
            key={`page-${page + 2}`}
            onClick={() => handlePageChange(page + 2)}
          >
            {page + 2}
          </button>
        )}
        {page + 2 < totalPages && (
          <button className={css["page-number"]} disabled={true}>
            ...
          </button>
        )}
      </div>

      <div className={css["arrows-box-right"]}>
        <img
          src="/right-arrow.png"
          alt=">"
          className={`${css["single-right"]} ${
            page === totalPages ? css["disabled"] : ""
          }`}
          onClick={() => page < totalPages && handlePageChange(page + 1)}
        />
        <img
          src="/double-right-arrow.png"
          alt=">>"
          className={`${css["double-right"]} ${
            page === totalPages ? css["disabled-double-arrows"] : ""
          }`}
          onClick={() => handlePageChange(totalPages)}
        />
      </div>
    </div>
  );
};

export default Pagination;
