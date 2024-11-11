import { motion } from "framer-motion";
import { SquareValue } from "../lib/type";

const Square = ({
  value,
  onClick,
}: {
  value: SquareValue;
  onClick: () => void;
}) => (
  <motion.button
    className="sm:w-24 sm:h-24 w-full h-24 bg-primary/5 hover:bg-blue-500/20 dark:hover:bg-blue-500/20 dark:bg-[#111827] rounded-md flex items-center justify-center text-4xl font-bold overflow-hidden"
    onClick={onClick}
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{ scale: 0.95 }}
    aria-label={value ? `Square with ${value}` : "Empty square"}
  >
    {value && (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className={value === "X" ? "text-blue-500" : "text-red-500"}
      >
        {value}
      </motion.span>
    )}
  </motion.button>
);

export default Square;
