import styled from "styled-components";

export const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    max-height: 300px;
    margin-bottom: 1rem;
    border-radius: 4px;
  }
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

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
  border: 2px solid #646cff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
  margin: 1rem 0;
  align-items: center;

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
  color: ${(props) => (props.$active ? "#646cff" : "#888")};
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  &:hover {
    color: #646cff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
