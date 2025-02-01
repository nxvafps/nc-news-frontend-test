import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { loginUser, registerUser } from "../api/auth";

const AuthContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--background-color, #1a1a1a);
  color: white;
  border: 1px solid var(--border-color, #333);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  background: #2d2d2d;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;

  &:focus {
    outline: 2px solid #646cff;
    outline-offset: 2px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #3a3a3a;
  color: white;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #4a4a4a;
    border-color: #646cff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  line-height: 1;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: #646cff;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  background-color: #fee2e2;
  padding: 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0;
`;

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
