import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyProvider from "../components/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reel Recommended",
  description:
    "Stay up-to-date with the latest movies and find hidden gems in our film discovery app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyProvider>
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        </MyProvider>
      </body>
    </html>
  );
}
