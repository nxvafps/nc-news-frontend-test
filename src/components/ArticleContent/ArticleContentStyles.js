import styled from "styled-components";

export const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

export const ArticleImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

export const AuthorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #646cff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
  margin: 1rem 0;
  align-items: center;

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
`;

export const VoteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => (props.$active ? "#646cff" : "#888")};
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1.5rem;

  &:hover {
    color: #646cff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
