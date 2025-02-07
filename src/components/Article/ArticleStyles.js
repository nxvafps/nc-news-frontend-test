import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%; // Ensure link takes full height of grid cell
  outline: none;

  &:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 8px;
    border-radius: 24px;
  }
`;

export const ArticleCard = styled.article`
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%; // Take full height of parent
  min-height: 460px; // Reduced from 500px to match smaller content
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px) scale(1.01);
      border-color: var(--accent-primary);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(var(--accent-primary-rgb), 0.2);
    }
  }

  @media (max-width: 768px) {
    min-height: 360px; // Reduced from 380px
  }

  @media (max-width: 480px) {
    min-height: 320px; // Reduced from 340px
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  filter: brightness(0.95);

  @media (hover: hover) {
    ${ArticleCard}:hover & {
      transform: scale(1.05);
      filter: brightness(1.05);
    }
  }

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ArticleContent = styled.div`
  padding: clamp(1rem, 4vw, 1.5rem);
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.75rem;
`;

export const ArticleTitle = styled.h2`
  flex: 0 0 auto; // Changed from flex: 1 to prevent excessive growth
  margin: 0;
  padding-bottom: 0.75rem;
  font-size: clamp(1rem, 2.5vw, 1.25rem); // Reduced font size
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2; // Reduced from 3 to 2 lines
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: -0.01em;
  min-height: 0;
  max-height: calc(1.4em * 2); // Force 2 lines maximum height
`;

export const ArticleMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-top: auto; // Pushes meta to the bottom
  padding-top: 1rem;
  position: relative;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.02) 40%);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 2.75rem; // Increased to ensure space for date
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  min-width: 0; // Added to help with text overflow

  &:hover {
    background: rgba(var(--accent-primary-rgb), 0.1);
    border-color: rgba(var(--accent-primary-rgb), 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
    fill: var(--accent-primary);
    opacity: 0.85;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0; // Added to help with text overflow
  }

  &:hover svg {
    transform: scale(1.1);
    opacity: 1;
  }

  @media (max-width: 479px) {
    padding: 0.375rem;
    font-size: 0.8125rem;

    svg {
      width: 1rem;
      height: 1rem;
    }

    span {
      font-size: 0.8125rem;
    }
  }
`;

export const ArticleTime = styled.time`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--text-secondary);
  font-size: 0.8125rem;
  opacity: 0.8;
  font-feature-settings: "tnum";
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2)
  );
  padding: 0.5rem clamp(1.25rem, 5vw, 2rem);
  backdrop-filter: blur(8px);
  letter-spacing: 0.02em;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const AuthorContainer = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 1;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
`;

export const AuthorAvatar = styled.img`
  width: clamp(40px, 6vw, 48px);
  height: clamp(40px, 6vw, 48px);
  border-radius: 50%;
  border: 2px solid var(--accent-primary);
  background-color: var(--background-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (hover: hover) {
    &:hover {
      transform: scale(1.15) rotate(5deg);
      border-color: var(--accent-secondary);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  }
`;
