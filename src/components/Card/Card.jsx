/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, title, id, rating, desc }) => {
  return (
    <div className="card bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4 line-clamp-2">{desc}</p>
        <div className="flex justify-between items-center">
          <Link to={`/detail/${id}`}>
            <button className="btn btn-primary">Watch Now</button>
          </Link>
          <p className="text-gray-500">Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
