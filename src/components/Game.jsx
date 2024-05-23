import { useSelector } from "react-redux";
import { Flipper } from "react-flip-toolkit";
import Tile from "./Tile";

const Game = () => {
  const board = useSelector((state) => state.board);

  return (
    <Flipper flipKey={board.join("")}>
      <div className="grid grid-rows-3 grid-cols-3 justify-center mt-10 gap-y-10 w-[30%] mx-auto">
        {board.map((tile, index) => (
          <Tile tile={tile} index={index} key={index} />
        ))}
      </div>
    </Flipper>
  );
};

export default Game;
