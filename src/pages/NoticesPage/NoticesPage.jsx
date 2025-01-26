import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import defaultState from "../../utils/defaultStateForFilter";

import {
  notices,
  noticesFavoriteRemoveById,
} from "../../redux/notices/operation";
import {
  selectNotices,
  selectNoticesPagination,
  selectNoticesPage,
  selectNoticesPerPage,
  selectNoticesTotalPages,
  selectNoticesLoading,
} from "../../redux/notices/selectors";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function NoticesPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectNoticesLoading);
  const isNoticesItem = useSelector(selectNotices);
  const page = useSelector(selectNoticesPage);
  const perPage = useSelector(selectNoticesPerPage);
  const totalPages = useSelector(selectNoticesTotalPages);
  const pagination = useSelector(selectNoticesPagination);
  const [formData, setFormData] = useState(defaultState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [added, setAdded] = useState(false);

  // console.log(formData, "formData");

  useEffect(() => {
    dispatch(notices());
  }, [dispatch]);

  const handleChangeNotice = (event, fieldName) => {
    if (fieldName) {
      // console.log("Updating field:", fieldName, "with value:", event);

      setIsMenuOpen(false);

      setFormData((prev) => ({
        ...prev,
        [fieldName]: event?.value || "",
        [`${fieldName}Label`]: event?.label || "",
      }));
    } else if (event && event.target) {
      const { name, value, type, checked } = event.target;

      // console.log("Updating field:", name, "with value:", value);

      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      console.error("Invalid event passed to handleChange");
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(notices(formData));
    setIsMenuOpen(false);
    setFormData(defaultState);
  }

  // function handleRemoveFavoriteNoticePage(id) {
  //   dispatch(noticesFavoriteRemoveById(id));
  //   setAdded(false);
  // }

  return (
    <section className={css["find-pet-section"]}>
      <Title>Find your favorite pet</Title>

      <NoticesFilters
        formDataNotice={formData}
        defaultStateNotice={defaultState}
        handleChangeNotice={handleChangeNotice}
        setFormDataNotice={setFormData}
        handleSubmitNotice={handleSubmit}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <NoticesList
        selector={isNoticesItem}
        // handleRemoveFavorite={handleRemoveFavoriteNoticePage}
        // added={added}
        // setAdded={setAdded}
      />

      {totalPages > 1 ? (
        <Pagination
          keyword={pagination}
          page={page}
          perPage={perPage}
          totalPages={totalPages}
        />
      ) : (
        <p>Not found any pets</p>
      )}
    </section>
  );
}
