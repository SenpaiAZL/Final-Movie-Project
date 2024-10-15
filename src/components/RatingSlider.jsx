import React from "react";

const RatingSlider = ({ value }) => {
  return (
    <>
      <input
        type="range"
        min={0}
        max="10"
        value={value !== null ? value : 0} // Handle null case
        className="range"
        step="1"
      />
      <div className="flex w-full justify-between px-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </>
  );
};

export default RatingSlider;
