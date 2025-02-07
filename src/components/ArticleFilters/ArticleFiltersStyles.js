import styled from "styled-components";

export const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  margin: 0 auto 1rem auto; /* Reduced from 2.5rem */
  padding: 1.5rem; /* Reduced from 2rem */
  width: 100%;
  max-width: 1200px;
  background: linear-gradient(
    145deg,
    var(--background-secondary),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  box-shadow: 0 8px 32px var(--shadow-color);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 48px var(--shadow-color);
  }

  @media (max-width: 768px) {
    gap: 1rem; /* Reduced from 1.25rem */
    margin-bottom: 0.75rem; /* Reduced from 1.5rem */
    padding: 1rem; /* Reduced from 1.5rem */
    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 1.125rem 1.25rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--background-tertiary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: var(--text-secondary);
  }

  &:hover {
    border-color: rgba(var(--accent-primary-rgb), 0.5);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px var(--accent-muted);
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:focus {
      transform: none;
    }
  }
`;

export const FilterControls = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterInput = styled(SearchInput)`
  width: 100%;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 1.125rem 2.5rem 1.125rem 1.25rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--background-tertiary);
  color: var(--text-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a0a0b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: rgba(var(--accent-primary-rgb), 0.5);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px var(--accent-muted);
    transform: translateY(-1px);
  }

  option {
    background: var(--background-secondary);
    color: var(--text-primary);
    padding: 0.75rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:focus {
      transform: none;
    }
  }
`;

export const Button = styled.button`
  padding: 1.125rem 1.75rem;
  background: linear-gradient(
    135deg,
    var(--accent-primary),
    var(--accent-hover)
  );
  color: var(--text-primary);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(var(--accent-primary-rgb), 0.2);
  min-width: 120px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(var(--accent-primary-rgb), 0.3);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &::before {
      display: none;
    }
    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;
