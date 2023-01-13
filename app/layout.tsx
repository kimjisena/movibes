'use client';

import { useState, useEffect } from 'react';
import './globals.css';
import Navbar from './Navbar.component';
import Header from '../components/Header.component';
import SearchResult from './SearchResult.component';

export default function RootLayout({ children }: { children: any }) {
  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<any[]>([]);

  const updateQuery = (value: string) => {
    setQuery(value);
  }

  useEffect(() => {
    const rootUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

    if (query) {
      fetch(rootUrl)
      .then((result) => {
        result.json()
        .then(data => {
          console.log(data.results);
          setResult(data.results);
        });
      }).catch(err => {
        console.log(err);
      });
    }

  }, [query]);

  return (
    <html lang="en">
      <head />
      <body className={`flex flex-row justify-end bg-black w-[100vw] lg:w-[90vw] lg:ml-[5vw] lg:mr-[5vw]`}>
        <Navbar />
        <main className="w-full md:w-[75%] md:pr-4 lg:pr-0">
          <Header updateQuery={updateQuery} query={query} />
          {
            query ? <SearchResult result={result} /> : children
          }
        </main>
      </body>
    </html>
  );
}
