import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import defaultState from "../../utils/defaultStateForFilter";
import ModalAttention from "../../components/ModalAttention/ModalAttention";

import { notices } from "../../redux/notices/operation";
import {
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
  const page = useSelector(selectNoticesPage);
  const perPage = useSelector(selectNoticesPerPage);
  const totalPages = useSelector(selectNoticesTotalPages);
  const pagination = useSelector(selectNoticesPagination);
  const [formData, setFormData] = useState(defaultState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);

  console.log(formData, "formData");

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

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <NoticesList setModalOpen={setModalOpen} />
      )}

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

      {/* MODAL ATTENTION START WITH */}

      <ModalAttention modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}>
        <img
          src="/dog-face-attention1x.png"
          alt="attention face"
          srcSet="/dog-face-attention1x.png 1x, /dog-face-attention2x.png 2x"
          className={css["modal-img"]}
        />

        <h2 className={css["modal-attention-title"]}>Attention</h2>

        <p className={css["modal-attention-text"]}>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>

        <div className={css["modal-btns-block"]}>
          <button type="button" className={css["login-modal-btn"]}>
            Log in
          </button>

          <button type="button" className={css["register-modal-btn"]}>
            Registration
          </button>
        </div>
      </ModalAttention>
    </section>
  );
}
