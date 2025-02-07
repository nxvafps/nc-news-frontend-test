import PropTypes from "prop-types";
import { Comment, Pagination } from "..";

import {
  CommentsSection,
  CommentsTitle,
  CommentsContainer,
} from "./CommentsListStyles";

function CommentsList({ comments, currentPage, totalPages, onPageChange }) {
  const commentsCount = comments.length;

  return (
    <CommentsSection>
      <CommentsTitle>
        {commentsCount} {commentsCount === 1 ? "Comment" : "Comments"}
      </CommentsTitle>
      <CommentsContainer
        role="feed"
        aria-busy={false}
        aria-label="Comments section"
      >
        {comments.map((comment) => (
          <div
            key={comment.comment_id}
            role="article"
            tabIndex="0"
            style={{ outline: "none" }}
          >
            <Comment comment={comment} />
          </div>
        ))}
        {comments.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              padding: "2rem",
            }}
          >
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </CommentsContainer>
      {totalPages > 1 && (
        <nav aria-label="Comments pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </nav>
      )}
    </CommentsSection>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment_id: PropTypes.number.isRequired,
      // Add other comment properties that are required
    })
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CommentsList;
