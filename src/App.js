import React from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import WelcomeGame from "./components/WelcomeGame";
import EndGame from "./components/EndGame";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStarted: false,
      winner: false,
      playerWhoWon: ""
    };
  }

  newGame = () => {
    this.setState({
      gameStarted: true,
      winner: false,
      playerWhoWon: ""
    });
  };

  startGame = () => {
    this.setState({
      gameStarted: true
    });
  };

  gameOver = player => {
    this.setState({
      winner: true,
      playerWhoWon: player
    });
  };

  render() {
    const { gameStarted, winner, playerWhoWon } = this.state;
    return (
      <>
        <div className="board-container shadow-lg rounded p-3">
          {gameStarted ? (
            winner ? (
              <EndGame winner={playerWhoWon} newGame={this.newGame} />
            ) : (
              <GameBoard gameOver={this.gameOver} />
            )
          ) : (
            <WelcomeGame startGame={this.startGame} />
          )}
        </div>
      </>
    );
  }
}

export default App;
