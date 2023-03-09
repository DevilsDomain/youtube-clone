import './App.css';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useRef } from 'react';
import Video from './components/Video';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import styled from "styled-components";
import { playlistid } from './store/playlistid';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;


const fetcher = url => axios.get(url).then(res => res.data)

function App() {
  const [searchText, setSearchText] = useState('cat')
  
  const inputRef = useRef('');
  const { data, error } = useSWR( `https://youtube.thorsteinsson.is/api/search?q=${searchText}`, fetcher)
  // search bar component
  const handleSearch = (value) => {
    setSearchText(value);
  }
  

  if (!data) {
    return "Loading...";
  }
  
  if(error) {
    return(
      <p>Oops, looks like we are down!</p>
      );
    }
    
    return (
      <div>
      <Logo />
      <SearchBar inputRef={inputRef} setSearchText={setSearchText} handleSearch={handleSearch} />
      <Container>
        {data.map((item, itemIndex) => {
          return(
            <Video item={item} key={itemIndex} playlistid={playlistid} />
            );
          })}
      </Container>
    </div>
  );
}

export default App;