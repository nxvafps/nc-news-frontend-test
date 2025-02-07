import { useState } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./LogoutButtonStyles";

function LogoutButton({ onLogout, className }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      if (onLogout) await onLogout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledButton
      onClick={handleLogout}
      className={className}
      aria-label="Log out of your account"
      aria-busy={isLoading}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <span className="sr-only">Logging out...</span>
          <span aria-hidden="true">Please wait...</span>
        </>
      ) : (
        <>
          <span className="sr-only">Log out of your account</span>
          <span aria-hidden="true">Logout</span>
        </>
      )}
    </StyledButton>
  );
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func,
  className: PropTypes.string,
};

export default LogoutButton;
