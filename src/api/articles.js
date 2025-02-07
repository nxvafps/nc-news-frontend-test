import axios from "axios";

const api = axios.create({
  baseURL: "https://ncnews.novafps.com/api/articles",
  timeout: 5000,
});

export const fetchArticles = async (currentPage, filters) => {
  try {
    const { data } = await api.get("/", {
      params: {
        p: currentPage,
        ...filters,
      },
    });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`
    );
  }
};

export const searchArticles = async (searchTerm) => {
  try {
    const { data } = await api.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`
    );
  }
};

export const fetchArticleById = async (articleId) => {
  try {
    const { data } = await api.get(`/${articleId}`);
    return data.article;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`
    );
  }
};

export const fetchArticleComments = async (articleId, page) => {
  try {
    const { data } = await api.get(`/${articleId}/comments`, {
      params: {
        p: page,
      },
    });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`
    );
  }
};

export const updateArticleVotes = async (articleId, voteChange, token) => {
  try {
    const { data } = await api.patch(
      `/${articleId}`,
      { inc_votes: voteChange },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`
    );
  }
};
