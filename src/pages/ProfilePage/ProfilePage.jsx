import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser, currentUserFullInfo } from "../../redux/auth/operations";

export default function ProfilePage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(currentUser());
  //   dispatch(currentUserFullInfo());
  // }, [dispatch]);
  return (
    <>
      <h1>ProfilePage</h1>
    </>
  );
}
