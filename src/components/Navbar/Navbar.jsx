import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav, NavList, NavItem, NavLink, AuthContainer } from "./NavbarStyles";
import { AuthButtons, ProfileButton } from "../";

const Navbar = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/articles"
            className={
              location.pathname.startsWith("/articles") ? "active" : ""
            }
          >
            Articles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/topics"
            className={location.pathname === "/topics" ? "active" : ""}
          >
            Topics
          </NavLink>
        </NavItem>
      </NavList>
      <AuthContainer>
        {auth.isAuthenticated ? (
          <ProfileButton user={auth.user} />
        ) : (
          <AuthButtons />
        )}
      </AuthContainer>
    </Nav>
  );
};

export default Navbar;
