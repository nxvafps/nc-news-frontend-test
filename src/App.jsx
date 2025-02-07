import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Auth,
  ArticlesList,
  ArticlePage,
  AuthButtons,
  LogoutButton,
} from "./components";
import { logout } from "./store/authSlice";
import {
  AppContainer,
  HeaderContainer,
  Title,
  Content,
  AuthWrapper,
} from "./AppStyles";
import "./App.css";

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
      <AppContainer role="application">
        <a href="#main-content" className="sr-only focus-visible">
          Skip to main content
        </a>

        <HeaderContainer>
          <Title>Welcome to NC News!</Title>
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
        </HeaderContainer>

        <Content
          id="main-content"
          role="main"
          tabIndex="-1"
          style={{ outline: "none" }}
        >
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </Content>
      </AppContainer>
    </Router>
  );
}

export default App;
