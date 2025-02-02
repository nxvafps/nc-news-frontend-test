import styled from "styled-components";

export const CommentsSection = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    margin: 1rem auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const CommentsTitle = styled.h2`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;
