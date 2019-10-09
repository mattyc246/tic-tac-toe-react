import React from "react";

const EndGame = ({ winner, newGame }) => {
  return (
    <>
      <div className="w-50 centered">
        <h1 className="text-center text-light">
          {winner === "Nobody" ? "It's a tie!" : `Player ${winner} won!`}
        </h1>
        <button
          className="btn btn-outline-info mx-auto d-block"
          onClick={newGame}
        >
          Play Again?
        </button>
      </div>
    </>
  );
};

export default EndGame;
