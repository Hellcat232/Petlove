import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";

const Logo = () => {
  const matchHome = useMatch("/home");

  return (
    <>
      <NavLink to="/home">
        {!matchHome && (
          <img
            src="/logo1x.png"
            srcSet="/logo1x.png 1x, /logo2x.png 2x"
            alt="logo"
          />
        )}

        {matchHome && (
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/home-page-logo-tablet1x.png 1x, /home-page-logo-tablet2x.png 2x"
            />

            <source
              media="(min-width:375px)"
              srcSet="/home-page-logo-mob1x.png 1x, /home-page-logo-mob2x.png 2x"
            />

            <source
              media="(max-width:374px)"
              srcSet="/home-page-logo-mob1x.png 1x, /home-page-logo-mob2x.png 2x"
            />

            <img
              src="/home-page-logo-tablet1x.png"
              alt="Click here!"
              srcSet="/home-page-logo-tablet1x.png 1x, /home-page-logo-tablet2x.png 2x"
            />
          </picture>
        )}
      </NavLink>
    </>
  );
};

export default Logo;
