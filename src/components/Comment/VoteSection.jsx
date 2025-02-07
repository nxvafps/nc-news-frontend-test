import { VoteButton, VoteButtons } from "./CommentStyles";
import PropTypes from "prop-types";

const VoteSection = ({ votes, userVote, isVoting, onVote }) => (
  <VoteButtons role="group" aria-label="Comment voting">
    <VoteButton
      onClick={() => onVote(1)}
      disabled={isVoting}
      $active={userVote === 1}
      aria-label="Upvote comment"
      aria-pressed={userVote === 1}
      title="Upvote"
    >
      <span aria-hidden="true">↑</span>
    </VoteButton>
    <span aria-live="polite">
      {votes} {Math.abs(votes) === 1 ? "vote" : "votes"}
    </span>
    <VoteButton
      onClick={() => onVote(-1)}
      disabled={isVoting}
      $active={userVote === -1}
      aria-label="Downvote comment"
      aria-pressed={userVote === -1}
      title="Downvote"
    >
      <span aria-hidden="true">↓</span>
    </VoteButton>
  </VoteButtons>
);

VoteSection.propTypes = {
  votes: PropTypes.number.isRequired,
  userVote: PropTypes.number.isRequired,
  isVoting: PropTypes.bool.isRequired,
  onVote: PropTypes.func.isRequired,
};

export default VoteSection;
