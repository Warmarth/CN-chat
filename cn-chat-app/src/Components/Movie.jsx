import React, { useState, useContext } from 'react';
import { themeContext } from './theme';
import { movies } from '../services/fakeMovieService';
const Movies = () => {
  const [theme] = useContext(themeContext);
  const [moviesData, setMovies] = useState(movies);
  let count = moviesData.length === 0 ? 'No movies available' : moviesData.length;
  function deleteMovie(movieId) {
    const upDatedMovies = moviesData.filter((movie) => movie._id !== movieId);
    setMovies(upDatedMovies);
  }
  return (
    <div data-theme={`${theme ? 'light' : 'dark'}`} className="card">
      {count === 'No movies available' ? (
        <h1 h1 className="badge-warning  py-2">
          No movies available
        </h1>
      ) : (
        <h1 className="badge-success py-2"> Showing {count} movies in the database</h1>
      )}
      <table className="table-lg">
        <thead className="w-full">
          <tr className="capitalize ">
            <th>title</th>
            <th>genre</th>
            <th>stock</th>
            <th>rate</th>
          </tr>
        </thead>
        <tbody>
          {moviesData.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <th>
                <td className="btn btn-danger hover:btn-error" onClick={() => deleteMovie(movie._id)}>
                  Delete
                </td>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
