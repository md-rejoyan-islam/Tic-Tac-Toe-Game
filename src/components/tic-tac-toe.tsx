import { useEffect, useState } from "react";
import { calculateWinner } from "../helper/helper";
import { RotateCcwIcon } from "../helper/svg";
import { BoardState } from "../lib/type";
import Board from "./board";
import Header from "./header";
import Moves from "./moves";

export function TicTacToe() {
  const [history, setHistory] = useState<BoardState[]>([
    { squares: Array(9).fill(null), xIsNext: true },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = current.xIsNext ? "X" : "O";
    setHistory(
      newHistory.concat([{ squares: squares, xIsNext: !current.xIsNext }])
    );
    setStepNumber(newHistory.length);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
  };

  const resetGame = () => {
    setHistory([{ squares: Array(9).fill(null), xIsNext: true }]);
    setStepNumber(0);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (history.length === 10) {
    status = "Draw!";
  } else {
    status = `Next player: ${current.xIsNext ? "X" : "O"}`;
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 space-y-6">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col items-center space-y-4">
            <Board squares={current.squares} onClick={handleClick} />
            <div className="text-xl font-semibold">{status}</div>
            <button
              onClick={resetGame}
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2  flex   items-center space-x-2 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
            >
              <RotateCcwIcon />
              <span>Reset Game</span>
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">Game History</h2>
            <ul className="space-y-2">
              {
                <Moves
                  history={history}
                  jumpTo={jumpTo}
                  stepNumber={stepNumber}
                />
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
