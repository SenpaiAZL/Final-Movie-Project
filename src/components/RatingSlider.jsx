import React from "react";

const RatingSlider = (value) => {
  return (
    <>
      <input
        type="range"
        min={0}
        max="100"
        value={value}
        className="range"
        step="10"
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
