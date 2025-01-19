import css from "./NoticesFilters.module.css";
import Select from "react-select";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
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
//=================================================================================================
const NoticesFilters = ({
  formData,
  defaultState,
  handleChange,
  setFormData,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const allCategory = useSelector(selectNoticesCategories);
  const allGenders = useSelector(selectNoticesSex);
  const allTypes = useSelector(selectNoticesSpecies);

  const hasChanged = useMemo(() => {
    return !Object.values(formData).every(
      (value, idx) => value === Object.values(defaultState)[idx]
    );
  }, [formData, defaultState]);

  const categoryOptions = useMemo(() => getOption(allCategory), [allCategory]);
  const genderOptions = useMemo(() => getOption(allGenders), [allGenders]);
  const typeOptions = useMemo(() => getOption(allTypes), [allTypes]);

  useEffect(() => {
    const actions = [noticesCategories(), noticesSex(), noticesSpecies()];
    actions.forEach(dispatch);
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.content}>
        <SearchField
          handleSearch={(data) =>
            handleChange({ target: { name: "keyword", value: data.keyword } })
          }
          resetForm={() => {
            setSearchValue("");
            setFormData(defaultState);
          }}
          setFormData={setFormData}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          defaultState={defaultState}
          formData={formData}
        />

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
              options={categoryOptions}
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
            options={genderOptions}
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
          options={typeOptions}
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
          disabled={formData.unpopular}
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
          disabled={formData.popular}
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
          disabled={formData.expensive}
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
          disabled={formData.cheap}
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
              onClick={() => {
                setFormData(defaultState);
                setSearchValue("");
              }}
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
