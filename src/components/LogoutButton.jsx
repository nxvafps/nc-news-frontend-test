import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background: #3a3a3a;
  color: white;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #4a4a4a;
    border-color: #646cff;
  }
`;

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
