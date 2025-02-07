import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Auth } from "./components";
import "./App.css";

import {
  ArticlesList,
  ArticlePage,
  AuthButtons,
  LogoutButton,
} from "./components";
import { logout } from "./store/authSlice";

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; // Prevent horizontal scrolling on mobile
  padding: 0 1rem; // Add padding for smaller screens
  box-sizing: border-box;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 1.5rem 0; // Reduced margin on mobile
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 2rem; // Smaller font size on mobile
    margin: 1rem 0;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem; // Reduced padding on mobile
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const AuthWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;

  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 1rem; // Move to bottom on mobile
    right: 1rem;
    left: 1rem; // Stretch across bottom
    display: flex;
    justify-content: center;

    /* Add background for better visibility */
    background: rgba(26, 26, 26, 0.8);
    padding: 0.5rem;
    border-radius: 8px;
    backdrop-filter: blur(8px);
  }
`;

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthSuccess = () => {
    setShowAuthForm(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Router>
      <AppContainer>
        <Title>Welcome to NC News!</Title>
        <Content>
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </Content>

        <AuthWrapper>
          {isAuthenticated ? (
            <LogoutButton onLogout={handleLogout} />
          ) : showAuthForm ? (
            <Auth
              onAuthSuccess={handleAuthSuccess}
              isLogin={isLogin}
              onClose={() => setShowAuthForm(false)}
            />
          ) : (
            <AuthButtons
              onLoginClick={() => {
                setIsLogin(true);
                setShowAuthForm(true);
              }}
              onSignupClick={() => {
                setIsLogin(false);
                setShowAuthForm(true);
              }}
            />
          )}
        </AuthWrapper>
      </AppContainer>
    </Router>
  );
}

export default App;
