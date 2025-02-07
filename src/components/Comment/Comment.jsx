import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useUserAvatar, useCommentVoting } from "../../hooks";
import CommentAvatar from "./CommentAvatar";
import VoteSection from "./VoteSection";
import {
  CommentContainer,
  CommentContent,
  CommentHeader,
  CommentAuthor,
  CommentBody,
  CommentFooter,
  CommentTime,
} from "./CommentStyles";

function Comment({ comment }) {
  const auth = useSelector((state) => state.auth);
  const avatar = useUserAvatar(comment.author);
  const { votes, userVote, isVoting, handleVote } = useCommentVoting(
    comment.votes,
    comment.comment_id,
    auth
  );

  const formattedDate = new Date(comment.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <CommentContainer role="article">
      <CommentAvatar author={comment.author} avatarUrl={avatar} />
      <CommentContent>
        <CommentHeader>
          <CommentAuthor>{comment.author}</CommentAuthor>
          <CommentTime
            dateTime={comment.created_at}
            aria-label={`Posted on ${formattedDate}`}
            title={`Posted on ${formattedDate}`}
          >
            {formattedDate}
          </CommentTime>
        </CommentHeader>
        <CommentBody>{comment.body}</CommentBody>
        <CommentFooter>
          <VoteSection
            votes={votes}
            userVote={userVote}
            isVoting={isVoting}
            onVote={handleVote}
          />
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
