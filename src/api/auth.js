import axios from "axios";

const api = axios.create({
  baseURL: "https://ncnews.novafps.com/api/auth",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const loginUser = async (credentials) => {
  return makeAuthRequest("/login", credentials);
};

export const registerUser = async (userData) => {
  return makeAuthRequest("/signup", userData);
};

const makeAuthRequest = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`
    );
  }
};
