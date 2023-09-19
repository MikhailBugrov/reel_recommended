import { ChangeEvent } from "react";
import stylesVoteAverage from "./VoteAverageFilter.module.scss";

interface FiltersProps {
  minVoteAverage: string;
  setMinVoteAverage: React.Dispatch<React.SetStateAction<string>>;
}

const VoteAverageFilter: React.FC<FiltersProps> = ({
  minVoteAverage,
  setMinVoteAverage,
}) => {
  const handleVoteAverageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinVoteAverage(e.target.value);
  };

  return (
    <>
      <label htmlFor="voteAverage"> Min Rating </label>

      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={minVoteAverage || 0}
        onChange={handleVoteAverageChange}
        className={stylesVoteAverage.input}
      />
      <div className={stylesVoteAverage.scale}>
        {[...Array(11)].map((_, index) => (
          <span key={index}>{index}</span>
        ))}
      </div>
    </>
  );
};

export default VoteAverageFilter;
