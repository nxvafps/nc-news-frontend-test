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

  const {
    comments,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading: commentsLoading,
    error: commentsError,
  } = useComments(articleId);

  if (articleLoading) {
    return (
      <LoadingMessage role="status" aria-live="polite">
        <span aria-hidden="true">⌛</span> Loading article...
      </LoadingMessage>
    );
  }

  if (articleError) {
    return (
      <ErrorMessage role="alert">
        <span aria-hidden="true">⚠️</span> {articleError}
      </ErrorMessage>
    );
  }

  if (!article) {
    return (
      <ErrorMessage role="alert">
        <span aria-hidden="true">🔍</span> Article not found
      </ErrorMessage>
    );
  }

  return (
    <ArticlePageContainer>
      <nav aria-label="Article navigation">
        <BackButton
          onClick={() => navigate("/")}
          aria-label="Go back to articles list"
        >
          <span aria-hidden="true">←</span> Back to Articles
        </BackButton>
      </nav>

      <main>
        <ArticleContent
          article={article}
          authorAvatar={authorAvatar}
          votes={votes}
          userVote={userVote}
          onVote={handleVote}
          isVoting={isVoting}
        />

        <section aria-label="Article comments">
          {commentsError ? (
            <ErrorMessage role="alert">
              <span aria-hidden="true">⚠️</span> {commentsError}
            </ErrorMessage>
          ) : (
            <CommentsList
              comments={comments}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              isLoading={commentsLoading}
            />
          )}
        </section>
      </main>
    </ArticlePageContainer>
  );
}

export default ArticlePage;
