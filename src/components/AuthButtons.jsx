import PropTypes from "prop-types";

function AuthButtons({ onLoginClick, onSignupClick }) {
  return (
    <div className="auth-buttons">
      <button onClick={onLoginClick} className="login-btn">
        Login
      </button>
      <button onClick={onSignupClick} className="signup-btn">
        Sign Up
      </button>
    </div>
  );
}

AuthButtons.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onSignupClick: PropTypes.func.isRequired,
};

export default AuthButtons;
