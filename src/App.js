import './App.css';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useRef } from 'react';

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

      <SearchBar></SearchBar>
        <ul>
        {data.status !== false ? (
        <>
        <ul>
            {data.map((item, itemIndex) => {
              return (
                <li key={itemIndex}>{item.title}
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  width="560" height="315" frameborder="0" allowfullscreen></iframe>
                  </li>
              );

            })}
          </ul>
            </>
      ) : (
        <div>No video found with this tile</div>
      )}
        </ul>

    </div>
  );
}

export default App;
