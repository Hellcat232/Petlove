import css from "./NoticesFilters.module.css";
import Select from "react-select";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";
import getOption from "../../utils/getOptions";
import {
  noticesCategories,
  noticesSex,
  noticesSpecies,
} from "../../redux/notices/operation";
import { getAllLocations } from "../../redux/cities/operation";

import {
  selectNoticesCategories,
  selectNoticesSex,
  selectNoticesSpecies,
} from "../../redux/notices/selectors";
import { selectCityCities } from "../../redux/cities/selectors";

const defaultState = {
  category: "",
  gender: "",
  types: "",
  locations: "",
  popular: false,
  unpopular: false,
  cheap: false,
  expensive: false,
};

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector(selectNoticesCategories);
  const allGenders = useSelector(selectNoticesSex);
  const allTypes = useSelector(selectNoticesSpecies);
  const [formData, setFormData] = useState(defaultState);

  const hasChanged = !Object.values(formData).every(
    (value, idx) => value === Object.values(defaultState)[idx]
  );

  useEffect(() => {
    const actions = [noticesCategories(), noticesSex(), noticesSpecies()];
    actions.forEach(dispatch);
  }, [dispatch]);

  const handleChange = (event, fieldName) => {
    if (fieldName) {
      // Для кастомного Select
      setFormData((prev) => ({
        ...prev,
        [fieldName]: event.value, // Используем `value` из объекта
      }));
    } else {
      // Для стандартных полей
      const { name, value, type, checked } = event.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
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
          <div className={css["select-wrapper"]}>
            <Select
              unstyled
              className={css["select-inputs-mob"]}
              classNames={{
                menuList: () => css["select-dropdown-mob"],
                option: (state) =>
                  state.isSelected
                    ? css["select-option-active"]
                    : css["select-option"],
              }}
              options={getOption(allCategory)}
              name="category"
              placeholder="Category"
              value={
                formData.category
                  ? { value: formData.category, label: formData.category }
                  : null
              }
              onChange={(selectedOption) =>
                handleChange(selectedOption, "category")
              }
            />
          </div>

          <Select
            unstyled
            className={css["select-inputs-mob"]}
            classNames={{
              menuList: () => css["select-dropdown-mob"],
              option: (state) =>
                state.isSelected
                  ? css["select-option-active"]
                  : css["select-option"],
            }}
            options={getOption(allGenders)}
            name="gender"
            placeholder="By gender"
            value={
              formData.gender
                ? { value: formData.gender, label: formData.gender }
                : null
            }
            onChange={(selectedOption) =>
              handleChange(selectedOption, "gender")
            }
          />
        </div>

        <Select
          unstyled
          className={css["select-inputs"]}
          classNames={{
            menuList: () => css["select-dropdown"],
            option: (state) =>
              state.isSelected
                ? css["select-option-active"]
                : css["select-option"],
          }}
          options={getOption(allTypes)}
          name="types"
          placeholder="By type"
          value={
            formData.types
              ? { value: formData.types, label: formData.types }
              : null
          }
          onChange={(selectedOption) => handleChange(selectedOption, "types")}
        />

        <Select
          unstyled
          className={css["select-inputs"]}
          // options={getOption(allTypes)}
          // name="types"
          placeholder="Location"
          value={formData.locations}
          onChange={handleChange}
        />
      </div>

      <hr className={css.hr} />

      <div className={css["checkbox-button"]}>
        <input
          type="checkbox"
          name="popular"
          id="popular"
          checked={formData.popular}
          onChange={handleChange}
        />
        <label htmlFor="popular">
          Popular{" "}
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
          Unpopular{" "}
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
          Cheap{" "}
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
          Expensive{" "}
          <span>
            <IoClose className={css.cross} />
          </span>
        </label>
      </div>

      {hasChanged && (
        <div>
          <hr className={css.hr} />

          <div className={css["apply-reset"]}>
            <button type="submit" className={css["apply-btn"]}>
              Apply{" "}
              <span>
                <IoMdCheckmark className={css["green-check"]} />
              </span>
            </button>

            <button
              type="button"
              className={css["apply-btn"]}
              onClick={() => setFormData(defaultState)}
            >
              Reset{" "}
              <span>
                <IoClose className={css["red-cross"]} />
              </span>
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default NoticesFilters;
