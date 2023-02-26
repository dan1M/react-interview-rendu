import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterSelect from './components/FilterSelect/FilterSelect';
import Pagination from './components/Pagination/Pagination';
import { movies$ } from './data/movies';
import { setMovies } from './utils/reducers/moviesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    movies$.then((movies) => {
      dispatch(setMovies(movies));
    });
  }, []);

  return (
    <div className='app-container'>
      <FilterSelect />
      <Pagination />
    </div>
  );
}

export default App;
