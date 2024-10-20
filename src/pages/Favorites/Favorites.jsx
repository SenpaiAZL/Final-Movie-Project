/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../../components/Card/Card"; // Assume Card is the component from earlier

const Favorites = () => {
  return (
    <div className="bg-base-100  min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Your Favorite Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder movie cards, you can map through your favorites list here */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Favorites;
