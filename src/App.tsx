import React, { useEffect, useState } from 'react';
import { getMoviesData, IMovie } from './Services/Api';
import Movies from './Components/Movie';
import './App.css';

const App = () => {

  const [movies, setMovies] = useState<IMovie[]>([])
  const [search, setSearch] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')

  const fetchData = async () => {
    try {
      const response = await getMoviesData()
      setMovies(response);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  const handleSearch = () => {
    setSearch(inputValue)
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if(inputValue.length === 0) {
      setSearch('')
    }
  }, [inputValue])

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value.toLocaleLowerCase())
  }

  return (
    <div className="app-container">
      <div className="search-button-container">
        <input
          className="search-button-input"
          placeholder="Type something"
          onChange={onChange}
          type="text"
        />
        <button
          className="search-button"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
      <div className="cards-container">
        {movies
          .filter((movie) => {
            if(movie.overview.toLocaleLowerCase()) {
              return movie.overview.toLocaleLowerCase().includes(search)
            } else return null;
          })
          .map((movie, key) => {
            return (
              <Movies key={key} props={movie} />
            )}
        )}
      </div>
    </div>
  );
}

export default App;