"use client";

import stylesPageWrapper from "@/components/StylesPageWrapper/stylesPageWrapper.module.scss";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/redux/features/favorites/selector";
import MovieCardFavourites from "@/components/MovieCardFavourites";

const Favorites = () => {
  const favoriteMovies = useSelector(selectFavorites);

  return (
    <div className={stylesPageWrapper.pageWrapper}>
      <h2>Favorites</h2>
      {!favoriteMovies.length && (
        <p className={stylesPageWrapper.noMoviesFound}>
          Your list of favorite movies is empty. <br />
          Add movies to your favorites to see them here.
        </p>
      )}
      <div className={stylesPageWrapper.movieGrid}>
        {favoriteMovies.map((id: string) => (
          <div key={id} className={stylesPageWrapper.fullWidth}>
            <MovieCardFavourites id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
