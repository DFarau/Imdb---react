import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	
	return (
		<div className='container-fluid'>
			<div className='row my-5'>
				<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
          <Movies
            movies={movies}
          />
			</div>
      
		</div>
	);
};

export default App;