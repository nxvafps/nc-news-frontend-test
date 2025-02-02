import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Auth } from "./components";

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
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AuthWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
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
