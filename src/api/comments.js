import axios from "axios";

const api = axios.create({
  baseURL: "https://ncnews.novafps.com/api/comments",
  timeout: 5000,
});

export const updateCommentVotes = async (commentId, voteChange, token) => {
  const { data } = await api.patch(
    `/${commentId}`,
    { inc_votes: voteChange },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export const fetchCommentAuthor = async (username) => {
  const response = await fetch(
    `https://ncnews.novafps.com/api/users/${username}`
  );
  const data = await response.json();
  return data.user;
};
