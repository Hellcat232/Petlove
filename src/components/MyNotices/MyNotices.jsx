import css from "./MyNotices.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  selectAuthNoticesFavorites,
  selectAuthNoticesViewed,
} from "../../redux/auth/selectors";
import { noticesFavoriteRemoveById } from "../../redux/notices/operation";
import NoticesItem from "../NoticesItem/NoticesItem";
import NoticesList from "../NoticesList/NoticesList";

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState(false);
  const [viewedTab, setViewedTab] = useState(true);
  const dispatch = useDispatch();
  const favorites = useSelector(selectAuthNoticesFavorites);
  const viewed = useSelector(selectAuthNoticesViewed);
  const [added, setAdded] = useState(false);

  function handleRemoveFavoriteMyNotices(id) {
    dispatch(noticesFavoriteRemoveById(id));
    setAdded(false);
  }

  function renderTabs(selector, viewedTab) {
    return (
      <NoticesList
        selector={selector}
        handleRemoveFavorite={handleRemoveFavoriteMyNotices}
        setAdded={setAdded}
        added={added}
        viewedTab={viewedTab}
      />
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

      {activeTab ? renderTabs(viewed, viewedTab) : renderTabs(favorites)}
    </div>
  );
};

export default MyNotices;
