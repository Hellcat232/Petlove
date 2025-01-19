import { useState } from "react";
import css from "./SearchField.module.css";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useMatch } from "react-router-dom";

const SearchField = ({
  handleSearchNewsPage,
  handleChangeNewsPage,
  setSearchNewsPage,
  searchNewsPage,

  formDataNotice,
  defaultStateNotice,
  handleChangeNotice,
  setFormDataNotice,
  handleSubmitNotice,
}) => {
  const matchNotices = useMatch("/notices");
  const matchNews = useMatch("/news");

  const resetForm = () => {
    if (matchNews) {
      setSearchNewsPage("");
    } else {
      setFormDataNotice(defaultStateNotice);
    }
  };

  const handleSearchClick = () => {
    if (matchNews) {
      handleSearchNewsPage(searchNewsPage);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (matchNews) {
        handleSearchNewsPage(searchNewsPage);
      } else {
        handleSubmitNotice(e);
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="keyword"
        placeholder="Search"
        value={matchNews ? searchNewsPage : formDataNotice.keyword || ""}
        onChange={matchNews ? handleChangeNewsPage : handleChangeNotice}
        onKeyDown={handleKeyPress}
        className={matchNotices ? css["search-notices"] : css.search}
      />

      <div
        className={
          matchNotices ? css["loop-and-cross-notices"] : css["loop-and-cross"]
        }
      >
        <button
          type="button"
          onClick={resetForm}
          className={`${
            matchNews && searchNewsPage === "" ? css["red-cross-btn"] : null
          }  ${
            matchNotices && formDataNotice.keyword === ""
              ? css["red-cross-btn"]
              : null
          }`}
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
