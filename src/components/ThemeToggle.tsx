import { useTheme } from "../lib/ThemeProvider";

function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="ml-4 px-3 py-2 rounded-lg border border-black/20 dark:border-white/20 transition"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
