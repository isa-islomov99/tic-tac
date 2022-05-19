import React, { useState } from "react";
import Td from "./Td";
import "./TicTac.css";

const TicTac = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Already clicked");
      return;
    }

    let squares = [...cells];

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setTurn("x");
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  return (
    <div>
      <div className="box">
        <Td num={0} handleClick={handleClick} cells={cells} />
        <Td num={1} handleClick={handleClick} cells={cells} />
        <Td num={2} handleClick={handleClick} cells={cells} />
      </div>
      <div className="box">
        <Td num={3} handleClick={handleClick} cells={cells} />
        <Td num={4} handleClick={handleClick} cells={cells} />
        <Td num={5} handleClick={handleClick} cells={cells} />
      </div>
      <div className="box">
        <Td num={6} handleClick={handleClick} cells={cells} />
        <Td num={7} handleClick={handleClick} cells={cells} />
        <Td num={8} handleClick={handleClick} cells={cells} />
      </div>
      {winner && (
        <>
          <p style={{ color: "#fff" }}>{winner} is winner!</p>
          <button onClick={() => handleRestart()} className="btn">
            Play Again
          </button>
        </>
      )}
    </div>
  );
};

export default TicTac;
