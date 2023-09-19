import { GenreList } from "@/utils/constants";
import stylesGenre from "./GenreFilter.module.scss";

interface FiltersProps {
  withGenres: string;
  setWithGenres: React.Dispatch<React.SetStateAction<string>>;
}

const GenreFilter: React.FC<FiltersProps> = ({ setWithGenres, withGenres }) => {
  const handleGenreChange = (genreId: number) => {
    setWithGenres((prevGenres) => {
      const genresArray = prevGenres ? prevGenres.split(",").map(Number) : [];

      if (genresArray.includes(genreId)) {
        return genresArray.filter((id) => id !== genreId).join(",");
      } else {
        return [...genresArray, genreId].join(",");
      }
    });
  };

  return (
    <div className={stylesGenre.container}>
      {GenreList.map((genre: { id: number; name: string }) => (
        <label className={stylesGenre.label} key={genre.id}>
          <input
            type="checkbox"
            value={genre.id}
            checked={withGenres.split(",").map(Number).includes(genre.id)}
            onChange={() => handleGenreChange(genre.id)}
          />
          {genre.name}
        </label>
      ))}
    </div>
  );
};

export default GenreFilter;
