import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background: #3a3a3a;
  color: white;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 100px;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.9rem;
    min-width: 80px;
    /* Increase touch target size */
    min-height: 44px;
  }

  &:hover:not(:disabled) {
    background: #4a4a4a;
    border-color: #646cff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  color: #888;
  font-size: 0.9rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
`;
