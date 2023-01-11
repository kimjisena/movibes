"use client";


import { useState } from "react";
import { 
  BsCameraReels,
  BsDisplay, 
  BsCalendar2Week,
} from 'react-icons/bs';
import { VscHome } from 'react-icons/vsc';
import Logout from "./Logout.component";
import Navicon from "./Navicon.component";
import Ticket from "./Ticket.component";

export default function Navbar () {
  const [active, setActive] = useState<string>('home');

  return (
    <nav className={`fixed bottom-0 z-50 bg-darkgray w-full h-12 md:top-0 md:left-0 lg:left-[5vw] md:w-[23%] lg:w-1/5 md:h-[100vh] md:rounded-tr-[45px] md:rounded-br-[45px]`}>
      {/** desktop navigation */}
      <div className="hidden md:contents">
        <div className="h-full">
          <div className="h-[20%] flex flex-col justify-center">
            <h1 className={`text-primary font-serif text-4xl lg:text-6xl font-bold text-center`}>
              Movibes
            </h1>
          </div>

          <ul className={`flex flex-col`}>
            <Navicon name="Home" id="home" size={32} Icon={VscHome} active={active} />
            <Navicon name="Movies" id="movies" size={28} Icon={BsCameraReels} active={active} />
            <Navicon name="TV Series" id="tv-series" size={28} Icon={BsDisplay} active={active} />
            <Navicon name="Upcoming" id="upcoming" size={27} Icon={BsCalendar2Week} active={active} />
          </ul>

          <div id="bottom-nav" className="h-2/5">
            <Ticket />
            <Logout />
          </div>
        </div>
      </div>
      {/** mobile navigation */}
      <div className="contents md:hidden">
      <ul className={`flex flex-row justify-evenly items-center h-full w-full border-t-lightgray border-t-[1px]`}>
        <li id="home" className="">
          <div>
            <VscHome className={`${active === 'home' ? 'text-primary' : 'text-lightgray'}`} size={32} />
          </div>
        </li>

        <li id="movies">
          <div>
            <BsCameraReels className={`${active === 'movies' ? 'text-primary' : 'text-lightgray'}`} size={28} />
          </div>
        </li>

        <li id="tv-shows">
          <div>
            <BsDisplay className={`${active === 'tv-series' ? 'text-primary' : 'text-lightgray'}`} size={28} />
          </div>
        </li>

        <li id="upcoming">
          <div>
            <BsCalendar2Week className={`${active === 'upcoming' ? 'text-primary' : 'text-lightgray'}`} size={27} />
          </div>
        </li>
      </ul>
      </div>
    </nav>
  );
}
