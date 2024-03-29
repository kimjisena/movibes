'use cliet';
import Image from "next/image";
import { FaStar } from "react-icons/fa";

 export type Movie = {
    poster_path: string,
    backdrop_path: string,
    vote_average: number,
};

type PosterCardPropTypes = {
    value?: Movie | undefined,
}

export default function PosterCard ({ value }: PosterCardPropTypes) {
    return (
        <div className={`relative`}>
            <Image className={`h-auto rounded-2xl`} src={`https://image.tmdb.org/t/p/w185${value?.poster_path}`} width={150} height={150} alt="Poster" />
            <div className={`absolute right-0 top-0 flex flex-row items-center justify-center px-2 py-1 bg-lightgray bg-opacity-40 rounded-tr-2xl rounded-bl-2xl`}>
                <FaStar size={12} className={`text-gold mr-1`} />
                <p className={`text-sm12 text-white`}>
                    {value?.vote_average}
                </p>
            </div>
        </div>
    );
}
