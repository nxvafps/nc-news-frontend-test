import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background: linear-gradient(
    145deg,
    var(--background-primary),
    var(--background-secondary)
  );
  position: relative;

  /* Skip link styling */
  .sr-only.focus-visible {
    position: fixed;
    top: -100px; /* Hide by default */
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: auto;
    padding: 1rem 2rem;
    background: var(--accent-primary);
    color: var(--text-primary);
    clip: auto;
    border-radius: 12px;
    z-index: 9999;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 8px 32px var(--shadow-color);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      top 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      top: 0.5rem; /* Show when focused */
    }

    &:hover {
      transform: translateX(-50%) translateY(-2px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sr-only.focus-visible {
      transition: none;
      &:hover {
        transform: translateX(-50%);
      }
    }
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  padding-top: 3rem; /* Space for skip link when visible */
  z-index: 1;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
  padding: 0 1rem;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(
      to right,
      var(--accent-primary),
      var(--accent-hover)
    );
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin: 1.5rem 0;

    &::after {
      width: 40px;
      height: 3px;
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2rem);
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.02), transparent);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: clamp(0.75rem, 2vw, 1rem);
  }
`;

export const AuthWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    display: flex;
    justify-content: center;
    background: linear-gradient(
      145deg,
      rgba(26, 26, 26, 0.8),
      rgba(26, 26, 26, 0.9)
    );
    padding: 0.75rem;
    border-radius: 16px;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px var(--shadow-color);
    transform: translateY(0);

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;
