import styled from "styled-components";

export const ArticlePageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  background-color: #fee2e2;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;

  @media (max-width: 768px) {
    margin: 1rem auto;
    padding: 0.75rem;
    font-size: 0.9rem;
    max-width: 90%;
  }
`;

export const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #646cff;
  border-radius: 4px;
  color: #646cff;
  cursor: pointer;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 200px;
  }

  &:hover {
    background: #646cff;
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }
`;
