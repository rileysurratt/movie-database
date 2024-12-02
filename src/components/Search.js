import React from "react";

function Search({ handleInput, search }) {
  return (
    <div className="searchbox-wrapper">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;
