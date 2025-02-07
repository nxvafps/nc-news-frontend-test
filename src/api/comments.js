import axios from "axios";

const api = axios.create({
  baseURL: "https://ncnews.novafps.com/api/comments",
  timeout: 5000,
});

export const updateCommentVotes = async (commentId, voteChange, token) => {
  try {
    const { data } = await api.patch(
      `/${commentId}`,
      { inc_votes: voteChange },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`
    );
  }
};

export const fetchCommentAuthor = async (username) => {
  try {
    const response = await fetch(
      `https://ncnews.novafps.com/api/users/${username}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.user;
  } catch (error) {
    throw new Error(error.message);
  }
};
