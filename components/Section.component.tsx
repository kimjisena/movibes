'use client';
import { useState, useEffect } from "react";
import SectionDivider from "./SectionDivider.component";
import PosterCard, {type Movie } from "./PosterCard.component";

type SectionPropTypes = {
    name: string,
    path: string,
}

export default function Section ({ name, path }: SectionPropTypes) {
    const [movies, setMovies] = useState<Movie[] | null >(null);

    useEffect(() => {
      const rootUrl = `https://api.themoviedb.org/3/movie/${path}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`;
  
      if (!movies) {
        fetch(rootUrl)
        .then((result) => {
          result.json()
          .then(data => {
            console.log(data.results.slice(0, 4));
            setMovies(data.results.slice(0, 4));
          });
        }).catch(err => {
          console.log(err);
        });
      }
  
    }, [movies]);

    return (
        <section>
            <SectionDivider name={name} />
            <div className={`flex flex-row justify-between`}>
                {
                    movies?.map((movie, idx) => {
                        return <PosterCard key={idx} value={movie} />;
                    })
                }
            </div>
        </section>
    );
}