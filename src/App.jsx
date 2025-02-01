import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Auth from "./components/Auth";
import LogoutButton from "./components/LogoutButton";
import AuthButtons from "./components/AuthButtons";
import ArticlesList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";
import { logout } from "./store/authSlice";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  margin: 2rem 0;
  color: inherit;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
