import { useState } from "react";
import PropTypes from "prop-types";

function Auth({ onAuthSuccess, isLogin: initialIsLogin, onClose }) {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const endpoint = isLogin
      ? "https://ncnews.novafps.com/api/auth/login"
      : "https://ncnews.novafps.com/api/auth/signup";

    const requestBody = isLogin
      ? {
          email: formData.email,
          password: formData.password,
        }
      : {
          username: formData.username,
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseText = await response.text();

      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error(`Invalid JSON response: ${responseText}`);
      }

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      if (onAuthSuccess) onAuthSuccess();
    } catch (err) {
      setError(err.message || "Failed to connect to the server");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="auth-container">
      <button className="close-btn" onClick={onClose} aria-label="Close">
        ×
      </button>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} aria-label="Authentication form">
        {!isLogin && (
          <>
            <input
              type="text"
              name="username"
              id="username"
              aria-label="Username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              id="name"
              aria-label="Name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          id="email"
          aria-label="Email address"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          aria-label="Password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isLoading} aria-busy={isLoading}>
          {isLoading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button
        onClick={() => setIsLogin(!isLogin)}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLogin
          ? "Need an account? Sign Up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func,
  isLogin: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Auth;
