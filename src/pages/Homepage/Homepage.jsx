/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Card from "../../components/Card/Card";
import TrendMovieFetcher from "../../components/Fetcher/TrendingMovieFetcher";
import FetcherSearch from "../../components/Fetcher/SearchMovies";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const [searchMode, setSearchMode] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const modalRef = useRef(null);

  const trend = useSelector((state) => state.trend.trend);

  const toggleSearchMode = () => {
    setSearchMode(!searchMode);
    setQuery("");
    setSearchResults([]);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSearchMode(false);
    }
  };

  useEffect(() => {
    if (searchMode) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchMode]);

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="hero h-96 bg-base-300 object-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg)`,
        }}
      >
        <div className="w-full h-96 object-cover bg-slate-800 opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">
              Welcome to Kourindou Movie
            </h1>
            <p className="py-6 text-white">
              Discover a collection of movies curated just for you. From latest
              releases to all-time favorites.
            </p>
            <button onClick={toggleSearchMode} className="btn btn-primary">
              {searchMode ? "Close Search" : "Browse Movies"}
            </button>
          </div>
        </div>
      </div>

      {/* Search Mode Popup */}
      {searchMode && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-base-300 p-8 rounded-lg max-w-3xl w-full h-auto max-h-[80vh] overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold mb-4 text-center text-white">
              Search Movies
            </h2>
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Enter movie name..."
              className="input input-bordered w-full mb-4"
            />
            <FetcherSearch query={query} onResults={handleSearchResults} />
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {searchResults.map((movie) => (
                  <Card
                    key={movie.id}
                    imgUrl={movie.poster_path}
                    title={movie.title || movie.name}
                    id={movie.id}
                    desc={movie.overview}
                    rating={movie.vote_average}
                    mediaType={movie.media_type}
                  />
                ))}
              </div>
            ) : (
              query && (
                <p className="text-center text-white">
                  No results found for "{query}"
                </p>
              )
            )}
          </div>
        </div>
      )}

      {/* Trending Section */}
      <div className="py-10">
        <TrendMovieFetcher />
        <h2 className="text-3xl text-center font-semibold mb-8">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto max-w-6xl px-4">
          {trend?.map((movie) => (
            <Card
              key={movie.id}
              imgUrl={movie.poster_path}
              title={movie.media_type === "tv" ? movie.name : movie.title}
              id={movie.id}
              desc={movie.overview}
              rating={movie.vote_average}
              mediaType={movie.media_type}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-base-300 text-center py-4 mt-10">
        <p>© 2024 Movies Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
