import styled from "styled-components";

export const ProfileButtonContainer = styled.button`
  position: relative;
  padding: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  background: transparent;
  border: 2px solid var(--accent-primary);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px var(--shadow-color);

  &:hover {
    transform: translateY(-2px) scale(1.05);
    border-color: var(--accent-hover);
    box-shadow: 0 8px 24px var(--shadow-color);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--accent-muted);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const ProfileAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProfileButtonContainer}:hover & {
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    ${ProfileButtonContainer}:hover & {
      transform: none;
    }
  }
`;
