import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ArticleCard = styled.article`
  position: relative;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  height: 400px;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ArticleTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #888;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const ArticleTime = styled.time`
  color: #888;
`;

const AuthorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`;

const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background: #1a1a1a;
`;

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
