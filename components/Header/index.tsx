import Link from "next/link";
const Header = () => {
  return (
    <header>
      <h3>Reel Recommended</h3>
      <Link href="/">Home</Link>
      <Link href="/movies">All Movies</Link>
      <h3>search</h3>
      <h3>favourites</h3>
      ------------------------------
    </header>
  );
};

export default Header;
