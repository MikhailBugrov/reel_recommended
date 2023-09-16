"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsBookmarkStarFill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import styles from "./header.module.scss";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`${styles.header} ${visible ? "" : styles.hidden}`}>
      <Link href="/" passHref className={styles.header__link}>
        Home
      </Link>
      <Link href="/movies" passHref className={styles.header__link}>
        Movies
      </Link>
      <SearchBar />
      <Link href="/favourites" passHref className={styles.header__link}>
        <BsBookmarkStarFill className={styles.star} />
      </Link>
    </header>
  );
};

export default Header;
