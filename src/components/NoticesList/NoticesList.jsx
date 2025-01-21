import css from "./NoticesList.module.css";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useSelector } from "react-redux";
import { selectNotices } from "../../redux/notices/selectors";

const NoticesList = ({ setModalOpen }) => {
  const isNoticesItem = useSelector(selectNotices);
  return (
    <ul className={css["notice-list"]}>
      {isNoticesItem !== null &&
        isNoticesItem.map((notice) => {
          return (
            <NoticesItem
              key={notice._id}
              notice={notice}
              setModalOpen={setModalOpen}
            />
          );
        })}
    </ul>
  );
};

export default NoticesList;
