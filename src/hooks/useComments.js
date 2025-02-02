import { useState, useEffect } from "react";
import { fetchArticleComments } from "../api/articles";

const useComments = (articleId) => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      try {
        const data = await fetchArticleComments(articleId, currentPage);
        setComments(data.comments);
        setTotalPages(Math.ceil(data.total_count / 10));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getComments();
  }, [articleId, currentPage]);

  return {
    comments,
    currentPage,
    totalPages,
    isLoading,
    error,
    setCurrentPage,
  };
};

export default useComments;
