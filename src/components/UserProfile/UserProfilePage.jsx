import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "..";
import { fetchUserProfile } from "../../api/auth";
import { logout } from "../../store/authSlice";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileAvatar,
  ProfileInfo,
  ProfileName,
  ProfileUsername,
  ProfileEmail,
  ActionContainer,
  ErrorContainer,
} from "./UserProfilePageStyles";

function UserProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/");
      return;
    }

    const loadProfile = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUserProfile(auth.token);
        setProfile(data.user);
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [auth.isAuthenticated, auth.token, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (isLoading) {
    return (
      <ProfileContainer>
        <div role="status" aria-live="polite">
          <span aria-hidden="true">⌛</span> Loading profile...
        </div>
      </ProfileContainer>
    );
  }

  if (error) {
    return (
      <ProfileContainer>
        <ErrorContainer role="alert">
          <span aria-hidden="true">⚠️</span>
          Failed to load your profile. You may need to log in again.
        </ErrorContainer>
        <ActionContainer>
          <LogoutButton onLogout={handleLogout} />
        </ActionContainer>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileAvatar
          src={profile?.avatar_url || "/default-avatar-placeholder.png"}
          alt="Your profile picture"
        />
        <ProfileInfo>
          <ProfileName>{profile?.name}</ProfileName>
          <ProfileUsername>@{profile?.username}</ProfileUsername>
          <ProfileEmail>{profile?.email}</ProfileEmail>
        </ProfileInfo>
      </ProfileHeader>
      <ActionContainer>
        <LogoutButton onLogout={handleLogout} />
      </ActionContainer>
    </ProfileContainer>
  );
}

export default UserProfilePage;
