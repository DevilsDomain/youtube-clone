import React from 'react';
import styled from "styled-components";

const Search = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  outline: none;
  border: 1px #a3a3a3 solid;
  background: none;
  color: white;
  padding-left 20px;

  ::placeholder {
    color: #e5e5e5;
  }

`;

const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  outline: none;
  background: none;
  border: none;
  background-color: #ff0000;
  color: #e5e5e5;
  margin-left: 10px;
`;



function SearchBar({inputRef, handleSearch}) {
    // handle submit
    const handleSubmit = (event) => {
      event.preventDefault();
      let value = inputRef.current.value;
      handleSearch(value);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <Search
          placeholder="Search video..."
          ref={inputRef}
        />
        <Button type="submit">
          search
        </Button>
      </form>
    );
}

export default SearchBar;