import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.75rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background: var(--background-secondary);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px var(--shadow-color);
  margin-bottom: 1.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px var(--shadow-color);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

export const AvatarContainer = styled.div`
  flex-shrink: 0;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent-primary);
  box-shadow: 0 4px 12px var(--shadow-color);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const CommentContent = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: var(--text-primary);
  font-weight: 500;
`;

export const CommentBody = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0.75rem 0;
`;

export const CommentFooter = styled.div`
  margin-top: 1rem;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
`;

export const CommentTime = styled.time`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

export const VoteButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const VoteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.$active ? "var(--accent-primary)" : "var(--text-secondary)"};
  cursor: pointer;
  padding: 0.625rem;
  font-size: 1.25rem;
  transition: all 0.2s ease;
  border-radius: 12px;

  &:hover:not(:disabled) {
    background: var(--background-tertiary);
    color: var(--accent-primary);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
