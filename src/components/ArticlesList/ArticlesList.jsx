import { useEffect } from "react";
import { Article, ArticleFilters, Pagination } from "..";
import { useArticlesList, useArticlesSearch } from "../../hooks";

import {
  Container,
  Grid,
  LoadingMessage,
  ErrorMessage,
} from "./ArticlesListStyles";

function ArticlesList() {
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

  const { isSearching, handleSearch } = useArticlesSearch((searchResults) => {
    setArticles(searchResults);
    setTotalPages(1);
  });

  useEffect(() => {
    if (!isSearching) {
      loadArticles();
    }
  }, [currentPage, filters, isSearching, loadArticles]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    updateFilters({ [name]: value });
  };

  if (isLoading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Container>
      <ArticleFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
      />

      <Grid>
        {articles.map((article) => (
          <Article key={article.article_id} article={article} />
        ))}
      </Grid>

      {!isSearching && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </Container>
  );
}

export default ArticlesList;
