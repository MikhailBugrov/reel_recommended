import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Reel Recommended",
};

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
