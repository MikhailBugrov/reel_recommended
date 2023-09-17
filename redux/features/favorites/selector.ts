import { RootState } from "../../store";

export const selectFavorites = (state: RootState) => state.favorites.movies;
export const isMovieFavorite = (state: RootState, id: string) =>
  selectFavorites(state).includes(id);
