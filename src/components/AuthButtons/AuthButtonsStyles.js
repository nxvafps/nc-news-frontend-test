import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 8px 32px var(--shadow-color);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 200px;
    padding: 0.75rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const Button = styled.button`
  padding: 0.875rem 1.5rem;
  background: linear-gradient(
    135deg,
    var(--accent-primary),
    var(--accent-hover)
  );
  color: var(--text-primary);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(var(--accent-primary-rgb), 0.2);
  position: relative;
  overflow: hidden;
  min-width: 120px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(var(--accent-primary-rgb), 0.3);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--accent-muted);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    min-height: 44px;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &::before {
      display: none;
    }
    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;

export const LoginButton = styled(Button)`
  background: var(--background-tertiary);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px var(--shadow-color);

  &:hover:not(:disabled) {
    background: var(--accent-primary);
    border-color: transparent;
  }
`;

export const SignupButton = styled(Button)`
  // Inherits the gradient background from Button
`;
