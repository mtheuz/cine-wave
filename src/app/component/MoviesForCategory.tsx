import React from "react";
import ListMoviesItem from "./ListMoviesItem";
type Props = {
    title: string;
    movies: any
    children ?: React.ReactNode,
}
function MoviesForCategory({title, movies, children} : Props) {
  return (
    <div className="w-full ">
      <div className="flex justify-between">
        <h1 className="flex w-auto text-white rounded-lg md:rounded-none bg-blue-secondary md:bg-transparent justify-center md:justify-start text-xl md:text-2xl font-bold my-2 md:my-1 md:ml-10">
          {title}
        </h1>
        {children}
      </div>
      <div className="flex flex-wrap items-center  justify-center">
        {movies.map((movie: any, index: number) => (
          <ListMoviesItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesForCategory;
