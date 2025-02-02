import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column on mobile
    gap: 1rem; // Reduce gap on mobile
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  background-color: #fee2e2;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0.25rem;
    font-size: 0.9rem;
  }
`;
