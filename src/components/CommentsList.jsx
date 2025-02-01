import PropTypes from "prop-types";
import styled from "styled-components";
import Comment from "./Comment";
import Pagination from "./Pagination";

const CommentsSection = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const CommentsTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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
