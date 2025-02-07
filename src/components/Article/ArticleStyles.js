import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

export const ArticleCard = styled.article`
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  background: var(--background-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 420px;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 24px var(--shadow-color);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent-primary);
    box-shadow: 0 12px 32px var(--shadow-color);
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 380px;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ArticleCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const ArticleContent = styled.div`
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const ArticleTitle = styled.h2`
  margin: 0 0 1.25rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-color);
`;

export const ArticleTime = styled.time`
  color: var(--text-secondary);
`;

export const AuthorContainer = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 1;
`;

export const AuthorAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--accent-primary);
  box-shadow: 0 4px 12px var(--shadow-color);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
