import Image from "next/image";
import React from "react";

function ListMoviesItem({ movie }: any) {
  const ImageURL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="relative m-4 w-56 h-80 md:w-52 md:h-72 rounded-xl transition duration-300 delay-150 hover:-translate-y-3 hover:cursor-pointer border-4 border-transparent hover:border-white ">
      <Image
      className="rounded-lg"
        src={ImageURL + movie.poster_path}
        alt="poster"
        layout="fill"

      />
      <h1 className="absolute p-2 text-white text-sm bottom-0 z-10">{movie.title}</h1>
      <h1 className="absolute p-2 text-white text-sm bottom-0 inset-0 bg-gradient-to-b from-transparent to-slate-950 rounded-md"></h1>
      
    </div>
  );
}

export default ListMoviesItem;
