import React from 'react'

function SearchBar({inputRef, handleSearch}) {
    // handle submit
    const handleSubmit = (event) => {
      event.preventDefault();
      let value = inputRef.current.value;
      handleSearch(value);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search video..."
          ref={inputRef}
        />
        <button type="submit">
          search
        </button>
      </form>
    );
}

export default SearchBar;
