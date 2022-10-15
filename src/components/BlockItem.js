import React from "react";
import "./BlockItem.css";

const BlockItem = ({ color }) => {
  const createClassNameForBlock = (color) => {
    if (color === "green") {
      return "green_block";
    }
    if (color === "yellow") {
      return "yellow_block";
    }
    if (color === "color") {
      return "lime_block";
    }
    return "red_block";
  };
  return (
    <div>
      <div className={`block ${createClassNameForBlock(color)}`}></div>
    </div>
  );
};

export default BlockItem;
