
import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList.jsx'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);

  //create variable to store search state
  const [search, setSearch] = useState('');

  //create movie request function async
  const getMovie = async (search) => {
    const url= `http://www.omdbapi.com/?s=${search}&apikey=6f6792fa`

    //fetch a response
    const response = await fetch(url);
    //convert to JSON
    const responseJSON = await response.json();

    //call and set the setter to the url Search Array
  if (responseJSON.Search) {
      setMovies(responseJSON.Search);
      }
  }

    //any value added to the array, causes the useEffect hook to trigger
    useEffect(() => {
      getMovie(search)} , [search])
    
  return (
    <div className="App">
      <div className='heading-row'>
        <MovieListHeading heading='Movies'/>

        {/* setSearch is updated from SearchBox where it is called as a prop */}
        <SearchBox search={search} setSearch={setSearch} />
      </div> 
      <div className="poster-row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
