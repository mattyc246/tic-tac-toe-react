import React from "react";

const Tile = ({ value, index, makeMove }) => {
  return (
    <div className="col-4 p-15">
      <div
        className={`game-tile ${
          value.length > 0 ? "unavailable" : "available"
        }`}
        onClick={() => {
          makeMove(index);
        }}
      >
        <div className="tile-marker">{value}</div>
      </div>
    </div>
  );
};

export default Tile;
