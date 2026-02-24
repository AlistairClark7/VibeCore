import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800/40 bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300 w-9 h-9"></div>
            <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 text-white font-bold text-sm shadow-lg">
              VC
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Vibe Core
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Modern Stack
            </p>
          </div>
        </div>

        {/* Navigation Links & Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <Link
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-250 relative group"
              to="/"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-250 relative group"
              href="/Privacy"
            >
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-250 font-semibold"
              href="/Identity/Account/Register"
            >
              REGISTER
            </a>
            <a
              className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-250 font-semibold"
              href="/Identity/Account/Login"
            >
              LOGIN
            </a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-300/60 dark:border-slate-700/60 text-slate-700 dark:text-amber-300 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-800 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl group"
            aria-label="Toggle theme"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <div className="relative w-5 h-5">
              {theme === "light" ? (
                <svg
                  className="absolute h-5 w-5 opacity-100 rotate-0 scale-100 transition-all duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="absolute h-5 w-5 opacity-100 rotate-45 scale-100 transition-all duration-300 group-hover:-rotate-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414-1.414zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
