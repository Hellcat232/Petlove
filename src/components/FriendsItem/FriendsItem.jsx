import css from "./FriendsItem.module.css";
import workTime from "../../utils/workTime";

const FriendsItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <div className={css.content}>
        <div className="flex justify-end">
          <p className={css["work-time"]}>{workTime(friend)}</p>
        </div>

        <div className={css.info}>
          <a href={friend.url} target="_blank" rel="noopener noreferrer">
            <img
              src={friend.imageUrl}
              alt="Company logo"
              className={css["logo-img"]}
            />
          </a>

          <div className={css["contacts-and-title-container"]}>
            <h2 className={css.title}>{friend.title}</h2>
            <div className={css["email-address-phone-container"]}>
              <p className={css["contacts-data"]}>
                Email:{" "}
                <span className={css["contact-value"]}>
                  {friend.email || `${friend.title.toLowerCase()}@gmail.com`}
                </span>
              </p>
              <p className={css["contacts-data"]}>
                Address:{" "}
                <a
                  className={css["contact-value"]}
                  href={friend.addressUrl || null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {friend.address || "website only"}
                </a>
              </p>
              <p className={css["contacts-data"]}>
                Phone:{" "}
                <span className={css["contact-value"]}>
                  {friend.phone || "email only"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
