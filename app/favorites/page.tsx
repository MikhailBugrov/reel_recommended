"use client";

import { useSelector } from "react-redux";
import { selectFavorites } from "@/redux/features/favorites/selector";
import MovieCardFavourites from "@/components/MovieCardFavourites";
import stylesPage from "@/components/StylesPageWrapper/StylesPageWrapper.module.scss";

const Favorites = () => {
  const favoriteMovies = useSelector(selectFavorites);

  return (
    <div className={stylesPage.wrapper}>
      <h2>Favorites</h2>
      {!favoriteMovies.length && (
        <p className={stylesPage.textBlock}>
          Your list of favorite movies is empty. <br />
          Add movies to your favorites to see them here.
        </p>
      )}
      <div className={stylesPage.grid}>
        {favoriteMovies.map((id: string) => (
          <div key={id} className={stylesPage.full}>
            <MovieCardFavourites id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
