import clsx from "clsx";

const getNavLinkClass = (isActive, active, notActive) => {
  return clsx(isActive ? active : notActive);
};

export default getNavLinkClass;
