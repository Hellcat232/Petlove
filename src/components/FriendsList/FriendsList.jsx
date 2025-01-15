import css from "./FriendsList.module.css";
import FriendsItem from "../FriendsItem/FriendsItem";
import { useSelector } from "react-redux";
import { selectFriendsItems } from "../../redux/friends/selectors";

const FriendsList = () => {
  const isFriends = useSelector(selectFriendsItems);

  return (
    <ul>
      {isFriends !== null &&
        isFriends.map((friend) => {
          return <FriendsItem key={friend._id} friend={friend} />;
        })}
    </ul>
  );
};

export default FriendsList;
