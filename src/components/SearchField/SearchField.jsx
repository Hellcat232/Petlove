import { useState } from "react";
import css from "./SearchField.module.css";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SearchField = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(searchValue);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className={css.search}
      />

      {searchValue ? (
        <button type="submit" onClick={() => setSearchValue("")}>
          <IoClose className={css["red-cross"]} />
        </button>
      ) : (
        <button type="submit" onClick={handleSearchClick}>
          <FiSearch className={css["search-icon"]} />
        </button>
      )}
    </div>
  );
};

export default SearchField;
