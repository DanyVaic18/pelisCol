import React, { useEffect, useState } from "react";

const Home = () => {
  const API_LINK: string = "https://api.themoviedb.org/3";
  const API_KEY: string = "cc39ef0542db89480ea0c89ffe75b641";
  const IMG_LINK: string = "https://image.tmdb.org/t/p/original";

  const [moviesArray, setMoviesArray] = useState<any>([]);

  function handleFetchMovies(req: any): void {
    fetch(`${API_LINK}/discover/movie/?api_key=${API_KEY}`)
      .then((rep) => rep.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    handleFetchMovies("a");
    console.log(moviesArray);
  }, []);

  return <div className="bg-black text-white">Home</div>;
};

export default Home;
