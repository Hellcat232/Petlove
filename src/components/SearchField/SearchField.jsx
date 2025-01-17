import { useState } from "react";
import css from "./SearchField.module.css";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useMatch } from "react-router-dom";

const SearchField = ({ handleSearch }) => {
  const matchNotices = useMatch("/notices");
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
        className={matchNotices ? css["search-notices"] : css.search}
      />

      <div
        className={
          matchNotices ? css["loop-and-cross-notices"] : css["loop-and-cross"]
        }
      >
        <button
          type="submit"
          onClick={() => setSearchValue("")}
          className={searchValue === "" ? css["red-cross-btn"] : null}
        >
          <IoClose className={css["red-cross"]} />
        </button>

        <button
          type="submit"
          onClick={handleSearchClick}
          className={css["search-icon-btn"]}
        >
          <FiSearch className={css["search-icon"]} />
        </button>
      </div>
    </div>
  );
};

export default SearchField;
