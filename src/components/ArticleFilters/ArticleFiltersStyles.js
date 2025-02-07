import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 0 auto 2.5rem auto;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  background: var(--background-secondary);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  box-shadow: 0 8px 32px var(--shadow-color);

  @media (max-width: 768px) {
    gap: 1.25rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border-radius: 20px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.25rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--background-tertiary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px var(--accent-muted);
  }
`;

export const FilterControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const FilterInput = styled(SearchInput)`
  max-width: 300px;
  width: 100%;
`;

export const FilterSelect = styled.select`
  padding: 1rem 1.25rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--background-tertiary);
  color: var(--text-primary);
  transition: all 0.2s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a0a0b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px var(--accent-muted);
  }

  option {
    background: var(--background-secondary);
  }
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  background: var(--accent-primary);
  color: var(--text-primary);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  min-width: 120px;

  &:hover:not(:disabled) {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
