import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

const Button = styled.button`
  padding: 0.4rem 0.875rem;
  color: var(--text-primary);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;
  background: transparent;
  border: none;

  &:hover:not(:disabled) {
    background: rgba(var(--accent-primary-rgb), 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-muted);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.75rem;
    font-size: 0.875rem;
  }
`;

export const LoginButton = styled(Button)`
  &:hover:not(:disabled) {
    color: var(--accent-primary);
  }
`;

export const SignupButton = styled(Button)`
  background: var(--accent-primary);
  color: var(--text-primary);

  &:hover:not(:disabled) {
    background: var(--accent-hover);
  }
`;
