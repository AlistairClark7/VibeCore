import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Background ambient effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 dark:bg-sky-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-pulse-subtle"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-violet-100 dark:bg-violet-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-5 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/60 dark:border-slate-800/40 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p>&copy; 2026 - Vibe Core</p>
            {/* Keep this button and location in sync with Pages/Shared/_Layout.cshtml. */}
            <button
              onClick={toggleTheme}
              className="theme-toggle relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-300/60 dark:border-slate-700/60 text-slate-700 dark:text-amber-300 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-800 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-0.5 group"
              aria-label="Toggle theme"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <div className="relative w-6 h-6">
                <svg
                  className={`absolute h-6 w-6 group-hover:rotate-12 text-slate-700 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <svg
                  className={`absolute h-6 w-6 group-hover:rotate-12 text-amber-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
