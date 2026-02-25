import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import "../components/AuthHeader.js";

function Header() {
  const { theme } = useTheme();
  const authHeaderRef = useRef(null);

  useEffect(() => {
    if (authHeaderRef.current) {
      if (theme === "dark") {
        authHeaderRef.current.classList.add("dark");
      } else {
        authHeaderRef.current.classList.remove("dark");
      }
    }
  }, [theme]);

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
            <Link
              className="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
              to="/"
            >
              Vibe Core
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Modern Stack
            </p>
          </div>
        </div>

        {/* Authentication Header Web Component */}
        <auth-header ref={authHeaderRef}></auth-header>
      </nav>
    </header>
  );
}

export default Header;
