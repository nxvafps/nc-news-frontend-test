import { useState, useEffect } from "react";
import Article from "./Article";
import ArticleFilters from "./ArticleFilters";
import Pagination from "./Pagination";
import { fetchArticles, searchArticles } from "../api/articles";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  background-color: #fee2e2;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
`;

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState({
    topic: "",
    sort_by: "created_at",
    order: "desc",
    limit: 10,
  });

  useEffect(() => {
    const getArticles = async () => {
      try {
        setIsLoading(true);
        const data = await fetchArticles(currentPage, filters);
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.total_count / filters.limit));
      } catch {
        setError("Failed to fetch articles");
      } finally {
        setIsLoading(false);
      }
    };

    if (!isSearching) {
      getArticles();
    }
  }, [currentPage, filters, isSearching]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCurrentPage(1);
    setIsSearching(false);
  };

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setIsSearching(false);
      return;
    }

    try {
      setIsLoading(true);
      setIsSearching(true);
      const data = await searchArticles(searchTerm);
      setArticles(data.articles);
      setTotalPages(1);
    } catch {
      setError("Failed to search articles");
    } finally {
      setIsLoading(false);
    }
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
