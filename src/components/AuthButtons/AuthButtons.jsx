import PropTypes from "prop-types";

import {
  ButtonContainer,
  LoginButton,
  SignupButton,
} from "./AuthButtonsStyles";

function AuthButtons({ onLoginClick, onSignupClick }) {
  return (
    <ButtonContainer>
      <LoginButton onClick={onLoginClick}>Login</LoginButton>
      <SignupButton onClick={onSignupClick}>Sign Up</SignupButton>
    </ButtonContainer>
  );
}

AuthButtons.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onSignupClick: PropTypes.func.isRequired,
};

export default AuthButtons;
