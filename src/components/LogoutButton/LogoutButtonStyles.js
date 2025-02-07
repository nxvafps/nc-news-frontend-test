import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  padding: 1.125rem 1.75rem;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px var(--shadow-color);
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

  &:hover {
    background: var(--accent-primary);
    transform: translateY(-2px);
    border-color: transparent;
    box-shadow: 0 12px 48px rgba(var(--accent-primary-rgb), 0.3);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--accent-muted);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    width: 100%;
    max-width: 200px;
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
    &:hover {
      transform: none;
    }
  }
`;
