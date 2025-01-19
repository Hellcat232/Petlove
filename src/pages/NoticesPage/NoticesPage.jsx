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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(formData, "formData");

  useEffect(() => {
    dispatch(notices());
  }, [dispatch]);

  const handleChangeNotice = (event, fieldName) => {
    if (fieldName) {
      console.log("Updating field:", fieldName, "with value:", event);

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

      {/* <NoticesFilters2 /> */}

      {/* <NoticesList /> */}

      <Pagination />
    </section>
  );
}
