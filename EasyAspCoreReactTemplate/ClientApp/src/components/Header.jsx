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
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Vibe Core
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Modern Stack
            </p>
          </div>
        </div>

        {/* Navigation Links */}
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
