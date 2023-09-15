"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";

import { HiSearchCircle } from "react-icons/hi";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/search?query=${search}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.header__search}>
      <input
        type="text"
        placeholder="Movie search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <HiSearchCircle
        className={styles.hiSearchCircle}
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
