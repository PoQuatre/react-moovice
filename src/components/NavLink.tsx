import { FunctionComponent } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  to: string;
}

export const NavLink: FunctionComponent<Props> = ({ children, to }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={`nav-link ${match ? "active" : ""}`} to={to}>
      {children}
    </Link>
  );
};
