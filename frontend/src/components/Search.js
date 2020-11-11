import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => props.handleSearch(e)}
      />
    </div>
  );
}

export default Search;
