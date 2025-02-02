import PropTypes from "prop-types";

import { StyledButton } from "./LogoutButtonStyles";

function LogoutButton({ onLogout, className }) {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    if (onLogout) onLogout();
  };

  return (
    <StyledButton
      onClick={handleLogout}
      className={className}
      aria-label="Logout"
    >
      Logout
    </StyledButton>
  );
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func,
  className: PropTypes.string,
};

export default LogoutButton;
