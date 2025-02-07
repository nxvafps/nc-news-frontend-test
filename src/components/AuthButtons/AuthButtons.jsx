import PropTypes from "prop-types";

import {
  ButtonContainer,
  LoginButton,
  SignupButton,
} from "./AuthButtonsStyles";

function AuthButtons({ onLoginClick, onSignupClick }) {
  return (
    <ButtonContainer role="group" aria-label="Authentication options">
      <LoginButton
        onClick={onLoginClick}
        aria-label="Log in to your account"
        type="button"
      >
        <span aria-hidden="true">Login</span>
        <span className="sr-only">Log in to your account</span>
      </LoginButton>
      <SignupButton
        onClick={onSignupClick}
        aria-label="Create a new account"
        type="button"
      >
        <span aria-hidden="true">Sign Up</span>
        <span className="sr-only">Create a new account</span>
      </SignupButton>
    </ButtonContainer>
  );
}

AuthButtons.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onSignupClick: PropTypes.func.isRequired,
};

export default AuthButtons;
