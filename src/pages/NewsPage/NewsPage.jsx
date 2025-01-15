import css from "./NewsPage.module.css";
import Title from "../../components/Title/Title";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNews } from "../../redux/news/operation.js";
import {
  selectNewsPage,
  selectNewsPerPage,
  selectNewsTotalPages,
  selectNewsKeyword,
} from "../../redux/news/selectors.js";

export default function NewsPage() {
  const dispatch = useDispatch();
  const page = useSelector(selectNewsPage);
  const perPage = useSelector(selectNewsPerPage);
  const totalPages = useSelector(selectNewsTotalPages);
  const keyword = useSelector(selectNewsKeyword);

  useEffect(() => {
    dispatch(getNews({}));
  }, [dispatch]);

  const handleSearch = (searchData) => {
    if (!searchData.trim()) {
      console.error("Search query is empty!");
      return;
    }

    dispatch(getNews({ keyword: searchData.trim() }));
  };

  return (
    <section className={css["news-section"]}>
      <div className={css["title-and-search"]}>
        <Title>News</Title>
        <SearchField handleSearch={handleSearch} />
      </div>

      <div className={css.list}>
        <NewsList />
      </div>

      <Pagination
        page={page}
        perPage={perPage}
        totalPages={totalPages}
        keyword={keyword}
      />
    </section>
  );
}
