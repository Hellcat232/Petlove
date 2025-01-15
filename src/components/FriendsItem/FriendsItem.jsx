import css from "./FriendsItem.module.css";
import workTime from "../../utils/workTime";

const FriendsItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <p className={css["work-time"]}>{workTime(friend)}</p>

      <img
        src={friend.imageUrl}
        alt="Company logo"
        className={css["logo-img"]}
      />
      <h2 className={css.title}>{friend.title}</h2>
      <p className={css["contacts-data"]}>
        Email: <span className={css["contact-value"]}>{friend.email}</span>
      </p>
      <p className={css["contacts-data"]}>
        Address: <span className={css["contact-value"]}>{friend.address}</span>
      </p>
      <p className={css["contacts-data"]}>
        Phone: <span className={css["contact-value"]}>{friend.phone}</span>
      </p>
    </li>
  );
};

export default FriendsItem;
