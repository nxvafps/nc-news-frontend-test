import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--accent-primary);
    background: rgba(var(--accent-primary-rgb), 0.1);
  }

  &.active {
    color: var(--accent-primary);
    background: rgba(var(--accent-primary-rgb), 0.15);
  }
`;

export const AuthContainer = styled.div`
  margin-left: auto;
  padding-left: 1rem;
`;
