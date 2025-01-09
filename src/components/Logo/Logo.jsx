import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/home">
        <img
          src="/logo1x.png"
          srcSet="/logo1x.png 1x, /logo2x.png 2x"
          alt="logo"
        />
      </NavLink>
    </>
  );
};

export default Logo;
