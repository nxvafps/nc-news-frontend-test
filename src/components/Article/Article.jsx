import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import {
  ArticleLink,
  ArticleCard,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleMeta,
  ArticleTime,
  AuthorContainer,
  AuthorAvatar,
} from "./ArticleStyles";

function Article({ article }) {
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const fetchUserAvatar = async () => {
      try {
        const response = await fetch(
          `https://ncnews.novafps.com/api/users/${article.author}`
        );
        const data = await response.json();
        setUserAvatar(data.user.avatar_url);
      } catch (error) {
        console.error("Failed to fetch user avatar:", error);
      }
    };

    fetchUserAvatar();
  }, [article.author]);

  return (
    <ArticleLink to={`/articles/${article.article_id}`}>
      <ArticleCard>
        <AuthorContainer>
          <AuthorAvatar
            src={userAvatar || "default-avatar-placeholder.png"}
            alt={`${article.author}'s avatar`}
          />
        </AuthorContainer>
        <ArticleImage src={article.article_img_url} alt="" />
        <ArticleContent>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleMeta>
            <span>By {article.author}</span>
            <span>Topic: {article.topic}</span>
            <span>Comments: {article.comment_count}</span>
            <span>Votes: {article.votes}</span>
          </ArticleMeta>
          <ArticleTime dateTime={article.created_at}>
            {new Date(article.created_at).toLocaleDateString()}
          </ArticleTime>
        </ArticleContent>
      </ArticleCard>
    </ArticleLink>
  );
}

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
