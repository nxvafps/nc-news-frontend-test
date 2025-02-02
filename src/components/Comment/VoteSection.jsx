import { VoteButton, VoteButtons } from "./CommentStyles";
import PropTypes from "prop-types";

const VoteSection = ({ votes, userVote, isVoting, onVote }) => (
  <VoteButtons>
    <VoteButton
      onClick={() => onVote(1)}
      disabled={isVoting}
      $active={userVote === 1}
      aria-label="Upvote"
    >
      ↑
    </VoteButton>
    <span>Votes: {votes}</span>
    <VoteButton
      onClick={() => onVote(-1)}
      disabled={isVoting}
      $active={userVote === -1}
      aria-label="Downvote"
    >
      ↓
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
