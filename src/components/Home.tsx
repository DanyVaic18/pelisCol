import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import Menu from "./Menu";
import {Movie} from '../interfaces/movieInterface';

const Home = () => {
  const API_LINK: string = "https://api.themoviedb.org/3";
  const API_KEY: string = "cc39ef0542db89480ea0c89ffe75b641";
  const IMG_LINK: string = "https://image.tmdb.org/t/p/original";

  const [moviesArray, setMoviesArray] = useState([]);
  const [switchMenu, setSwitchMenu] = useState<boolean>(
    window.screen.width >= 460
  );
  const obj:Movie = {
    adult: false,
    backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
    genre_ids: [27, 9648, 53],
    id: 631842,
    original_language: "en",
    original_title: "Knock at the Cabin",
    overview:
      "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
    popularity: 4112.616,
    poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
    release_date: "2023-02-01",
    title: "Knock at the Cabin",
    video: false,
    vote_average: 6.5,
    vote_count: 670,
  };

  function handleFetchMovies(req: any): void {
    fetch(`${API_LINK}/discover/movie/?api_key=${API_KEY}`)
      .then((rep) => rep.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  const showMenu = (): void => {
    switchMenu ? setSwitchMenu(false) : setSwitchMenu(true);
  };

  return (
    <div className="h-screen w-screen bg-neutral-100 font-montserrat_Al flex flex-wrap">
      <div className="absolute w-full p-2 h-12 bg-neutral-900 text-center text-white ">
        <h1 className="font-semibold text-2xl tracking-widest">PELISCOL</h1>
      </div>
      <div
        className="w-8 h-8 m-2 text-white bg-neutral-800 flex items-center rounded-md justify-center cursor-pointer absolute z-10 hover:border hover:border-white hover:bg-neutral-700 "
        onClick={showMenu}
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </div>
      <Menu switchMenu={switchMenu}></Menu>
      <Canvas></Canvas>
    </div>
  );
};

export default Home;
