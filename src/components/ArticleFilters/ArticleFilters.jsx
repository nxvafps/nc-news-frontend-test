import { useState } from "react";
import PropTypes from "prop-types";

import {
  FiltersContainer,
  SearchForm,
  SearchInput,
  FilterControls,
  FilterInput,
  FilterSelect,
  Button,
} from "./ArticleFiltersStyles";

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
