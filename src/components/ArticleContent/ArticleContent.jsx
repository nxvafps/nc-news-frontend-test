import PropTypes from "prop-types";
import {
  ArticleTitle,
  ArticleImage,
  AuthorSection,
  AuthorAvatar,
  AuthorInfo,
  ArticleMeta,
  ArticleBody,
  VoteButton,
} from "./ArticleContentStyles";

const ArticleContent = ({
  article,
  authorAvatar,
  votes,
  userVote,
  onVote,
  isVoting,
}) => (
  <article>
    <ArticleTitle>{article.title}</ArticleTitle>
    <ArticleImage src={article.article_img_url} alt="" />

    <AuthorSection>
      <AuthorAvatar
        src={authorAvatar || "/default-avatar.png"}
        alt={`${article.author}'s avatar`}
      />
      <AuthorInfo>
        <h3>{article.author}</h3>
        <time dateTime={article.created_at}>
          {new Date(article.created_at).toLocaleDateString()}
        </time>
      </AuthorInfo>
    </AuthorSection>

    <ArticleMeta>
      <span>Topic: {article.topic}</span>
      <span>Comments: {article.comment_count}</span>
      <div>
        <VoteButton
          onClick={() => onVote(1)}
          disabled={isVoting}
          $active={userVote === 1}
          aria-label="Upvote article"
        >
          ↑
        </VoteButton>
        <span>Votes: {votes}</span>
        <VoteButton
          onClick={() => onVote(-1)}
          disabled={isVoting}
          $active={userVote === -1}
          aria-label="Downvote article"
        >
          ↓
        </VoteButton>
      </div>
    </ArticleMeta>

    <ArticleBody>{article.body}</ArticleBody>
  </article>
);

ArticleContent.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    article_img_url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    comment_count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  authorAvatar: PropTypes.string,
  votes: PropTypes.number.isRequired,
  userVote: PropTypes.number.isRequired,
  onVote: PropTypes.func.isRequired,
  isVoting: PropTypes.bool.isRequired,
};

export default ArticleContent;
