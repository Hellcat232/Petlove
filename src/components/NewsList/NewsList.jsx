import css from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import { selectNews } from "../../redux/news/selectors";

import { useSelector } from "react-redux";

const NewsList = () => {
  const isNews = useSelector(selectNews);

  return (
    <ul className={css["all-items-list"]}>
      {isNews !== null &&
        isNews.map((news) => {
          return <NewsItem key={news._id} itemNews={news} />;
        })}
    </ul>
  );
};

export default NewsList;
