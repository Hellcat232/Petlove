import css from "./SearchField.module.css";

const SearchField = () => {
  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className={css.search}
      />
    </form>
  );
};

export default SearchField;
