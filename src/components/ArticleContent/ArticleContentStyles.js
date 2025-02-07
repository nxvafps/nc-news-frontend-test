import styled from "styled-components";

export const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px var(--shadow-color);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    max-height: 300px;
    margin-bottom: 1rem;
    border-radius: 12px;
  }
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
  background: var(--background-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    margin: 1rem 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const AuthorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid var(--accent-primary);
  box-shadow: 0 4px 8px var(--shadow-color);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-primary);

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--text-secondary);
  margin: 1rem 0;
  align-items: center;
  padding: 0.75rem;
  background: var(--background-tertiary);
  border-radius: 12px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;

    > div {
      width: 100%;
      justify-content: center;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const ArticleBody = styled.p`
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 2rem 0;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 1rem 0;
    padding: 0 0.5rem;
  }
`;

export const VoteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.$active ? "var(--accent-primary)" : "var(--text-secondary)"};
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  border-radius: 8px;

  &:hover:not(:disabled) {
    color: var(--accent-primary);
    background: var(--background-tertiary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
