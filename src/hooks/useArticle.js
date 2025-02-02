import { useEffect, useState } from "react";
import { fetchArticleById } from "../api/articles";

const useArticle = (articleId) => {
  const [article, setArticle] = useState(null);
  const [authorAvatar, setAuthorAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const articleData = await fetchArticleById(articleId);
        setArticle(articleData);

        const userResponse = await fetch(
          `https://ncnews.novafps.com/api/users/${articleData.author}`
        );
        const userData = await userResponse.json();
        setAuthorAvatar(userData.user.avatar_url);
      } catch {
        setError("Failed to fetch article");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  return { article, authorAvatar, isLoading, error };
};

export default useArticle;
