import './App.css';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useRef } from 'react';
import Video from './components/Video';

const fetcher = url => axios.get(url).then(res => res.data)
function App() {
  const [searchText, setSearchText] = useState('cat')
  const inputRef = useRef('');
  const { data, error } = useSWR( `https://youtube.thorsteinsson.is/api/search?q=${searchText}`, fetcher)

  // search bar component
  function SearchBar() {
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
      <SearchBar />
      <Video data={data} />
    </div>
  );
}

export default App;
