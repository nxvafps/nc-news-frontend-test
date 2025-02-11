import { useNavigate } from "react-router-dom";
import Auth from "./Auth";

function SignupPage() {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate("/");
  };

  return (
    <Auth
      isLogin={false}
      onAuthSuccess={handleAuthSuccess}
      onClose={() => navigate(-1)}
    />
  );
}

export default SignupPage;
