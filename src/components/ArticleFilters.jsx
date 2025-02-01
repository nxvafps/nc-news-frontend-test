import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
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

const FilterControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #1a1a1a;
  color: white;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #1a1a1a;
  color: white;
`;

const Button = styled.button`
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

const ArticleFilters = ({ filters, onFilterChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localFilters, setLocalFilters] = useState(filters);

  const handleLocalFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleApplyFilters = () => {
    Object.entries(localFilters).forEach(([name, value]) => {
      onFilterChange({ target: { name, value } });
    });
  };

  return (
    <FiltersContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
        />
        <Button type="submit">Search</Button>
      </SearchForm>

      <FilterControls>
        <FilterInput
          type="text"
          name="topic"
          placeholder="Filter by topic"
          value={localFilters.topic}
          onChange={handleLocalFilterChange}
        />

        <FilterSelect
          name="sort_by"
          value={localFilters.sort_by}
          onChange={handleLocalFilterChange}
        >
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="topic">Topic</option>
        </FilterSelect>

        <FilterSelect
          name="order"
          value={localFilters.order}
          onChange={handleLocalFilterChange}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </FilterSelect>

        <FilterSelect
          name="limit"
          value={localFilters.limit}
          onChange={handleLocalFilterChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </FilterSelect>

        <Button type="button" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </FilterControls>
    </FiltersContainer>
  );
};

ArticleFilters.propTypes = {
  filters: PropTypes.shape({
    topic: PropTypes.string,
    sort_by: PropTypes.string,
    order: PropTypes.string,
    limit: PropTypes.number,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default ArticleFilters;
