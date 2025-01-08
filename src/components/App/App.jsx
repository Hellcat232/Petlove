import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const NewsPage = lazy(() => import("../../pages/NewsPage/NewsPage"));
const NoticesPage = lazy(() => import("../../pages/NoticesPage/NoticesPage"));
const AddPetPage = lazy(() => import("../../pages/AddPetPage/AddPetPage"));
const OurFriendsPage = lazy(() =>
  import("../../pages/OurFriendsPage/OurFriendsPage")
);
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ProfilePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add-pet" element={<AddPetPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
