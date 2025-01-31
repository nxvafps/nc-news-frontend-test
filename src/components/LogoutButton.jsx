import PropTypes from "prop-types";

function LogoutButton({ onLogout, className }) {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    if (onLogout) onLogout();
  };

  return (
    <button onClick={handleLogout} className={className} aria-label="Logout">
      Logout
    </button>
  );
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func,
  className: PropTypes.string,
};

export default LogoutButton;
