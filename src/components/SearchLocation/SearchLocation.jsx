import css from "./SearchLocation.module.css";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { searchCities } from "../../redux/cities/operation";

const SearchLocation = ({
  // setInputState,
  // inputState,
  isMenuOpen,
  formDataNotice,
  handleChangeNotice,
  setFormDataNotice,
  defaultStateNotice,
  handleSubmitNotice,
  setIsMenuOpen,
}) => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState("");
  console.log(inputState);

  const resetForm = (e) => {
    console.log("Reset form called");
    e.stopPropagation();
    setFormDataNotice(defaultStateNotice);
    setInputState("");
    setIsMenuOpen(false);
  };

  const handleSearchClick = (e) => {
    console.log("Search click called");
    e.stopPropagation();

    handleSubmitNotice(e);
  };

  const onInputChange = (value, actionMeta) => {
    if (actionMeta.action === "input-change") {
      console.log("Current input value:", value);

      setFormDataNotice((prev) => ({
        ...prev,
        locations: value,
      }));
      setIsMenuOpen(value.length >= 3);
    }
    setInputState(value);
  };

  const loadCities = async (inputValue) => {
    if (!inputValue || inputValue.length < 3) return [];
    try {
      const response = await dispatch(searchCities(inputValue.trim()));

      return response.payload.map((city) => ({
        value: city._id,
        label: `${city.cityEn}, ${city.stateEn}`,
      }));
    } catch (error) {
      console.log("Failed to load cities:", error.message);
      return [];
    }
  };

  const CustomNoOptionsMessage = (props) => (
    <components.NoOptionsMessage {...props}>
      <div className={css["empty-locations-list"]}>
        <p>Any match not found 😔</p>
      </div>
    </components.NoOptionsMessage>
  );

  const CustomDropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <div className={css["loop-and-cross-notices"]}>
        <button
          type="button"
          onClick={(e) => resetForm(e)}
          className={
            formDataNotice.locations === "" ? css["red-cross-btn"] : null
          }
        >
          <IoClose className={css["red-cross"]} />
        </button>

        <button
          type="submit"
          onClick={(e) => handleSearchClick(e)}
          className={css["search-icon-btn"]}
        >
          <FiSearch className={css["search-icon"]} />
        </button>
      </div>
    </components.DropdownIndicator>
  );

  return (
    <>
      <AsyncSelect
        unstyled
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          NoOptionsMessage: CustomNoOptionsMessage,
        }}
        className={css["select-inputs-location"]}
        classNames={{
          menuList: () => css["select-dropdown-location"],
          option: (state) =>
            state.isSelected
              ? css["select-option-active"]
              : css["select-option"],
        }}
        name="locations"
        menuIsOpen={isMenuOpen}
        cacheOptions
        loadOptions={loadCities}
        defaultOptions
        placeholder="Location"
        value={
          formDataNotice.locations
            ? {
                value: formDataNotice.locations,
                label: formDataNotice.locationsLabel || "Unknown Location",
              }
            : null
        }
        onChange={(selectedOption) =>
          handleChangeNotice(selectedOption, "locations")
        }
        onInputChange={(inputValue, actionMeta) =>
          onInputChange(inputValue, actionMeta)
        }
        inputValue={inputState}
      />
    </>
  );
};

export default SearchLocation;
