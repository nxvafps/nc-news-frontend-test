import styled from "styled-components";

export const ArticlePageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  overflow-x: hidden;
  background: #1a1a1a;
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: #e0e0e0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #e0e0e0;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  background-color: #2e2e2e;
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
  background: #2e2e2e;
  border: 1px solid #4f46e5;
  border-radius: 4px;
  color: #4f46e5;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: background 0.3s, color 0.3s;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 200px;
  }

  &:hover {
    background: #4f46e5;
    color: #e0e0e0;
  }

  &:active {
    transform: scale(0.98);
  }
`;
