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
  formDataNotice,
  defaultStateNotice,
  handleChangeNotice,
  setFormDataNotice,
  handleSubmitNotice,
}) => {
  const dispatch = useDispatch();

  const allCategory = useSelector(selectNoticesCategories);
  const allGenders = useSelector(selectNoticesSex);
  const allTypes = useSelector(selectNoticesSpecies);

  const hasChanged = useMemo(() => {
    return !Object.values(formDataNotice).every(
      (value, idx) => value === Object.values(defaultStateNotice)[idx]
    );
  }, [formDataNotice, defaultStateNotice]);

  const categoryOptions = useMemo(() => getOption(allCategory), [allCategory]);
  const genderOptions = useMemo(() => getOption(allGenders), [allGenders]);
  const typeOptions = useMemo(() => getOption(allTypes), [allTypes]);

  useEffect(() => {
    const actions = [noticesCategories(), noticesSex(), noticesSpecies()];
    actions.forEach(dispatch);
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmitNotice} className={css.form}>
      <div className={css.content}>
        <SearchField
          formDataNotice={formDataNotice}
          defaultStateNotice={defaultStateNotice}
          handleChangeNotice={handleChangeNotice}
          setFormDataNotice={setFormDataNotice}
          handleSubmitNotice={handleSubmitNotice}
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
                formDataNotice.category
                  ? {
                      value: formDataNotice.category,
                      label: formDataNotice.category,
                    }
                  : null
              }
              onChange={(selectedOption) =>
                handleChangeNotice(selectedOption, "category")
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
              formDataNotice.gender
                ? { value: formDataNotice.gender, label: formDataNotice.gender }
                : null
            }
            onChange={(selectedOption) =>
              handleChangeNotice(selectedOption, "gender")
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
            formDataNotice.types
              ? { value: formDataNotice.types, label: formDataNotice.types }
              : null
          }
          onChange={(selectedOption) =>
            handleChangeNotice(selectedOption, "types")
          }
        />

        <Select
          unstyled
          className={css["select-inputs"]}
          // options={getOption(allTypes)}
          // name="types"
          placeholder="Location"
          value={formDataNotice.locations}
          onChange={handleChangeNotice}
        />
      </div>

      <hr className={css.hr} />

      <div className={css["checkbox-button"]}>
        <input
          type="checkbox"
          name="popular"
          id="popular"
          checked={formDataNotice.popular}
          onChange={handleChangeNotice}
          disabled={formDataNotice.unpopular}
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
          checked={formDataNotice.unpopular}
          onChange={handleChangeNotice}
          disabled={formDataNotice.popular}
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
          checked={formDataNotice.cheap}
          onChange={handleChangeNotice}
          disabled={formDataNotice.expensive}
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
          checked={formDataNotice.expensive}
          onChange={handleChangeNotice}
          disabled={formDataNotice.cheap}
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
                setFormDataNotice(defaultStateNotice);
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
