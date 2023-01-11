'use client';

import { TbLogout } from 'react-icons/tb';
import { GrNotification } from 'react-icons/gr';
import { RiNotification4Line } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { useState, useEffect } from 'react';



export default function Header () {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);


  const handleChange = (event: any) => {
    setQuery(event.target.value);
  }

  useEffect(() => {
    const rootUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

    fetch(rootUrl)
      .then((result) => {
        result.json()
        .then(data => {
          console.log(data);
          setResults(data.results);
        });
      }).catch(err => {
        console.log(err);
      })
  }, [query]);

  return (
    <header className="w-full font-sans">
      {/** desktop header  */}
      <div className="hidden md:contents">
        <div className={`my-6 flex flex-row items-center md:justify-between`}>

          <div id="search" className={`relative md:w-3/4 lg:w-4/5 pr-2`}>
            <div className={`absolute top-0 left-0 h-full flex flex-col justify-center rounded-tl-3xl rounded-bl-3xl text-lightgray pl-6`}>
              <FiSearch size={24} />
            </div>
            <input onChange={handleChange} value={query} placeholder='Search for movies, TV shows...' type="text" className={`bg-darkgray rounded-3xl w-full text-lightgray text-md15 font-bold p-3 pl-16`} />

            <div className="text-white bg-darkgray">
            {
              results.map((res, idx) => {
                return <p key={idx} className={`border-b border-white`}>{res.title}</p>
              })
            }
            </div>
          </div>

          <div className={`flex flex-row md:w-1/4 lg:w-1/5 justify-end items-center`}>
            <div className="relative bg-darkgray text-lightgray flex flex-col justify-center items-center w-11 h-11 rounded-full p-[4px]">
              <RiNotification4Line size={32} />
              <div className={`absolute top-[15%] right-[25%] bg-primary w-2 h-2 rounded-full`}></div>
            </div>

            <div className='ml-6'>
              <Image className={`rounded-full`} src={`/kim.jpg`} width={45} height={45} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
      {/** mobile header */}
      <div className="contents md:hidden">
      <div className="flex flex-row w-full items-center p-2 border-b-lightgray border-b-[1px]">

        <div id="header-left" className={`relative w-3/5 pr-2`}>
          <div className={`absolute top-0 left-0 h-full flex flex-col justify-center rounded-tl-xl rounded-bl-xl text-lightgray pl-2`}>
            <FiSearch size={18} />
          </div>
          <input placeholder='Search...' type="search" className={`bg-darkgray rounded-xl w-full text-lightgray text-sm12 font-bold p-2 pl-8`} />
        </div>

        <div id="header-right" className={`flex flex-row w-2/5 justify-between items-center`}>
          
          <div className="relative bg-darkgray text-lightgray flex flex-col justify-center items-center w-11 h-11 rounded-full p-[4px]">
            <RiNotification4Line size={32} />
            <div className={`absolute top-[15%] right-[25%] bg-primary w-2 h-2 rounded-full`}></div>
          </div>

          <div>
            <Image className={`rounded-full`} src={`/kim.jpg`} width={38} height={38} alt="avatar" />
          </div>

          <div className="bg-darkgray text-lightgray flex flex-col justify-center items-center w-11 h-11 rounded-full p-[4px]">
            <TbLogout size={32} />
          </div>

        </div>
      </div>
      </div>
    </header>
  );
}
