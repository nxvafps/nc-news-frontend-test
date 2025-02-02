import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 0 auto 2.5rem auto;
  padding: 2rem;
  width: 95%;
  max-width: 1200px;
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #1a1a1a;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #4a9eff;
    box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2);
  }

  &:hover {
    border-color: #444;
  }
`;

export const FilterControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  width: 100%;
  padding: 0.5rem;
`;

export const FilterInput = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #1a1a1a;
  color: white;
  font-size: 0.95rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #4a9eff;
    box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2);
  }

  &:hover {
    border-color: #444;
  }
`;

export const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #1a1a1a;
  color: white;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #3a3a3a;
  color: white;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #4a4a4a;
    border-color: #646cff;
  }
`;
