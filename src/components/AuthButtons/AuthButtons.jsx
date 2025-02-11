import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  LoginButton,
  SignupButton,
} from "./AuthButtonsStyles";

function AuthButtons() {
  const navigate = useNavigate();

  return (
    <ButtonContainer role="group" aria-label="Authentication options">
      <LoginButton
        onClick={() => navigate("/login")}
        aria-label="Log in to your account"
        type="button"
      >
        <span aria-hidden="true">Login</span>
        <span className="sr-only">Log in to your account</span>
      </LoginButton>
      <SignupButton
        onClick={() => navigate("/signup")}
        aria-label="Create a new account"
        type="button"
      >
        <span aria-hidden="true">Sign Up</span>
        <span className="sr-only">Create a new account</span>
      </SignupButton>
    </ButtonContainer>
  );
}

export default AuthButtons;
