"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsBookmarkStarFill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import header from "./header.module.scss";

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
    <header className={`${header.header} ${visible ? "" : header.hidden}`}>
      <Link href="/" passHref className={header.header__link}>
        Home
      </Link>
      <Link href="/movies" passHref className={header.header__link}>
        Movies
      </Link>
      <SearchBar />
      <Link href="/favourites" passHref className={header.header__link}>
        <BsBookmarkStarFill className={header.star} />
      </Link>
    </header>
  );
};

export default Header;
