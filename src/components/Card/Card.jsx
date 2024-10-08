/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/300x400"
        alt="Movie Poster"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Movie Title</h2>
        <p className="text-gray-400 mb-4">
          This is a brief description of the movie. It gives you an idea of the
          plot, genre, and key highlights of the movie.
        </p>
        <div className="flex justify-between items-center">
          <Link to="/detail/83274">
            <button className="btn btn-primary">Watch Now</button>
          </Link>
          <p className="text-gray-500">Rating: 8.5</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
