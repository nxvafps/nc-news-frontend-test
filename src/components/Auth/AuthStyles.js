import styled from "styled-components";

export const AuthContainer = styled.div`
  max-width: 450px;
  margin: 2.5rem auto;
  padding: 2.5rem;
  background: var(--background-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  box-shadow: 0 8px 32px var(--shadow-color);
  backdrop-filter: blur(12px);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1.75rem;
    margin: 1.5rem auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  padding: 1.125rem;
  background: var(--background-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  width: 100%;
  font-size: 1rem;
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px var(--accent-muted);
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 1.125rem;
  background: var(--accent-primary);
  color: var(--text-primary);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  padding: 0.625rem;
  background: var(--background-tertiary);
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--accent-primary);
    background: var(--background-tertiary);
    transform: scale(1.05);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error-color);
  background: rgba(239, 68, 68, 0.1);
  padding: 1rem;
  border-radius: 12px;
  margin: 0;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
