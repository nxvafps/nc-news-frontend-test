import styled from "styled-components";

export const CommentContainer = styled.div`
  padding: 1rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  text-align: left;
  display: flex;
  gap: 1rem;
`;

export const AvatarContainer = styled.div`
  flex-shrink: 0;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentContent = styled.div`
  flex-grow: 1;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #888;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
`;

export const CommentBody = styled.p`
  margin: 0.5rem 0;
`;

export const CommentFooter = styled.div`
  margin-top: 0.5rem;
  color: #888;
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
