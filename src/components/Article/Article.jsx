import PropTypes from "prop-types";
import { useState, useEffect, memo } from "react";
import {
  ArticleLink,
  ArticleCard,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleMeta,
  MetaItem,
  ArticleTime,
  AuthorContainer,
  AuthorAvatar,
} from "./ArticleStyles";

const Article = memo(function Article({ article }) {
  const [userAvatar, setUserAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUserAvatar = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://ncnews.novafps.com/api/users/${article.author}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Failed to fetch avatar");
        const data = await response.json();
        setUserAvatar(data.user.avatar_url);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch user avatar:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserAvatar();
    return () => controller.abort();
  }, [article.author]);

  const formattedDate = new Date(article.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <ArticleLink
      to={`/articles/${article.article_id}`}
      aria-labelledby={`article-${article.article_id}-title`}
    >
      <ArticleCard>
        <AuthorContainer>
          <AuthorAvatar
            src={userAvatar || "/default-avatar-placeholder.png"}
            alt={`${article.author}'s profile picture`}
            loading="lazy"
            style={{
              opacity: isLoading ? 0.6 : 1,
              transform: isLoading ? "scale(0.95)" : "scale(1)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </AuthorContainer>
        <ArticleImage
          src={article.article_img_url}
          alt=""
          loading="lazy"
          role="presentation"
          onLoad={handleImageLoad}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transform: imageLoaded ? "scale(1)" : "scale(1.05)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <ArticleContent>
          <ArticleTitle id={`article-${article.article_id}-title`}>
            {article.title}
          </ArticleTitle>
          <ArticleMeta role="list">
            <MetaItem
              role="listitem"
              aria-label={`Topic: ${article.topic}`}
              title={`Article topic: ${article.topic}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              <span>{article.topic}</span>
            </MetaItem>
            <MetaItem
              role="listitem"
              aria-label={`${article.votes} votes`}
              title={`This article has ${article.votes} votes`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
              </svg>
              <span>{article.votes}</span>
            </MetaItem>
            <MetaItem
              role="listitem"
              aria-label={`${article.comment_count} comments`}
              title={`${article.comment_count} comments on this article`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
              </svg>
              <span>{article.comment_count}</span>
            </MetaItem>
            <MetaItem
              role="listitem"
              aria-label={`Author: ${article.author}`}
              title={`Written by ${article.author}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>{article.author}</span>
            </MetaItem>
          </ArticleMeta>
          <ArticleTime
            dateTime={article.created_at}
            aria-label={`Published on ${formattedDate}`}
            title={`Published on ${formattedDate}`}
          >
            {formattedDate}
          </ArticleTime>
        </ArticleContent>
      </ArticleCard>
    </ArticleLink>
  );
});

Article.propTypes = {
  article: PropTypes.shape({
    article_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    article_img_url: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    comment_count: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
