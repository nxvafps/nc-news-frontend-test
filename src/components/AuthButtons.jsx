import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
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

const LoginButton = styled(Button)`
  /* Add any login-specific styles here */
`;

const SignupButton = styled(Button)`
  /* Add any signup-specific styles here */
`;

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
