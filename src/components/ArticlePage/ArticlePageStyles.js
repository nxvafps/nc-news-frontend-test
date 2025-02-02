import styled from "styled-components";

export const ArticlePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  background-color: #fee2e2;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;
`;

export const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #646cff;
  border-radius: 4px;
  color: #646cff;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: #646cff;
    color: white;
  }
`;
