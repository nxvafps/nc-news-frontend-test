import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.875rem 1.5rem;
  background: var(--background-tertiary);
  color: var(--text-primary);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);

  &:hover {
    background: var(--accent-primary);
    transform: translateY(-2px);
    border-color: transparent;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: auto;
    white-space: nowrap;
    padding: 1rem 1.5rem;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
`;
