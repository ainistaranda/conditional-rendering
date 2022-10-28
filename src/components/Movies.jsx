import { useState } from "react";

const genre = [
  "animation",
  "classic",
  "comedy",
  "horror",
  "family",
  "mystery",
];

function Movies() {
  const [movieList, setMovieList] = useState();
  const getMovies = (genre) => {
    fetch(`https://api.sampleapis.com/movies/${genre}`)
      .then((response) => response.json())
      .then(setMovieList)
      .catch(console.error);
  };
  return (
    <>
      <div className="button-list">
        {genre.map((genre) => (
          <button key={genre} onClick={() => getMovies(genre)}>{genre.toUpperCase()}</button>
        ))}
      </div>
      <div className="movie-list">
        {!movieList ? (
          <p>Pick a Genre!</p>
        ) : (
          movieList.map((movie) => <p key={movie.id}> {movie.title} </p>)
        )}
      </div>
    </>
  );
}

export default Movies;
