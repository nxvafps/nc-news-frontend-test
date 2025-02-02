import { useState } from "react";
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
    <AuthContainer>
      <CloseButton onClick={onClose} aria-label="Close">
        ×
      </CloseButton>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form onSubmit={handleSubmit} aria-label="Authentication form">
        {!isLogin && (
          <>
            <Input
              type="text"
              name="username"
              id="username"
              aria-label="Username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <Input
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
        <Input
          type="email"
          name="email"
          id="email"
          aria-label="Email address"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          id="password"
          aria-label="Password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={isLoading} aria-busy={isLoading}>
          {isLoading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
        </Button>
      </Form>

      <Button onClick={() => setIsLogin(!isLogin)} disabled={isLoading}>
        {isLogin
          ? "Need an account? Sign Up"
          : "Already have an account? Login"}
      </Button>
    </AuthContainer>
  );
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func,
  isLogin: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Auth;
