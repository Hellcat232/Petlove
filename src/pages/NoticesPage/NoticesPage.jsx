import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";

import {
  notices,
  noticesCategories,
  noticesSex,
  noticesSpecies,
} from "../../redux/notices/operation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function NoticesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notices());
  }, [dispatch]);

  return (
    <section className={css["find-pet-section"]}>
      <Title>Find your favorite pet</Title>

      <NoticesFilters />

      {/* <NoticesList /> */}

      <Pagination />
    </section>
  );
}
