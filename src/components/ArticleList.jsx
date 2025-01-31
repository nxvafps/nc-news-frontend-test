import { useState, useEffect } from "react";
import Article from "./Article";
import ArticleFilters from "./ArticleFilters";
import Pagination from "./Pagination";
import { fetchArticles, searchArticles } from "../api/articles";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="articles-container">
      <ArticleFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
      />

      <div className="articles-grid">
        {articles.map((article) => (
          <Article key={article.article_id} article={article} />
        ))}
      </div>

      {!isSearching && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default ArticlesList;
