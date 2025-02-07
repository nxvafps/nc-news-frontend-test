import PropTypes from "prop-types";
import {
  ArticleContainer,
  ArticleTitle,
  ArticleImage,
  AuthorSection,
  AuthorAvatar,
  AuthorInfo,
  ArticleMeta,
  MetaItem,
  VoteSection,
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
}) => {
  const formattedDate = new Date(article.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <ArticleContainer>
      <header>
        <ArticleTitle id={`article-${article.article_id}-title`}>
          {article.title}
        </ArticleTitle>

        <ArticleImage
          src={article.article_img_url}
          alt={`Featured image for article: ${article.title}`}
          loading="lazy"
        />

        <AuthorSection>
          <AuthorAvatar
            src={authorAvatar || "/default-avatar.png"}
            alt={`${article.author}'s profile picture`}
            loading="lazy"
          />
          <AuthorInfo>
            <h3>Written by {article.author}</h3>
            <time
              dateTime={article.created_at}
              aria-label={`Published on ${formattedDate}`}
            >
              {formattedDate}
            </time>
          </AuthorInfo>
        </AuthorSection>

        <ArticleMeta role="list">
          <MetaItem role="listitem" aria-label={`Topic: ${article.topic}`}>
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <span>{article.topic}</span>
          </MetaItem>
          <MetaItem
            role="listitem"
            aria-label={`${article.comment_count} comments`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
            </svg>
            <span>{article.comment_count} comments</span>
          </MetaItem>
          <VoteSection role="group" aria-label="Article voting">
            <VoteButton
              onClick={() => onVote(1)}
              disabled={isVoting}
              $active={userVote === 1}
              aria-label="Upvote article"
              aria-pressed={userVote === 1}
              title="Upvote"
            >
              ↑
            </VoteButton>
            <span aria-live="polite">
              {votes} {Math.abs(votes) === 1 ? "vote" : "votes"}
            </span>
            <VoteButton
              onClick={() => onVote(-1)}
              disabled={isVoting}
              $active={userVote === -1}
              aria-label="Downvote article"
              aria-pressed={userVote === -1}
              title="Downvote"
            >
              ↓
            </VoteButton>
          </VoteSection>
        </ArticleMeta>
      </header>

      <ArticleBody>
        {article.body.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </ArticleBody>
    </ArticleContainer>
  );
};

ArticleContent.propTypes = {
  article: PropTypes.shape({
    article_id: PropTypes.number.isRequired,
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
