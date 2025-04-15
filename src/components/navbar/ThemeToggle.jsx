import { useTheme } from "../ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`block p-1 rounded-full text-sm ${
        isDark ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      {isDark ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
