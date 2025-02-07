import styled from "styled-components";

export const ArticleContainer = styled.article`
  position: relative;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 24px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: clamp(1rem, 3vw, 1.5rem);
    border-radius: 20px;
  }
`;

export const ArticleTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-align: left;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: clamp(300px, 40vh, 500px);
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  filter: brightness(0.95);

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.05);
  }

  @media (max-width: 768px) {
    height: clamp(200px, 30vh, 300px);
    margin-bottom: 1.5rem;
    border-radius: 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin: 2rem 0;
  padding: 1.25rem;
  background: linear-gradient(
    145deg,
    var(--background-tertiary),
    rgba(255, 255, 255, 0.02)
  );
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 1rem;
    gap: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const AuthorAvatar = styled.img`
  width: clamp(48px, 8vw, 60px);
  height: clamp(48px, 8vw, 60px);
  border-radius: 50%;
  border: 2px solid var(--accent-primary);
  background: var(--background-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.1) rotate(5deg);
    border-color: var(--accent-hover);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    color: var(--text-primary);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  time {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-feature-settings: "tnum";
    letter-spacing: 0.02em;
  }
`;

export const ArticleMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--background-tertiary);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0.75rem;
    gap: 0.75rem;
    margin: 1rem 0;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(var(--accent-primary-rgb), 0.1);
    border-color: rgba(var(--accent-primary-rgb), 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #9333ea;
    opacity: 1;
    flex-shrink: 0;
    fill: currentColor;
    transition: all 0.2s ease;
  }

  &:hover svg {
    color: #a855f7;
    transform: scale(1.1);
  }

  span {
    font-size: 0.9rem;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.875rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const VoteSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);

  span {
    min-width: 4rem;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
`;

export const VoteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.$active ? "var(--accent-primary)" : "var(--text-secondary)"};
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;

  &:hover:not(:disabled) {
    color: var(--accent-primary);
    background: var(--background-tertiary);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;

export const ArticleBody = styled.div`
  line-height: 1.8;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: var(--text-secondary);
  margin: 2rem auto;
  max-width: 70ch;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 1.5rem auto;
  }
`;
