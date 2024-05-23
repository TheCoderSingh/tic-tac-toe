import { useSelector } from "react-redux";
import "./App.css";
import Game from "./components/Game";

const App = () => {
  const turn = useSelector((state) => state.turn);
  const winner = useSelector((state) => state.winner);

  return (
    <div className="bg-green-100 h-screen w-screen">
      <h1 className="text-7xl text-center pt-5 font-mono">Tic Tac Toe</h1>
      {!winner ? (
        <div className="mt-10 border border-blue-400 w-[30%] mx-auto p-3">
          <h2 className="text-6xl text-center text-blue-400 font-bold">
            {turn}&apos;s Turn
          </h2>
        </div>
      ) : null}
      <Game />
      {winner === "X" || winner === "O" ? (
        <div className="mt-10 border border-amber-400 w-[30%] mx-auto p-3">
          <h2 className="text-6xl text-center text-amber-400 font-bold">
            {winner} Wins
          </h2>
        </div>
      ) : winner === "tie" ? (
        <div className="mt-10 border border-amber-400 w-[30%] mx-auto p-3">
          <h2 className="text-6xl text-center text-amber-400 font-bold">
            It&apos;s a tie
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default App;
