import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 200px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #3a3a3a;
  color: white;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1rem;

  &:hover {
    background: #4a4a4a;
    border-color: #646cff;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem;
    font-size: 16px; /* Prevents iOS zoom on tap */
    min-height: 44px; /* Minimum touch target size */
    /* Improve tap target size */
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const LoginButton = styled(Button)`
  /* Add any login-specific styles here */
`;

export const SignupButton = styled(Button)`
  /* Add any signup-specific styles here */
`;
