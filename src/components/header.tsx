import { MoonIcon, SunIcon } from "../helper/svg";
import { Switch } from "./ui/switch";

export default function Header({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <div className="flex justify-between items-center pb-3">
      <h1 className="text-3xl font-bold">Tic-Tac-Toe</h1>
      <div className="flex items-center space-x-2">
        <SunIcon />
        <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
        <MoonIcon />
      </div>
    </div>
  );
}
