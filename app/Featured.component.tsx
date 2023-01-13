'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

type Movie = {
  poster_path: string,
  backdrop_path: string,
}

export default function Featured () {
  const [movie, setMovie] = useState<Movie | null >(null);

  useEffect(() => {
    const rootUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`;

    if (!movie) {
      fetch(rootUrl)
      .then((result) => {
        result.json()
        .then(data => {
          console.log(data.results[0]);
          setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
        });
      }).catch(err => {
        console.log(err);
      });
    }

  }, [movie]);

	return (
    <div className={`relative bg-darkgray w-full h-64 rounded-md overflow-hidden`}>
      <Image src={`https://image.tmdb.org/t/p/w780${movie?.poster_path}`} width={600} height={256} alt="Poster" className={`w-full absolute left-0 -top-24 rounded-md object-cover`} />

      <div className={`absolute left-[60%] top-[80%] flex flex-row`}>
        <button className={`p-2 bg-lightgray bg-opacity-40 hover:bg-opacity-60 text-white rounded-md mr-4`}>
          <div className={`flex flex-row items-center justify-center w-full h-full`}>
            <FaPlay size={14} className={'z-20 ml-2'} />
            <p className={`text-sm font-bold px-2 z-20`}>Play</p>
          </div>
        </button>

        <button className={`p-2 bg-lightgray bg-opacity-40 hover:bg-opacity-60 text-white rounded-md`}>
          <div className={`flex flex-row items-center justify-center w-full h-full`}>
            <FaInfoCircle size={14} className={'z-20 ml-2'} />
            <p className={`text-sm font-bold px-2 z-20`}>More info</p>
          </div>
        </button>
      </div>
    </div>
  )
}
