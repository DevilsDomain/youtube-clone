import './App.css';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useRef } from 'react';
import Video from './components/Video';
import SearchBar from './SearchBar';

const fetcher = url => axios.get(url).then(res => res.data)
function App() {
  const [searchText, setSearchText] = useState('cat')
  const inputRef = useRef('');
  const { data, error } = useSWR( `https://youtube.thorsteinsson.is/api/search?q=${searchText}`, fetcher)

  // search bar component
  
  console.log(data)
  if (!data) {
    return "Loading...";
  }

  if(error) {
    return(
      <p>Oops, looks like we are down!</p>
    );
  }

  return (
    <div className="App">
      <h1>YouTube?</h1>
      <SearchBar inputRef={inputRef} searchText={searchText} setSearchText={setSearchText} />
      <Video data={data} />
    </div>
  );
}

export default App;
