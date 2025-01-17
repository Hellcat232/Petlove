import css from "./NoticesFilters.module.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector(selectNoticesCategories);
  const allGenders = useSelector(selectNoticesSex);
  const allTypes = useSelector(selectNoticesSpecies);

  useEffect(() => {
    const actions = [noticesCategories(), noticesSex(), noticesSpecies()];

    actions.forEach(dispatch);
  }, [dispatch]);

  function handleAction(formData) {
    const category = formData.get("category");
    const gender = formData.get("gender");
    const type = formData.get("types");

    console.log(category);
    console.log(gender);
    console.log(type);
  }

  return (
    <form action={handleAction} className={css.form}>
      <div className={css.content}>
        <SearchField />

        <div className={css["category-gender"]}>
          <Select
            unstyled
            className={css["select-inputs-mob"]}
            options={getOption(allCategory)}
            name="category"
            placeholder="Category"
          />

          <Select
            unstyled
            className={css["select-inputs-mob"]}
            options={getOption(allGenders)}
            name="gender"
            placeholder="By gender"
          />
        </div>

        <Select
          unstyled
          className={css["select-inputs"]}
          options={getOption(allTypes)}
          name="types"
          placeholder="By type"
        />

        <Select
          unstyled
          className={css["select-inputs"]}
          // options={getOption(allTypes)}
          // name="types"
          placeholder="Location"
        />
      </div>

      <hr className={css.hr} />

      <div>
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
      </div>
    </form>
  );
};

export default NoticesFilters;
