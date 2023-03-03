import React from 'react'

function SearchBar({inputRef, searchText, setSearchText}) {
    // handle submit
    const handleSubmit = () => {
      let value = inputRef.current.value;
      setSearchText(value);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search video..."
          ref={inputRef}
        />
        <button type="button">
          search
        </button>
      </form>
    );
  }

export default SearchBar