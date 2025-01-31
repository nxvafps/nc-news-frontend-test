import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function ArticleFilters({ filters, onFilterChange, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localFilters.topic !== filters.topic) {
        onFilterChange({
          target: { name: "topic", value: localFilters.topic },
        });
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [localFilters.topic, filters.topic, onFilterChange]);

  const handleLocalFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Immediately update non-text filters
    if (name !== "author" && name !== "topic") {
      onFilterChange(e);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="filters">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>
      <div className="filter-controls">
        <input
          type="text"
          name="topic"
          placeholder="Filter by topic"
          value={localFilters.topic}
          onChange={handleLocalFilterChange}
        />

        <select
          name="sort_by"
          value={localFilters.sort_by}
          onChange={handleLocalFilterChange}
        >
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="topic">Topic</option>
        </select>
        <select
          name="order"
          value={localFilters.order}
          onChange={handleLocalFilterChange}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <select
          name="limit"
          value={localFilters.limit}
          onChange={handleLocalFilterChange}
        >
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="20">20 per page</option>
        </select>
      </div>
    </div>
  );
}

ArticleFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default ArticleFilters;
