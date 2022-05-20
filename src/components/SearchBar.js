import React from 'react';

const SearchBar = (props) => {
	return (
		<div className='col-6 m-auto'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Rechercher un film'
			></input>
		</div>
	);
};

export default SearchBar;