import { Flipped } from "react-flip-toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, setWinner, changeTurn } from "../gameSlice";
import { useState } from "react";
import "./Tile.css";

const Tile = ({ tile, index }) => {
  const turn = useSelector((state) => state.turn);
  const board = useSelector((state) => state.board);
  const winner = useSelector((state) => state.winner);
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    if (!board[index]) {
      const newBoard = board.slice();
      newBoard[index] = turn;
      dispatch(setBoard(newBoard));
      setClicked(true);

      if (isWinner(newBoard, turn)) {
        dispatch(setWinner(turn));
      } else if (isTie(newBoard)) {
        dispatch(setWinner("tie"));
      } else dispatch(changeTurn());
    }
  };

  const isWinner = (board, player) => {
    const winningCombinations = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // left-to-right diagonal
      [2, 4, 6], // right-to-left diagonal
    ];

    return winningCombinations.some((combination) =>
      combination.every((index) => board[index] === player)
    );
  };

  const isTie = (board) => {
    return !board.some((element) => element.length === 0);
  };

  return (
    <Flipped flipId={`tile-${index}`}>
      <div className="tile">
        <button
          className={`tile ${
            winner ? "bg-black" : "bg-blue-400"
          } w-[100px] h-[100px] m-auto text-7xl text-white ${
            clicked ? "clicked" : null
          }`}
          key={`tile-${index}`}
          onClick={() => handleClick(index)}
          disabled={winner}
        >
          {tile}
        </button>
      </div>
    </Flipped>
  );
};

export default Tile;
