import css from "./NoticesFilter2.module.css";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";
import getOption from "../../utils/getOptions";
import {
  noticesCategories,
  noticesSex,
  noticesSpecies,
} from "../../redux/notices/operation";

import {
  selectNoticesCategories,
  selectNoticesSex,
  selectNoticesSpecies,
} from "../../redux/notices/selectors";

const NoticesFilters2 = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector(selectNoticesCategories);
  const allGenders = useSelector(selectNoticesSex);
  const allTypes = useSelector(selectNoticesSpecies);

  const [formData, setFormData] = useState({
    category: "",
    gender: "",
    types: "",
    locations: "",
    popular: false,
    unpopular: false,
    cheap: false,
    expensive: false,
  });

  useEffect(() => {
    const actions = [noticesCategories(), noticesSex(), noticesSpecies()];
    actions.forEach(dispatch);
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.content}>
        <SearchField />

        <div className={css["category-gender"]}>
          {/* <select
            className={css["select-inputs-mob"]}
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Category
            </option>
            {getOption(allCategory).map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={css["select-dropdown-mob"]}
              >
                {option.label}
              </option>
            ))}
          </select> */}

          <select
            className={css["select-inputs-mob"]}
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Category
            </option>
            {allCategory.map((option, idx) => (
              <option key={idx} value={option} className={css["select-option"]}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>

          <select
            className={css["select-inputs-mob"]}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              By gender
            </option>
            {getOption(allGenders).map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={css["select-dropdown-mob"]}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <select
          className={css["select-inputs"]}
          name="types"
          value={formData.types}
          onChange={handleChange}
        >
          <option value="" disabled>
            By type
          </option>
          {getOption(allTypes).map((option) => (
            <option
              key={option.value}
              value={option.value}
              className={css["select-dropdown"]}
            >
              {option.label}
            </option>
          ))}
        </select>

        <select
          className={css["select-inputs"]}
          name="locations"
          value={formData.locations}
          onChange={handleChange}
        >
          <option value="" disabled>
            Location
          </option>
          {/* Здесь добавьте опции для локаций, если они есть */}
        </select>
      </div>

      <hr className={css.hr} />

      {/* CHECKBOX */}
      <div className={css["checkbox-button"]}>
        <input
          type="checkbox"
          name="popular"
          id="popular"
          checked={formData.popular}
          onChange={handleChange}
        />
        <label htmlFor="popular">
          Popular
          <span>
            <IoClose className={css.cross} />
          </span>
        </label>

        <input
          type="checkbox"
          name="unpopular"
          id="unpopular"
          checked={formData.unpopular}
          onChange={handleChange}
        />
        <label htmlFor="unpopular">
          Unpopular
          <span>
            <IoClose className={css.cross} />
          </span>
        </label>

        <input
          type="checkbox"
          name="cheap"
          id="cheap"
          checked={formData.cheap}
          onChange={handleChange}
        />
        <label htmlFor="cheap">
          Cheap
          <span>
            <IoClose className={css.cross} />
          </span>
        </label>

        <input
          type="checkbox"
          name="expensive"
          id="expensive"
          checked={formData.expensive}
          onChange={handleChange}
        />
        <label htmlFor="expensive">
          Expensive
          <span>
            <IoClose className={css.cross} />
          </span>
        </label>
      </div>

      <hr className="mb-5 mt-5 " />

      <button type="submit">submit</button>
    </form>
  );
};

export default NoticesFilters2;
