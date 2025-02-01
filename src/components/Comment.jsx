import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentContainer = styled.div`
  padding: 1rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  text-align: left;
  display: flex;
  gap: 1rem;
`;

const AvatarContainer = styled.div`
  flex-shrink: 0;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const CommentContent = styled.div`
  flex-grow: 1;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #888;
`;

const CommentAuthor = styled.span`
  font-weight: bold;
`;

const CommentBody = styled.p`
  margin: 0.5rem 0;
`;

const CommentFooter = styled.div`
  margin-top: 0.5rem;
  color: #888;
`;

const CommentTime = styled.time`
  color: #888;
`;

function Comment({ comment }) {
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const fetchUserAvatar = async () => {
      try {
        const response = await fetch(
          `https://ncnews.novafps.com/api/users/${comment.author}`
        );
        const data = await response.json();
        setUserAvatar(data.user.avatar_url);
      } catch (error) {
        console.error("Failed to fetch user avatar:", error);
      }
    };

    fetchUserAvatar();
  }, [comment.author]);

  return (
    <CommentContainer>
      <AvatarContainer>
        <Avatar
          src={userAvatar || "default-avatar-placeholder.png"}
          alt={`${comment.author}'s avatar`}
        />
      </AvatarContainer>
      <CommentContent>
        <CommentHeader>
          <CommentAuthor>{comment.author}</CommentAuthor>
          <CommentTime dateTime={comment.created_at}>
            {new Date(comment.created_at).toLocaleDateString()}
          </CommentTime>
        </CommentHeader>
        <CommentBody>{comment.body}</CommentBody>
        <CommentFooter>
          <span>Votes: {comment.votes}</span>
        </CommentFooter>
      </CommentContent>
    </CommentContainer>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    comment_id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Comment;
