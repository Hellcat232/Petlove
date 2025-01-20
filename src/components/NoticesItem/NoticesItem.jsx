import css from "./NoticesItem.module.css";

const NoticesItem = ({ notice }) => {
  return (
    <li className={css.card}>
      <img
        src={notice.imgURL}
        alt="notice image"
        className={css["notice-img"]}
      />

      <div className={css["info-block"]}>
        <div className={css["title-and-list"]}>
          <h2 className={css.title}>{notice.title}</h2>

          <ul className={css["about-list"]}>
            <li className={css["about-item"]}>
              <p className={css.name}>Name</p>
              <span className={css.span}>{notice.name}</span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Birthday</p>
              <span className={css.span}>{notice.birthday}</span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Sex</p>
              <span className={css.span}>{notice.sex}</span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Species</p>
              <span className={css.span}>{notice.species}</span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Category</p>
              <span className={css.span}>{notice.category}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className={css.comment}>{notice.comment}</p>
        </div>

        <div>
          {/* <p className={css.price}>{notice.price && `$${notice.price}`}</p> */}
          <p className={notice.price ? css.price : css["price-hidden"]}>
            {`$${notice.price}.99`}
          </p>

          <button type="button" className={css["learn-more-btn"]}>
            Learn more
          </button>
        </div>
      </div>
    </li>
  );
};

export default NoticesItem;
