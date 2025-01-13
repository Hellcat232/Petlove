import { NavLink } from "react-router-dom";
import css from "./NewsItem.module.css";

import dateFormatter from "../../utils/dateFormatter";

const NewsItem = ({ itemNews }) => {
  return (
    <li className={css["news-item"]}>
      <img src={itemNews.imgUrl} alt="News Image" className={css["news-img"]} />

      <div className={css["title-and-text-wrapper"]}>
        <h2 className={css["news-title"]}>{itemNews.title}</h2>
        <p className={css["news-text"]}>{itemNews.text}</p>
      </div>

      <div className={css["date-and-link-wrapper"]}>
        <p className={css["news-date"]}>{dateFormatter(itemNews.date)}</p>
        <NavLink to={itemNews.url} className={css["news-link"]}>
          Read more
        </NavLink>
      </div>
    </li>
  );
};

export default NewsItem;
