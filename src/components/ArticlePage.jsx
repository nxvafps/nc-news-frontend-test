import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchArticleById, fetchArticleComments } from "../api/articles";
import CommentsList from "./CommentsList";

function ArticlePage() {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        setIsLoading(true);
        const articleData = await fetchArticleById(articleId);
        setArticle(articleData);
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-page">
      <button onClick={handleBack} className="back-button">
        ← Back to Articles
      </button>
      <article className="full-article">
        <h1>{article.title}</h1>
        <img src={article.article_img_url} alt="" className="article-image" />
        <div className="article-meta">
          <span>By {article.author}</span>
          <span>Topic: {article.topic}</span>
          <span>Comments: {article.comment_count}</span>
          <span>Votes: {article.votes}</span>
        </div>
        <time dateTime={article.created_at}>
          {new Date(article.created_at).toLocaleDateString()}
        </time>
        <p className="article-body">{article.body}</p>
      </article>

      <CommentsList
        comments={comments}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ArticlePage;
