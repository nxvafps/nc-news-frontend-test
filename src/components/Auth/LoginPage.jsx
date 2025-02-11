import { useNavigate } from "react-router-dom";
import Auth from "./Auth";

function LoginPage() {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate("/");
  };

  return (
    <Auth
      isLogin={true}
      onAuthSuccess={handleAuthSuccess}
      onClose={() => navigate(-1)}
    />
  );
}

export default LoginPage;
