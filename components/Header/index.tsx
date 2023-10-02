"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsBookmarkStarFill } from "react-icons/bs";

import SearchBar from "./SearchBar";
import stylesHeader from "./Header.module.scss";

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
    <header
      className={`${stylesHeader.header} ${visible ? "" : stylesHeader.hidden}`}
    >
      <Link href="/" passHref className={stylesHeader.link}>
        Home
      </Link>
      <Link href="/movies" passHref className={stylesHeader.link}>
        Movies
      </Link>
      <SearchBar />
      {/* <Link href="/favorites" passHref className={stylesHeader.link}>
        <BsBookmarkStarFill className={stylesHeader.iconsBookmark} />
      </Link> */}
    </header>
  );
};

export default Header;
