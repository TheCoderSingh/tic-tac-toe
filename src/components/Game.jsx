import { useSelector } from "react-redux";
import { Flipper } from "react-flip-toolkit";
import Tile from "./Tile";

const Game = () => {
  const board = useSelector((state) => state.board);

  return (
    <Flipper flipKey={board.join("")}>
      <div className="grid grid-rows-3 grid-cols-3 justify-center mt-10 gap-y-10 xl:w-[30%] sm:w-[60%] mx-auto text-center">
        {board.map((tile, index) => (
          <Tile tile={tile} index={index} key={index} />
        ))}
      </div>
    </Flipper>
  );
};

export default Game;
