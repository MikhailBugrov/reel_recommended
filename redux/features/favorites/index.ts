import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  movies: string[];
}

const initialState: FavoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((id) => id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
