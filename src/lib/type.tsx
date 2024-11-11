export type SquareValue = "X" | "O" | null;

export interface BoardState {
  squares: SquareValue[];
  xIsNext: boolean;
}
