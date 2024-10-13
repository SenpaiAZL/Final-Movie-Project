/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-900 text-white">
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
            className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">
                <a>Homepage</a>
              </Link>
            </li>
            <li>
              <Link to="Favorites">
                <a>Favorites</a>
              </Link>
            </li>
            <li>
              <Link to="/category/Action">
                <a>Category</a>
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
            className="menu dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 p-6 shadow-lg w-[300px] h-auto"
            style={{
              position: "absolute",
              top: "100%", // pop-out below the button
              left: 0,
              transform: "translateX(-20%)", // center the dropdown relative to the button
            }}
          >
            <div className="grid grid-cols-2 gap-4 text-lg">
              <li>
                <a className="hover:bg-gray-600 p-2 rounded-lg">Action</a>
              </li>
              <li>
                <a className="hover:bg-gray-600 p-2 rounded-lg">Adventure</a>
              </li>
              <li>
                <a className="hover:bg-gray-600 p-2 rounded-lg">Comedy</a>
              </li>
              <li>
                <a className="hover:bg-gray-600 p-2 rounded-lg">Drama</a>
              </li>
              <li>
                <a className="hover:bg-gray-600 p-2 rounded-lg">Horror</a>
              </li>
              <li>
                <a className="hover:bg-gray-600 p-2 rounded-lg">Sci-Fi</a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-white">Movies</a>
      </div>

      <div className="navbar-end">
        {/* Search and Notifications Icons */}
        <button className="btn btn-ghost btn-circle">
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
        <input type="checkbox" id="my-drawer" className="drawer-toggle"></input>

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