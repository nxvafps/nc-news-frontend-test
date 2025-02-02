import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ArticleCard = styled.article`
  position: relative;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  height: 400px;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 350px;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const ArticleContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const ArticleTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.3;
    margin-bottom: 0.25rem;
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #888;
  margin-top: auto;
  padding-top: 0.5rem;
`;

export const ArticleTime = styled.time`
  color: #888;
`;

export const AuthorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`;

export const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background: #1a1a1a;
`;
