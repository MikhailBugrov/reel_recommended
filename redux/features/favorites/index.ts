import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  movies: string[];
}

const getInitialMovies = (): string[] => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("favoriteMovies")
      ? JSON.parse(localStorage.getItem("favoriteMovies")!)
      : [];
  }
  return [];
};

const initialState: FavoritesState = {
  movies: getInitialMovies(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.movies.push(action.payload);
      localStorage.setItem("favoriteMovies", JSON.stringify(state.movies));
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((id) => id !== action.payload);
      localStorage.setItem("favoriteMovies", JSON.stringify(state.movies));
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
