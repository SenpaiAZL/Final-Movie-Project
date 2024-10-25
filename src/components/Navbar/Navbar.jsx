/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import FetcherSearch from "../Fetcher/SearchMovies"; // Import the search component

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // console.log("test")
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">
                <a>Homepage</a>
              </Link>
            </li>
            <li>
              <Link to="/category/Action">
                <a>Category</a>
              </Link>
            </li>
            <li>
              <Link to="/Lists">
                <a>Lists</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          {/* Browse Dropdown with Large Popup */}
          <label tabIndex={0} className="btn btn-ghost normal-case text-lg">
            Browse
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-200  rounded-box z-[1] mt-3 p-6 shadow-lg w-[300px] h-auto"
            style={{
              position: "absolute",
              top: "100%", // pop-out below the button
              left: 0,
              transform: "translateX(-20%)", // center the dropdown relative to the button
            }}
          >
            <div className="grid grid-cols-2 gap-4 text-lg">
              <li>
                <a className=" p-2 rounded-lg">Action</a>
              </li>
              <li>
                <a className=" p-2 rounded-lg">Adventure</a>
              </li>
              <li>
                <a className=" p-2 rounded-lg">Comedy</a>
              </li>
              <li>
                <a className=" p-2 rounded-lg">Drama</a>
              </li>
              <li>
                <a className=" p-2 rounded-lg">Horror</a>
              </li>
              <li>
                <a className=" p-2 rounded-lg">Sci-Fi</a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <Link to="/">
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl ">Movies</a>
        </div>
      </Link>

      <div className="navbar-end">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {/* Search and Notifications Icons */}
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => toggleSearch()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Search Popout */}
        {isSearchOpen && (
          <div
            className="absolute bg-base-200  rounded-lg shadow-lg z-50 p-4 w-80"
            style={{ top: "3.5rem", right: "0" }} // Adjusts the popout below the magnifying glass
          >
            <form>
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search movies..."

                className="input input-bordered w-full bg-base-300 " // Text color set to white

              />
            </form>

            {/* Fetch search results */}
            <FetcherSearch query={query} onResults={handleSearchResults} />

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <ul className="dropdown-content mt-2  rounded-lg max-h-60 overflow-auto ">
                {searchResults.map((movie) => (
                  <li key={movie.id} className="p-2 hover:bg-base-300">
                    <Link to={`/detail/movie/${movie.id}`}>
                      <p>
                        {movie.title} <span>{movie.release_date}</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
