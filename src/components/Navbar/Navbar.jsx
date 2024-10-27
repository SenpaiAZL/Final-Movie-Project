/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetcherSearch from "../Fetcher/SearchMovies"; // Import the search component

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
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
          <ul className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/category/Action">Category</Link>
            </li>
            <li>
              <Link to="/Lists">Lists</Link>
            </li>
            <li>
              <Link to="/Rated">Rated</Link>
            </li>
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
            checked={theme === "dark"}
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

        <button className="btn btn-ghost btn-circle" onClick={toggleSearch}>
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

        <button
          className="btn btn-ghost btn-circle"
          onClick={toggleNotification}
        >
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

        {isSearchOpen && (
          <div
            className="absolute bg-base-200 rounded-lg shadow-lg z-50 p-4 w-80"
            style={{ top: "3.5rem", right: "0" }}
          >
            <form>
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search movies..."
                className="input input-bordered w-full bg-base-300"
              />
            </form>
            <FetcherSearch query={query} onResults={handleSearchResults} />
            {searchResults.length > 0 && (
              <ul className="dropdown-content mt-2 rounded-lg max-h-60 overflow-auto">
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

        {isNotificationOpen && (
          <div className="fixed right-0 top-0 w-80 h-full bg-base-200 z-50 shadow-lg p-4 overflow-y-auto">
            <button
              className="btn btn-sm btn-ghost"
              onClick={toggleNotification}
            >
              Close
            </button>
            <h2 className="text-lg font-semibold mb-4">Notifications</h2>
            <ul className="space-y-2">
              <li className="p-2 bg-base-300 rounded">New Movies is out, check it out!</li>
              <li className="p-2 bg-base-300 rounded">Offering new sits on the theater for 50$! grab it now</li>
              <li className="p-2 bg-base-300 rounded">Touhou gets an adaption?!</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
