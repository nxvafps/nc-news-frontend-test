import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px var(--shadow-color);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
  }
`;

export const PageButton = styled.button`
  padding: 0.875rem 1.5rem;
  background: var(--accent-primary);
  color: var(--text-primary);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
  font-weight: 500;
  font-size: 1rem;

  &:hover:not(:disabled) {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 200px;
    padding: 1rem;
  }
`;

export const PageInfo = styled.span`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: var(--background-tertiary);
  border-radius: 12px;
  border: 1px solid var(--border-color);

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    order: -1;
    padding: 0.75rem;
  }
`;
