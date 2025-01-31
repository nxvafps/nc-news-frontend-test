import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Article({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`} className="article-link">
      <article className="article-card">
        <img src={article.article_img_url} alt="" className="article-image" />
        <div className="article-content">
          <h2>{article.title}</h2>
          <div className="article-meta">
            <span>By {article.author}</span>
            <span>Topic: {article.topic}</span>
            <span>Comments: {article.comment_count}</span>
            <span>Votes: {article.votes}</span>
          </div>
          <time dateTime={article.created_at}>
            {new Date(article.created_at).toLocaleDateString()}
          </time>
        </div>
      </article>
    </Link>
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
