import styled from "styled-components";

export const CommentContainer = styled.div`
  padding: 1rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  text-align: left;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.75rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const AvatarContainer = styled.div`
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const CommentContent = styled.div`
  flex-grow: 1;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #888;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const CommentAuthor = styled.span`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CommentBody = styled.p`
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
    margin: 0.75rem 0;
  }
`;

export const CommentFooter = styled.div`
  margin-top: 0.5rem;
  color: #888;

  @media (max-width: 768px) {
    margin-top: 0.75rem;
    display: flex;
    justify-content: center;
  }
`;

export const CommentTime = styled.time`
  color: #888;
`;

export const VoteButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const VoteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => (props.$active ? "#646cff" : "#888")};
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #646cff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
