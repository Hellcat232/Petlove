import { useMatch } from "react-router-dom";
import css from "./Title.module.css";

const Title = ({ children }) => {
  const matchNews = useMatch("/news");

  return (
    <h1 className={matchNews ? css["title-news-page"] : css.title}>
      {children}
    </h1>
  );
};

export default Title;
