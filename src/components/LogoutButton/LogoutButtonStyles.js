import styled from "styled-components";

export const StyledButton = styled.button`
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
    padding: 0.75rem 1rem;
    font-size: 16px; /* Prevents iOS zoom on tap */
    min-height: 44px; /* Minimum touch target size */
    width: auto;
    white-space: nowrap;
    /* Improve tap target size */
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`;
