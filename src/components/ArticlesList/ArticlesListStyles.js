import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #121212;
  color: #e0e0e0;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #e0e0e0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  background-color: #2e2e2e;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0.25rem;
    font-size: 0.9rem;
  }
`;

export const ArticleCard = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  background: #1e1e1e;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;
