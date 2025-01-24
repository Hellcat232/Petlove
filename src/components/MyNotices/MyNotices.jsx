import css from "./MyNotices.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectAuthNoticesFavorites,
  selectAuthNoticesViewed,
} from "../../redux/auth/selectors";
import NoticesItem from "../NoticesItem/NoticesItem";

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState(false);
  const favorites = useSelector(selectAuthNoticesFavorites);
  const viewed = useSelector(selectAuthNoticesViewed);

  function renderTabs(selector) {
    return (
      <ul className={css["notise-lists"]}>
        {selector.map((data) => {
          return <NoticesItem key={data._id} notice={data} />;
        })}
      </ul>
    );
  }

  return (
    <div className={css["my-notices-block"]}>
      <div className={css.tabs}>
        <button
          className={css["favorite-tab"]}
          onClick={() => setActiveTab(false)}
        >
          My favorite pets
        </button>
        <button
          className={css["viewed-tab"]}
          onClick={() => setActiveTab(true)}
        >
          Viewed
        </button>
      </div>

      {activeTab ? renderTabs(viewed) : renderTabs(favorites)}
    </div>
  );
};

export default MyNotices;
