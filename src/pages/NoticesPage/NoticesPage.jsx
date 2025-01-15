import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";

export default function NoticesPage() {
  return (
    <section>
      <Title>Find your favorite pet</Title>

      <NoticesFilters />

      <NoticesList />

      <Pagination />
    </section>
  );
}
