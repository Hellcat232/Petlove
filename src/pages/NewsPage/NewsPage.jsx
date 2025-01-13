import css from "./NewsPage.module.css";
import Title from "../../components/Title/Title";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../../redux/news/operation.js";

export default function NewsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <section className={css["news-section"]}>
      <div className={css["title-and-search"]}>
        <Title>News</Title>
        <SearchField />
      </div>

      <div className={css.list}>
        <NewsList />
      </div>

      <Pagination />
    </section>
  );
}
