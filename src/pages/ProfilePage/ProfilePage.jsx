import css from "./ProfilePage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserFullInfo } from "../../redux/auth/operations";
import { selectNoticesFavoriteList } from "../../redux/notices/selectors";

import UserCard from "../../components/UserCard/UserCard";
import MyNotices from "../../components/MyNotices/MyNotices";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const isChange = useSelector(selectNoticesFavoriteList);

  useEffect(() => {
    if (isChange) {
      dispatch(currentUserFullInfo());
    } else {
      dispatch(currentUserFullInfo());
    }
  }, [dispatch, isChange]);

  return (
    <section className={css["profile-section"]}>
      <UserCard />
      <MyNotices />
    </section>
  );
}
