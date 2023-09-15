// "use client";

// import { useSearchParams } from "next/navigation";

// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getSearch } from "@/services";
// import Image from "next/image";
// import Pagination from "@/components/Pagination";
// import { imageUrl } from "@/utils/constants";
// import Link from "next/link";

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const [currentPage, setCurrentPage] = useState(1);

//   const {
//     data: movies,
//     error,
//     isLoading,
//     isFetching,
//   } = useQuery({
//     queryKey: ["movies", searchParams.get("query"), currentPage],
//     queryFn: () => getSearch(searchParams.get("query"), currentPage),
//   });
//   console.log(movies);

//   if (error) return <div>Error loading movies</div>;
//   if (isLoading) return <div>Loading...</div>;
//   if (movies?.results.length === 0) return <div>No movies found</div>;

//   return (
//     <div>
//       <div>
//         <ul>
//           {movies?.results.map((movie: any) => (
//             <li key={movie.id}>
//               <Link href={`/movies/${movie.id}`}>
//                 {movie.title}
//                 <Image
//                   src={`${imageUrl}${movie.poster_path}`}
//                   width={200}
//                   height={300}
//                   alt={movie.title}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Pagination
//         currentPage={currentPage}
//         totalPages={movies?.total_pages}
//         onPreviousPage={() => setCurrentPage(currentPage - 1)}
//         onNextPage={() => setCurrentPage(currentPage + 1)}
//         onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
//       />
//     </div>
//   );
// };

// export default SearchPage;

"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSearch } from "@/services";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";
import styles from "@/components/StylesPageWrapper/styles.module.scss";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: movies,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["movies", searchParams.get("query"), currentPage],
    queryFn: () => getSearch(searchParams.get("query"), currentPage),
  });

  if (error) return <div>Error loading movies</div>;
  if (isFetching) return <div>Loading...</div>;
  if (movies?.results.length === 0) return <div>No movies found</div>;

  return (
    <div className={styles.pageWrapper}>
      <h2>Search</h2>

      <div className={styles.movieGrid}>
        {movies?.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            posterUrl={movie.poster_path}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={movies?.total_pages}
        onPreviousPage={() => setCurrentPage(currentPage - 1)}
        onNextPage={() => setCurrentPage(currentPage + 1)}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
};

export default SearchPage;
