import PropTypes from "prop-types";
import Comment from "./Comment";
import Pagination from "./Pagination";

function CommentsList({ comments, currentPage, totalPages, onPageChange }) {
  return (
    <section className="comments-section">
      <h2>Comments</h2>
      <div className="comments-list">
        {comments.map((comment) => (
          <Comment key={comment.comment_id} comment={comment} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CommentsList;
