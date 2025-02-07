import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 200px;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #1e1e1e;
  color: #e0e0e0;
  border: 1px solid #333;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #2a2a2a;
    border-color: #646cff;
    transform: translateY(-2px);
  }

  &:active {
    background: #333;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
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
