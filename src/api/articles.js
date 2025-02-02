import axios from "axios";

const api = axios.create({
  baseURL: "https://ncnews.novafps.com/api/articles",
  timeout: 5000,
});

export const fetchArticles = async (currentPage, filters) => {
  const { data } = await api.get("/", {
    params: {
      p: currentPage,
      ...filters,
    },
  });
  return data;
};

export const searchArticles = async (searchTerm) => {
  const { data } = await api.get("/search", {
    params: {
      q: searchTerm,
    },
  });
  return data;
};

export const fetchArticleById = async (articleId) => {
  const { data } = await api.get(`/${articleId}`);
  return data.article;
};

export const fetchArticleComments = async (articleId, page) => {
  const { data } = await api.get(`/${articleId}/comments`, {
    params: {
      p: page,
    },
  });
  return data;
};

export const updateArticleVotes = async (articleId, voteChange, token) => {
  const { data } = await api.patch(
    `/${articleId}`,
    { inc_votes: voteChange },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};
