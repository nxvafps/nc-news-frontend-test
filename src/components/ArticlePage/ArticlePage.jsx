import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArticleContent, CommentsList } from "../";
import { useComments, useArticle, useArticleVoting } from "../../hooks";

import {
  ArticlePageContainer,
  LoadingMessage,
  ErrorMessage,
  BackButton,
} from "./ArticlePageStyles";

function ArticlePage() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const {
    article,
    authorAvatar,
    isLoading: articleLoading,
    error: articleError,
  } = useArticle(articleId);
  const { votes, userVote, isVoting, handleVote } = useArticleVoting(
    article?.votes || 0,
    articleId,
    auth
  );
  const { comments, currentPage, totalPages, setCurrentPage } =
    useComments(articleId);

  if (articleLoading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (articleError) return <ErrorMessage>{articleError}</ErrorMessage>;
  if (!article) return <ErrorMessage>Article not found</ErrorMessage>;

  return (
    <ArticlePageContainer>
      <BackButton onClick={() => navigate("/")}>← Back to Articles</BackButton>

      <ArticleContent
        article={article}
        authorAvatar={authorAvatar}
        votes={votes}
        userVote={userVote}
        onVote={handleVote}
        isVoting={isVoting}
      />

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
