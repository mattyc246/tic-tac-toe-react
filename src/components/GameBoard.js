import React from "react";
import Tile from "./Tile";

class GameBoard extends React.Component {
  constructor({ gameOver }) {
    super({ gameOver });
    this.gameOver = gameOver;
    this.state = {
      boardState: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X"
    };
  }

  componentDidMount() {
    this.setState({
      boardState: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X"
    });
  }

  checkWin = () => {
    const { currentPlayer, boardState } = this.state;
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let winner = false;
    let nextPlayer = currentPlayer === "X" ? "O" : "X";
    winCombos.forEach(combo => {
      let check = combo.map(pos => {
        return boardState[pos];
      });
      if (check.join("") === currentPlayer.repeat(3)) {
        return (winner = true);
      }
    });
    if (winner) {
      this.gameOver(currentPlayer);
    } else if (!boardState.includes("")) {
      this.gameOver("Nobody");
    } else {
      this.setState({ currentPlayer: nextPlayer });
    }
  };

  updateBoard = ind => {
    const { boardState, currentPlayer } = this.state;
    let newBoard = [...boardState];
    if (newBoard[ind] === "") {
      newBoard[ind] = currentPlayer;
      this.setState(
        {
          boardState: newBoard
        },
        () => {
          this.checkWin();
        }
      );
    }
  };

  render() {
    const { boardState } = this.state;
    return (
      <>
        <div className="row h-100">
          {boardState.map((val, pos) => {
            return (
              <Tile
                key={pos}
                value={val}
                index={pos}
                makeMove={this.updateBoard}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default GameBoard;
