import { BoardState } from "../lib/type";

export default function Moves({
  history,
  jumpTo,
  stepNumber,
}: {
  history: BoardState[];
  jumpTo: (move: number) => void;
  stepNumber: number;
}) {
  return history.map((_, move) => (
    <li key={move}>
      <button
        onClick={() => jumpTo(move)}
        className={`h-9 rounded-md px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground  ${
          move === stepNumber ? "font-bold" : "font-medium"
        } `}
      >
        {move ? `Go to move #${move}` : "Go to game start"}
      </button>
    </li>
  ));
}
