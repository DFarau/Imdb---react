import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Reviews from '../components/Reviews';

const Movies = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='col img-container mx-1 my-3'>
					<Link className="link" to={movie.imdbID}>
						<img src={movie.Poster} alt='movie'></img>	
						<p class="title">{movie.Title}</p>
					</Link>
					<Routes>
						<Route path={movie.imdbID} element={<Reviews/>}/>
					</Routes>		
				</div>
			))}
		</>
	);
};


	


export default Movies;