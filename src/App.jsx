import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import LogoutButton from "./components/LogoutButton";
import AuthButtons from "./components/AuthButtons";
import ArticlesList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authToken")
  );
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthForm(false);
  };

  return (
    <Router>
      <div>
        <h1>Welcome to NC News!</h1>
        <div className="content">
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>

        <div className="auth-wrapper">
          {isAuthenticated ? (
            <LogoutButton onLogout={() => setIsAuthenticated(false)} />
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
        </div>
      </div>
    </Router>
  );
}

export default App;
