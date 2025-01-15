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
          <a
            href={friend.url || undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={friend.imageUrl}
              alt="Company logo"
              className={css["logo-img"]}
              loading="lazy"
            />
          </a>

          <div className={css["contacts-and-title-container"]}>
            <h2 className={css.title}>{friend.title}</h2>
            <div className={css["email-address-phone-container"]}>
              <p className={css["contacts-data"]}>
                Email:{" "}
                {friend.email ? (
                  <a
                    href={`mailto:${friend.email || undefined}`}
                    className={css["contact-value"]}
                    rel="noopener noreferrer"
                  >
                    {friend.email}
                  </a>
                ) : (
                  <a
                    href={`mailto:${friend.email || undefined}`}
                    className={css["contact-value"]}
                    rel="noopener noreferrer"
                  >{`${friend.title.toLowerCase()}@gmail.com`}</a>
                )}
              </p>

              <p className={css["contacts-data"]}>
                Address:{" "}
                {friend.address ? (
                  <a
                    className={css["contact-value"]}
                    href={friend.addressUrl || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {friend.address}
                  </a>
                ) : (
                  <span className={css.only}>website only</span>
                )}
              </p>

              <p className={css["contacts-data"]}>
                Phone:{" "}
                {friend.phone ? (
                  <a
                    href={friend.phone ? `tel:${friend.phone}` : undefined}
                    className={css["contact-value"]}
                    rel="noopener noreferrer"
                  >
                    {friend.phone}
                  </a>
                ) : (
                  <span className={css.only}>email only</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
