import css from "./OurFriendsPage.module.css";
import Title from "../../components/Title/Title";
import FriendsList from "../../components/FriendsList/FriendsList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFriends } from "../../redux/friends/operation";

export default function OurFriendsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <section className={css["our-friends-section"]}>
      <Title>Our friends</Title>

      <FriendsList />
    </section>
  );
}
