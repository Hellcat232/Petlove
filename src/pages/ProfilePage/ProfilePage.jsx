import css from "./ProfilePage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUserFullInfo } from "../../redux/auth/operations";
import UserCard from "../../components/UserCard/UserCard";
import MyNotices from "../../components/MyNotices/MyNotices";

export default function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserFullInfo());
  }, [dispatch]);
  return (
    <section className={css["profile-section"]}>
      {/* <h1>ProfilePage</h1> */}
      <UserCard />
      <MyNotices />
    </section>
  );
}
