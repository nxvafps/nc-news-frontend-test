import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {
  Auth,
  ArticlesList,
  ArticlePage,
  UserProfilePage,
  Home,
  Navbar,
  LoginPage,
  SignupPage,
} from "./components";
import { AppContainer, HeaderContainer, Title, Content } from "./AppStyles";
import "./App.css";

function Layout({
  showAuthForm,
  isLogin,
  onClose,
  handleAuthSuccess,
  handleLoginClick,
  handleSignupClick,
}) {
  return (
    <AppContainer role="application">
      <a href="#main-content" className="sr-only focus-visible">
        Skip to main content
      </a>

      <HeaderContainer>
        <Title>NC News</Title>
      </HeaderContainer>

      <Navbar
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />

      {showAuthForm && (
        <Auth
          onAuthSuccess={handleAuthSuccess}
          isLogin={isLogin}
          onClose={onClose}
        />
      )}

      <Content
        id="main-content"
        role="main"
        tabIndex="-1"
        style={{ outline: "none" }}
      >
        <Outlet />
      </Content>
    </AppContainer>
  );
}

function App() {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const auth = useSelector((state) => state.auth);

  const handleAuthSuccess = () => {
    setShowAuthForm(false);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
    setShowAuthForm(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setShowAuthForm(true);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Layout
            showAuthForm={showAuthForm}
            isLogin={isLogin}
            onClose={() => setShowAuthForm(false)}
            handleAuthSuccess={handleAuthSuccess}
            handleLoginClick={handleLoginClick}
            handleSignupClick={handleSignupClick}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="articles" element={<ArticlesList />} />
        <Route path="articles/:articleId" element={<ArticlePage />} />
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="topics" element={<div>Topics page coming soon!</div>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      },
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
