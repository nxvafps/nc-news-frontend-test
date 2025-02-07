import styled from "styled-components";

export const CommentsSection = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
  background: rgba(26, 26, 26, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 1rem auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const CommentsTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  background: #1a1a1a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  background: #1a1a1a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CommentTime = styled.time`
  color: #888;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const CommentBody = styled.p`
  color: #ddd;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const CommentActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #646cff;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  transition: color 0.2s;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }

  &:hover {
    color: #4a9eff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
