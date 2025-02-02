import { useState, useCallback } from "react";
import { fetchArticles as fetchArticlesApi } from "../api/articles";

const useArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    topic: "",
    sort_by: "created_at",
    order: "desc",
    limit: 10,
  });

  const loadArticles = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchArticlesApi(currentPage, filters);
      setArticles(data.articles);
      setTotalPages(Math.ceil(data.total_count / filters.limit));
    } catch {
      setError("Failed to fetch articles");
      setArticles([]);
      setTotalPages(0);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, filters]);

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
    setCurrentPage(1);
  };

  return {
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
  };
};

export default useArticlesList;
