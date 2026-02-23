import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 text-sky-200">
              VR
            </span>
            <h1 className="text-lg font-semibold tracking-tight text-white">
              Vibe React
            </h1>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <Link className="transition hover:text-white" to="/">
              Home
            </Link>
            <Link className="transition hover:text-white" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
