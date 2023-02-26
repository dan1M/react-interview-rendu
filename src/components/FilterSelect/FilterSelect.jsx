import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategories } from '../../utils/reducers/moviesSlice';

function FilterSelect() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const categories = movies.movies.reduce((acc, movie) => {
    if (!acc.includes(movie.category)) {
      acc.push(movie.category);
    }
    return acc;
  }, []);

  return (
    <div className='filter-select'>
      <label htmlFor='category-select'>Filtrer par catégories :</label>
      <div
        className='selected'
        onClick={() => {
          document.getElementById('category-select').classList.toggle('show');
        }}
      >
        {movies.categories.map((category, index) => (
          <span className='selected-item' key={index}>
            {category}
          </span>
        ))}
      </div>
      <select
        className='custom-select'
        name='category-select'
        id='category-select'
        onChange={(e) =>
          dispatch(
            selectedCategories(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          )
        }
        multiple
      >
        <option value='All'>All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSelect;
