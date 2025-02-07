import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { loginUser, registerUser } from "../../api/auth";

import {
  AuthContainer,
  Form,
  Input,
  Button,
  CloseButton,
  ErrorMessage,
} from "./AuthStyles";

function Auth({ onAuthSuccess, isLogin: initialIsLogin, onClose }) {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const authData = isLogin
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
      const data = await (isLogin
        ? loginUser(authData)
        : registerUser(authData));

      dispatch(
        login({
          token: data.token,
          user: data.user,
        })
      );

      if (onAuthSuccess) onAuthSuccess();
    } catch (err) {
      setError(err.message || "Failed to connect to the server");
      // Focus the first invalid field or the first input
      const firstInput =
        document.querySelector("input:invalid") ||
        document.querySelector("form input");
      if (firstInput) firstInput.focus();
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null);
    setFormData({
      username: "",
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <AuthContainer
      style={{ opacity: isVisible ? 1 : 0 }}
      role="dialog"
      aria-labelledby="auth-title"
      aria-describedby={error ? "auth-error" : undefined}
    >
      <CloseButton onClick={onClose} aria-label="Close authentication form">
        ×
      </CloseButton>

      <h2 id="auth-title">{isLogin ? "Welcome Back" : "Create Account"}</h2>

      {error && (
        <ErrorMessage id="auth-error" role="alert">
          <span aria-hidden="true">⚠️</span>
          {error}
        </ErrorMessage>
      )}

      <Form onSubmit={handleSubmit} aria-label="Authentication form" noValidate>
        {!isLogin && (
          <>
            <div>
              <Input
                type="text"
                name="username"
                id="username"
                aria-label="Username"
                aria-required="true"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                minLength={3}
                autoComplete="username"
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="text"
                name="name"
                id="name"
                aria-label="Full name"
                aria-required="true"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                disabled={isLoading}
              />
            </div>
          </>
        )}
        <div>
          <Input
            type="email"
            name="email"
            id="email"
            aria-label="Email address"
            aria-required="true"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            disabled={isLoading}
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            id="password"
            aria-label="Password"
            aria-required="true"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            autoComplete={isLogin ? "current-password" : "new-password"}
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          aria-disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="sr-only">Loading...</span>
              <span aria-hidden="true">Please wait...</span>
            </>
          ) : isLogin ? (
            "Sign In"
          ) : (
            "Create Account"
          )}
        </Button>
      </Form>

      <Button
        onClick={toggleAuthMode}
        disabled={isLoading}
        type="button"
        aria-disabled={isLoading}
      >
        {isLogin
          ? "Need an account? Sign Up"
          : "Already have an account? Sign In"}
      </Button>
    </AuthContainer>
  );
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func,
  isLogin: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Auth;
