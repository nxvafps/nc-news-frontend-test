import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchArticleById, fetchArticleComments } from "../api/articles";
import CommentsList from "./CommentsList";

const ArticlePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  background-color: #fee2e2;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #646cff;
  border-radius: 4px;
  color: #646cff;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: #646cff;
    color: white;
  }
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1f2937;
`;

const ArticleImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const AuthorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #646cff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleMeta = styled.div`
  display: flex;
  gap: 2rem;
  color: #666;
  margin: 1rem 0;
`;

const ArticleBody = styled.p`
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 2rem 0;
`;

function ArticlePage() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authorAvatar, setAuthorAvatar] = useState(null);

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        setIsLoading(true);
        const articleData = await fetchArticleById(articleId);
        setArticle(articleData);

        const userResponse = await fetch(
          `https://ncnews.novafps.com/api/users/${articleData.author}`
        );
        const userData = await userResponse.json();
        setAuthorAvatar(userData.user.avatar_url);
      } catch {
        setError("Failed to fetch article");
      }
    };
    getArticle();
  }, [articleId]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const data = await fetchArticleComments(articleId, currentPage);
        setComments(data.comments);
        setTotalPages(Math.ceil(data.total_count / 10));
      } catch {
        setError("Failed to fetch comments");
      } finally {
        setIsLoading(false);
      }
    };
    getComments();
  }, [articleId, currentPage]);

  if (isLoading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!article) return <ErrorMessage>Article not found</ErrorMessage>;

  return (
    <ArticlePageContainer>
      <BackButton onClick={handleBack}>← Back to Articles</BackButton>

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
          <span>Votes: {article.votes}</span>
        </ArticleMeta>

        <ArticleBody>{article.body}</ArticleBody>
      </article>

      <CommentsList
        comments={comments}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </ArticlePageContainer>
  );
}

export default ArticlePage;
