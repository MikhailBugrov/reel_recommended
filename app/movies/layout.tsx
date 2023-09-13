import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies | Reel Recommended",
};

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      -------------
      <h1>Filters</h1>
      -----------
      {children}
    </div>
  );
}
