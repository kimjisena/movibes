'use client';
import Link from "next/link";
import Image from "next/image";
import get_tmdb_config, { type Config } from "../lib/tmdb_config";

type SearchResultPropTypes = {
    result: any[]
}

export default function SearchResult ({ result }: SearchResultPropTypes) {
    return (
        <div className="text-white bg-darkgray rounded-md px-2">
            {
              result.filter(val => !val.profile_path).map((val, idx) => {

                return (
                    <div key={idx} className={`px-4 flex flex-row items-center border-b border-white`}>
                        <div className={`m-2`}>
                            <Image src={`https://image.tmdb.org/t/p/w92${val.poster_path}`} width={64} height={64} alt="Poster" className={`h-auto`} />
                        </div>
                        <p className={`p-2 font-bold text-lg`}>{val.title || val.name}</p>
                    </div>
                );
              })
            }
        </div>
    );
}