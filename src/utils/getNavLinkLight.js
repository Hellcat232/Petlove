import clsx from "clsx";

const getNavLinkClass = (isActive, active, notActive) =>
  clsx(isActive ? active : notActive);

export default getNavLinkClass;
