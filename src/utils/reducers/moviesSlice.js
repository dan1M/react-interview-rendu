import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  categories: ['All'],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      // On remplace le tableau de films par le tableau de films reçu en payload
      state.movies = action.payload;
    },
    deleteMovie: (state, action) => {
      // On filtre le tableau de films pour ne garder que les films dont l'id est différent de l'id du film cliqué
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    toggleLike: (state, action) => {
      state.movies = state.movies.map((movie) => {
        // On parcourt le tableau de films et on modifie le film dont l'id correspond à l'id du film cliqué
        if (movie.id === action.payload) {
          if (movie.liked) {
            // Si le film est déjà liké, on le délike
            movie.liked = false;
            movie.likes--;
          } else {
            // Sinon on le like
            movie.liked = true;
            movie.likes++;
            if (movie.disliked) {
              // Si le film est déjà disliké, on le dédislike
              movie.disliked = false;
              movie.dislikes--;
            }
          }
        }
        return movie;
      });
    },
    toggleDislike: (state, action) => {
      // La logique est la même que pour le like
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload) {
          if (movie.disliked) {
            movie.disliked = false;
            movie.dislikes--;
          } else {
            movie.disliked = true;
            movie.dislikes++;
            if (movie.liked) {
              movie.liked = false;
              movie.likes--;
            }
          }
        }
        return movie;
      });
    },
    selectedCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setMovies,
  deleteMovie,
  toggleLike,
  toggleDislike,
  selectedCategories,
} = moviesSlice.actions;
export default moviesSlice.reducer;
