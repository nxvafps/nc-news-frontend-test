import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  box-shadow: 0 8px 32px var(--shadow-color);
  color: var(--text-primary);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 1.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--accent-primary);
  box-shadow: 0 8px 24px var(--shadow-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05) rotate(5deg);
    border-color: var(--accent-hover);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProfileName = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const ProfileUsername = styled.p`
  font-size: 1.25rem;
  color: var(--accent-primary);
  margin: 0;
`;

export const ProfileEmail = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
`;

export const ActionContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(
    145deg,
    var(--background-tertiary),
    rgba(255, 255, 255, 0.02)
  );
  border-radius: 16px;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0.75rem;
  }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
  margin: 1rem 0 1.5rem;
  background: linear-gradient(
    145deg,
    rgba(239, 68, 68, 0.1),
    rgba(239, 68, 68, 0.05)
  );
  border-radius: 16px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: var(--error-color);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.1);

  span {
    margin-right: 0.75rem;
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0.75rem 0 1rem;
    font-size: 0.95rem;
  }
`;
