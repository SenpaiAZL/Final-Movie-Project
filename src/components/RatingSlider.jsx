import React from "react";

const RatingSlider = ({ onChange }) => {
  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    console.log("Slider value changed:", newValue); // Log the value here
    onChange(newValue); // Call the parent function to update the value
  };
  return (
    <div className="my-3">
      <input
        type="range"
        min={0}
        max="10"
        onChange={handleSliderChange}
        className="range"
      />
      <div className="flex w-full justify-between text-xs px-3">
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
    </div>
  );
};

export default RatingSlider;
