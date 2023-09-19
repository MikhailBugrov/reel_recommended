import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import stylesYear from "./ReleaseYearFilter.module.scss";

interface FiltersProps {
  releaseYear: number | null;
  setReleaseYear: React.Dispatch<React.SetStateAction<number | null>>;
}

const ReleaseYearFilter: React.FC<FiltersProps> = ({
  releaseYear,
  setReleaseYear,
}) => {
  const handleYearChange = (date: Date | null) => {
    setReleaseYear(date ? date.getFullYear() : null);
  };
  return (
    <>
      <label htmlFor="releaseYear"> Release Year </label>
      <DatePicker
        selected={releaseYear ? new Date(releaseYear, 0, 1) : null}
        onChange={handleYearChange}
        showYearPicker
        dateFormat="yyyy"
        placeholderText="Select Year"
        className={stylesYear.input}
      />
    </>
  );
};

export default ReleaseYearFilter;
