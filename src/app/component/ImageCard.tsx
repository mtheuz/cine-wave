import Image from "next/image";
import React from "react";

type Props = {
  pathBanner: string;
};
function ImageCard({ pathBanner }: Props) {
  const ImageURL = "https://image.tmdb.org/t/p/original";
  return (
    <div className=" w-auto h-40  md:h-[500px] md:w-full bg-center relative">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="rounded-xl"
        src={ImageURL + pathBanner}
        alt="image Banner"
      />
    </div>
  );
}

export default ImageCard;
