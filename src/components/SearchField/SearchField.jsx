import css from "./SearchField.module.css";
import { FiSearch } from "react-icons/fi";

const SearchField = ({ handleSearch }) => {
  return (
    <form action={handleSearch}>
      <div className="relative">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className={css.search}
        />

        <button type="submit">
          <FiSearch className={css["search-icon"]} />
        </button>
      </div>
    </form>
  );
};

export default SearchField;
