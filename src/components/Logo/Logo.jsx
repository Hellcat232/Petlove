import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/home">
        <img
          src="/public/logo1x.png"
          srcSet="/public/logo1x.png 1x, /public/logo2x.png 2x"
          alt="logo"
        />
      </NavLink>
    </>
  );
};

export default Logo;
