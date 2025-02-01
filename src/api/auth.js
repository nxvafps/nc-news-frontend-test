const AUTH_BASE_URL = "https://ncnews.novafps.com/api/auth";

export const loginUser = async (credentials) => {
  return makeAuthRequest("/login", credentials);
};

export const registerUser = async (userData) => {
  return makeAuthRequest("/signup", userData);
};

const makeAuthRequest = async (endpoint, data) => {
  const response = await fetch(`${AUTH_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseText = await response.text();

  try {
    const parsedData = JSON.parse(responseText);
    if (!response.ok) {
      throw new Error(
        parsedData.message || `HTTP error! status: ${response.status}`
      );
    }
    return parsedData;
  } catch {
    throw new Error(`Invalid JSON response: ${responseText}`);
  }
};
