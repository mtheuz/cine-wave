import Image from 'next/image'
import React from 'react'

type Props = {
    pathBanner : string
}
function ImageCard({pathBanner} : Props) {
    const ImageURL = "https://image.tmdb.org/t/p/w500"
  return (
    <div className="w-auto h-48  relative">
        <Image fill className="rounded-xl" src={ImageURL + pathBanner} alt='image Banner'/>
    </div>
  )
}

export default ImageCard