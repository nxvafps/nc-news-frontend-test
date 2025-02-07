import styled from "styled-components";

export const CommentsSection = styled.section`
  max-width: 800px;
  margin: 2.5rem auto;
  padding: 2rem;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  border: 1px solid var(--border-color);
  border-radius: 24px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px var(--shadow-color);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin: 1.5rem auto;
    padding: 1.5rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const CommentsTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--text-primary);
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background: linear-gradient(
    145deg,
    var(--background-tertiary),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow: 0 4px 16px var(--shadow-color);
  margin-bottom: 2rem;
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const CommentItem = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  background: var(--background-secondary);
  box-shadow: 0 4px 12px var(--shadow-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent-primary);
    box-shadow: 0 8px 24px var(--shadow-color);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
`;

export const CommentTime = styled.time`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-feature-settings: "tnum";
  letter-spacing: 0.02em;
  padding: 0.5rem 0.75rem;
  background: var(--background-tertiary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const CommentBody = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  white-space: pre-line;
  margin: 0.75rem 0;
`;

export const CommentActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.75rem;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: var(--accent-primary);
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;

  &:hover:not(:disabled) {
    color: var(--accent-hover);
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

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;
