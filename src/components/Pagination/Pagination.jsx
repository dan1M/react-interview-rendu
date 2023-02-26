import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Pagination = () => {
  const movies = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.movies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(movies.movies.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        className={page === number ? 'active' : ''}
        key={number}
        id={number}
        onClick={() => {
          setPage(number);
        }}
      >
        {number}
      </li>
    );
  });

  return (
    <>
      <div className='pagination'>
        <button
          className='btn-nav'
          onClick={() => setPage(page > 1 ? page - 1 : page)}
        >
          &lt;
        </button>
        <ul>{renderPageNumbers}</ul>
        <button
          className='btn-nav'
          onClick={() =>
            setPage(pageNumbers.length >= page + 1 ? page + 1 : page)
          }
        >
          &gt;
        </button>
        <select
          className='custom-select'
          name='per-page-items'
          id='per-page-items'
          onChange={(e) => {
            setMoviesPerPage(e.target.value);
            setPage(1);
          }}
        >
          <option value='4'>4</option>
          <option value='8'>8</option>
          <option value='12'>12</option>
        </select>
      </div>

      <div className='cards-container'>
        {currentMovies.map((movie) =>
          movies.categories.includes(movie.category) ||
          movies.categories.includes('All') ? (
            <Card key={movie.id} movie={movie} />
          ) : null
        )}
      </div>
    </>
  );
};

export default Pagination;
