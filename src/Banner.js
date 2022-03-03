import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Request";

import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  console.log(movie);
  const trucfunc = (string) => {
    return string.slice(0, 150) + "...";
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
       " https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <div className="banner_description">{"trucfunc(movie.overview)"}</div>
      </div>
      <div className="banner_fadebuttom" />
    </header>
  );
};

export default Banner;
