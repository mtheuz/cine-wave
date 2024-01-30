import React from "react";
import ListMoviesItem from "./ListMoviesItem";
type Props = {
    title: string;
    movies: any
}
function MoviesForCategory({title, movies} : Props) {
  return (
    <div>
      <h1 className="text-white text-2xl font-bold mt-4 md:mt-8 md:ml-10">
        {title}
      </h1>
      <div className="flex flex-wrap items-center  justify-center">
        {movies.slice(0, 18).map((movie: any, index: number) => (
          <ListMoviesItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesForCategory;
