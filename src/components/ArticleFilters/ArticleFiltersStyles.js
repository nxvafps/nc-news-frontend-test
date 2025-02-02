import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #1a1a1a;
  color: white;

  &::placeholder {
    color: #666;
  }
`;

export const FilterControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #1a1a1a;
  color: white;
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
