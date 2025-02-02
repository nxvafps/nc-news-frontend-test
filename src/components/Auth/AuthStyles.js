import styled from "styled-components";

export const AuthContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--background-color, #1a1a1a);
  color: white;
  border: 1px solid var(--border-color, #333);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  background: #2d2d2d;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;

  &:focus {
    outline: 2px solid #646cff;
    outline-offset: 2px;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #3a3a3a;
  color: white;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #4a4a4a;
    border-color: #646cff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  line-height: 1;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: #646cff;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  background-color: #fee2e2;
  padding: 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0;
`;
