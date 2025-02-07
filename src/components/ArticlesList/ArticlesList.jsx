import { useEffect, useCallback, memo } from "react";
import { Article, ArticleFilters, Pagination } from "..";
import { useArticlesList, useArticlesSearch } from "../../hooks";
import {
  Container,
  Grid,
  LoadingMessage,
  ErrorMessage,
} from "./ArticlesListStyles";

const ArticlesList = memo(function ArticlesList() {
  const {
    articles,
    currentPage,
    totalPages,
    isLoading,
    error,
    filters,
    setCurrentPage,
    updateFilters,
    loadArticles,
    setArticles,
    setTotalPages,
  } = useArticlesList();

  const handleSearchResults = useCallback(
    (searchResults) => {
      setArticles(searchResults);
      setTotalPages(1);
    },
    [setArticles, setTotalPages]
  );

  const { isSearching, handleSearch } = useArticlesSearch(handleSearchResults);

  useEffect(() => {
    if (!isSearching) {
      loadArticles();
    }
  }, [currentPage, filters, isSearching, loadArticles]);

  const handleFilterChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      updateFilters({ [name]: value });
    },
    [updateFilters]
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingMessage role="status" aria-live="polite" aria-busy="true">
          <span aria-hidden="true">⌛</span> Loading articles...
        </LoadingMessage>
      );
    }

    if (error) {
      return (
        <ErrorMessage role="alert" aria-live="assertive">
          <span aria-hidden="true">⚠️</span> {error}
        </ErrorMessage>
      );
    }

    if (!articles.length) {
      return (
        <ErrorMessage role="alert" aria-live="polite">
          <span aria-hidden="true">🔍</span>
          {isSearching
            ? "No articles found matching your search"
            : "No articles found"}
        </ErrorMessage>
      );
    }

    return (
      <>
        <Grid role="feed" aria-busy={isLoading} aria-label="Articles grid">
          {articles.map((article) => (
            <div key={article.article_id} role="article" tabIndex="0">
              <Article article={article} />
            </div>
          ))}
        </Grid>
        {!isSearching && articles.length > 0 && (
          <nav aria-label="Articles pagination" role="navigation">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              disabled={isLoading}
            />
          </nav>
        )}
      </>
    );
  };

  return (
    <Container>
      <header>
        <h1 className="sr-only">Articles List</h1>
        <ArticleFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          isSearching={isSearching}
          disabled={isLoading}
        />
      </header>
      <main>{renderContent()}</main>
    </Container>
  );
});

export default ArticlesList;
