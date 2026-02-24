import { Link } from "react-router-dom";
function Header() {
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

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <a
            className="rounded-full border border-slate-300/60 dark:border-slate-700/60 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 transition hover:border-slate-400/60 dark:hover:border-slate-400/60 hover:text-slate-900 dark:hover:text-white"
            href="/Identity/Account/Register"
          >
            Register
          </a>
          <a
            className="rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-4 py-2 text-xs font-semibold text-white transition hover:from-sky-600 hover:to-sky-800 shadow-md hover:shadow-lg"
            href="/Identity/Account/Login"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
