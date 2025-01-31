export const fetchArticles = async (currentPage, filters) => {
  const queryParams = new URLSearchParams({
    p: currentPage,
    ...filters,
  }).toString();

  const response = await fetch(
    `https://ncnews.novafps.com/api/articles?${queryParams}`
  );
  const data = await response.json();
  return data;
};

export const searchArticles = async (searchTerm) => {
  const response = await fetch(
    `https://ncnews.novafps.com/api/articles/search?q=${encodeURIComponent(
      searchTerm
    )}`
  );
  const data = await response.json();
  return data;
};

export const fetchArticleById = async (articleId) => {
  const response = await fetch(
    `https://ncnews.novafps.com/api/articles/${articleId}`
  );
  const data = await response.json();
  return data.article;
};

export const fetchArticleComments = async (articleId, page) => {
  const response = await fetch(
    `https://ncnews.novafps.com/api/articles/${articleId}/comments?p=${page}`
  );
  const data = await response.json();
  return data;
};
