import { useState } from "react";
import { searchArticles } from "../api/articles";

const useArticlesSearch = (onSearch) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setIsSearching(false);
      return;
    }

    try {
      setIsSearching(true);
      const data = await searchArticles(searchTerm);
      onSearch(data.articles);
    } catch {
      throw new Error("Failed to search articles");
    }
  };

  return { isSearching, handleSearch };
};

export default useArticlesSearch;
