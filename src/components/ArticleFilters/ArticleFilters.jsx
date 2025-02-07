import { useState, useId } from "react";
import PropTypes from "prop-types";
import {
  FiltersContainer,
  SearchForm,
  SearchInput,
  FilterControls,
  FilterInput,
  FilterSelect,
  Button,
  FilterLabel,
  FilterGroup,
} from "./ArticleFiltersStyles";

const ArticleFilters = ({ filters, onFilterChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localFilters, setLocalFilters] = useState(filters);
  const [isLoading, setIsLoading] = useState(false);

  // Generate unique IDs for form controls
  const searchId = useId();
  const topicId = useId();
  const sortId = useId();
  const orderId = useId();
  const limitId = useId();

  const handleLocalFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    try {
      await onSearch(searchTerm);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyFilters = async () => {
    setIsLoading(true);
    try {
      await Promise.all(
        Object.entries(localFilters).map(([name, value]) =>
          onFilterChange({ target: { name, value } })
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    // Apply filters when pressing enter on any filter control
    if (e.key === "Enter" && e.target.name !== "article-search") {
      e.preventDefault();
      handleApplyFilters();
    }
  };

  return (
    <FiltersContainer role="search" aria-label="Article filters">
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="search"
          id={searchId}
          name="article-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !searchTerm.trim()}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </SearchForm>

      <FilterControls
        role="group"
        aria-label="Filter controls"
        onKeyDown={handleKeyDown}
      >
        <FilterGroup>
          <FilterLabel htmlFor={topicId}>Topic</FilterLabel>
          <FilterInput
            type="text"
            id={topicId}
            name="topic"
            placeholder="Filter by topic"
            value={localFilters.topic}
            onChange={handleLocalFilterChange}
            disabled={isLoading}
          />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor={sortId}>Sort By</FilterLabel>
          <FilterSelect
            id={sortId}
            name="sort_by"
            value={localFilters.sort_by}
            onChange={handleLocalFilterChange}
            disabled={isLoading}
          >
            <option value="created_at">Date</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
            <option value="topic">Topic</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor={orderId}>Order</FilterLabel>
          <FilterSelect
            id={orderId}
            name="order"
            value={localFilters.order}
            onChange={handleLocalFilterChange}
            disabled={isLoading}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor={limitId}>Per Page</FilterLabel>
          <FilterSelect
            id={limitId}
            name="limit"
            value={localFilters.limit}
            onChange={handleLocalFilterChange}
            disabled={isLoading}
          >
            <option value="5">5 items</option>
            <option value="10">10 items</option>
            <option value="15">15 items</option>
            <option value="20">20 items</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>&nbsp;</FilterLabel>
          <Button
            type="button"
            onClick={handleApplyFilters}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Applying..." : "Apply Filters"}
          </Button>
        </FilterGroup>
      </FilterControls>
    </FiltersContainer>
  );
};

ArticleFilters.propTypes = {
  filters: PropTypes.shape({
    topic: PropTypes.string,
    sort_by: PropTypes.string,
    order: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default ArticleFilters;
