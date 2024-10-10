/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  // Placeholder for movie details from API
  const movie = {
    title: "Movie Title",
    rating: 8.5,
    details:
      "This is a placeholder for the movie description. This data will be fetched from the API.",
    reviews: [
      {
        id: 1,
        reviewer: "John Doe",
        comment: "Great movie! Highly recommend.",
      },
      {
        id: 2,
        reviewer: "Jane Smith",
        comment: "It was okay, some scenes were too long.",
      },
    ],
    genre: "Action, Adventure", // Placeholder for movie genres
    budget: "$200,000,000", // Placeholder for movie budget
    popularity: 850.32, // Placeholder for popularity score
    image: "https://via.placeholder.com/300", // Placeholder for movie poster
    releaseDate: "2024-12-18", // Placeholder for release date
    revenue: "$1,500,000,000", // Placeholder for movie revenue
    status: "Released", // Placeholder for movie status
    voteCount: 2563, // Placeholder for total vote count
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Movie Title, Poster and Rating */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <div className="flex items-center text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <span className="text-xl font-semibold">{movie.rating}/10</span>
        </div>
      </div>

      {/* Movie Poster */}
      <div className="mb-6">
        <img
          src={movie.image}
          alt="Movie Poster"
          className="rounded-lg shadow-lg w-64 mx-auto"
        />
      </div>

      {/* Movie Information */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Movie Details</h2>
        <p className="text-gray-400">{movie.details}</p>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold">Genre</h3>
          <p className="text-gray-400">{movie.genre}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Release Date</h3>
          <p className="text-gray-400">{movie.releaseDate}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Budget</h3>
          <p className="text-gray-400">{movie.budget}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-gray-400">{movie.revenue}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Status</h3>
          <p className="text-gray-400">{movie.status}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Popularity</h3>
          <p className="text-gray-400">{movie.popularity}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Vote Count</h3>
          <p className="text-gray-400">{movie.voteCount}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="space-y-4">
          {movie.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{review.reviewer}</h3>
              <p className="text-gray-400">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;