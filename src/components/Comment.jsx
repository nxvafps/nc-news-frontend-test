import PropTypes from "prop-types";

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{comment.author}</span>
        <time dateTime={comment.created_at}>
          {new Date(comment.created_at).toLocaleDateString()}
        </time>
      </div>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-footer">
        <span>Votes: {comment.votes}</span>
      </div>
    </div>
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
