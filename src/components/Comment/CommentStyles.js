import styled from "styled-components";

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  padding: 1.75rem;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px var(--shadow-color);
  margin-bottom: 1.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px var(--shadow-color);
    border-color: var(--accent-primary);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.25rem;
    gap: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const AvatarContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 48px;
  height: 48px;

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--accent-primary),
      var(--accent-hover)
    );
    z-index: -1;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent-primary);
  box-shadow: 0 4px 12px var(--shadow-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--background-secondary);

  &:hover {
    transform: scale(1.1) rotate(5deg);
    border-color: var(--accent-hover);
    box-shadow: 0 8px 24px var(--shadow-color);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const CommentContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CommentAuthor = styled.div`
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
`;

export const CommentBody = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
  white-space: pre-line;
`;

export const CommentFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
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
`;

export const VoteButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem;
  background: var(--background-tertiary);
  border-radius: 14px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-1px);
  }

  span {
    min-width: 4rem;
    text-align: center;
    font-variant-numeric: tabular-nums;
    color: var(--text-primary);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    max-width: 240px;
  }
`;

export const VoteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.$active ? "var(--accent-primary)" : "var(--text-secondary)"};
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1.25rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    color: var(--accent-primary);
    background: var(--background-secondary);
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

export const CommentActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 0.75rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: var(--accent-primary);
  cursor: pointer;
  padding: 0.625rem;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-radius: 12px;

  &:hover:not(:disabled) {
    background: var(--background-tertiary);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
