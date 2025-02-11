import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ProfileButtonContainer, ProfileAvatar } from "./ProfileButtonStyles";

function ProfileButton({ user }) {
  const navigate = useNavigate();

  return (
    <ProfileButtonContainer
      onClick={() => navigate("/profile")}
      aria-label="View your profile"
      title="View your profile"
    >
      <ProfileAvatar
        src={user?.avatar_url || "/default-avatar-placeholder.png"}
        alt="Your profile picture"
        loading="lazy"
      />
    </ProfileButtonContainer>
  );
}

ProfileButton.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default ProfileButton;
