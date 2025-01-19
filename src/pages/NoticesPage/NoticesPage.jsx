import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import defaultState from "../../utils/defaultStateForFilter";

import { notices } from "../../redux/notices/operation";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function NoticesPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(defaultState);

  console.log(formData);

  useEffect(() => {
    dispatch(notices());
  }, [dispatch]);

  const handleChange = (event, fieldName) => {
    if (fieldName) {
      // Для Select или других данных с полем
      setFormData((prev) => ({
        ...prev,
        [fieldName]: event.value || "", // Используем значение из объекта
      }));
    } else if (event && event.target) {
      // Для стандартных событий ввода
      const { name, value, type, checked } = event.target;
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
  }

  return (
    <section className={css["find-pet-section"]}>
      <Title>Find your favorite pet</Title>

      <NoticesFilters
        formData={formData}
        defaultState={defaultState}
        handleChange={handleChange}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

      {/* <NoticesFilters2 /> */}

      {/* <NoticesList /> */}

      <Pagination />
    </section>
  );
}
