import React from 'react'

function MovieList(props) {
  return (
    <>
        {props.movies.map((movie) => {
            return <div className='img-div'>
            {console.log(movie.Poster)}
                <img src={movie["Poster"]}></img>
            </div>
        })}
    </>
  )
}

export default MovieList