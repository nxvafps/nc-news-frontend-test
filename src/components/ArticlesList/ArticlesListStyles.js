import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  box-sizing: border-box;
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

  display: flex;
  flex-direction: column;
  min-height: min-content; /* Force container to only be as tall as content */

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    border-radius: 20px;
    gap: 0.25rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }

  > header {
    flex-shrink: 0;
    margin-bottom: 0.5rem;
  }

  > main {
    display: flex;
    flex-direction: column;
    flex: 0 1 auto; /* Allow shrinking but not growing */
    min-height: min-content; /* Force main to only be as tall as content */
    gap: 0.5rem;
  }

  > nav {
    flex-shrink: 0;
    margin: 0; /* Remove any margin that might be added */

    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  width: 100%;
  align-items: start;
  align-content: start; /* Prevent unwanted vertical distribution */
  flex: 0 1 auto; /* Allow shrinking but not growing */
  min-height: 0;
  overflow: visible;

  > * {
    height: 100%;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  > *:hover {
    transform: translateY(-4px);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-rows: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 0.5rem 0;
  }

  @media (prefers-reduced-motion: reduce) {
    > * {
      transition: none;
      &:hover {
        transform: none;
      }
    }
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  background: var(--background-secondary);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  margin: 2rem auto;
  max-width: 400px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.9rem;
    margin: 1rem auto;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ErrorMessage = styled.div`
  color: var(--error-color);
  background: rgba(239, 68, 68, 0.1);
  padding: 1.25rem;
  border-radius: 16px;
  text-align: center;
  margin: 1rem auto; /* Reduced from 2rem */
  max-width: 600px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  backdrop-filter: blur(8px);

  span {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 0.75rem auto; /* Reduced from 1rem */
    padding: 1rem;
    font-size: 0.9rem;
    max-width: 90%;
  }
`;
