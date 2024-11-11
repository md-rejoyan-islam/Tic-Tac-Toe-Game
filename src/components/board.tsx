import { SquareValue } from "../lib/type";
import Square from "./square";

const Board = ({
  squares,
  onClick,
}: {
  squares: SquareValue[];
  onClick: (i: number) => void;
}) => (
  <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] aspect-square">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
