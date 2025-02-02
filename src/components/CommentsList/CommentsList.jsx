import PropTypes from "prop-types";
import { Comment, Pagination } from "..";

import {
  CommentsSection,
  CommentsTitle,
  CommentsContainer,
} from "./CommentsListStyles";

function CommentsList({ comments, currentPage, totalPages, onPageChange }) {
  return (
    <CommentsSection>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentsContainer>
        {comments.map((comment) => (
          <Comment key={comment.comment_id} comment={comment} />
        ))}
      </CommentsContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </CommentsSection>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CommentsList;
