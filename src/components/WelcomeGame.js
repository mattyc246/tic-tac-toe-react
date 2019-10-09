import React from "react";

const WelcomeGame = ({ startGame }) => {
  return (
    <>
      <div className="w-50 centered">
        <h1 className="text-center text-light">Welcome To Tic Tac Toe</h1>
        <button
          className="btn btn-outline-info mt-3 mx-auto d-block"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>
    </>
  );
};

export default WelcomeGame;
