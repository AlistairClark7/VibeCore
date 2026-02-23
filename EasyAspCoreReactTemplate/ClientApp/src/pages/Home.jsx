function Home() {
  return (
    <section className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
      <p className="text-xs uppercase tracking-[0.25em] text-sky-300/80">
        Vibe coding starter
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
        React + Vite meets ASP.NET Core
      </h2>
      <p className="mt-4 max-w-2xl text-slate-300">
        Build fast, ship confident. This app runs under <code>/app</code> with
        hot module replacement and shares the same Tailwind design system as the
        Razor pages.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5">
          <p className="text-sm font-semibold text-slate-100">Hot reload</p>
          <p className="mt-2 text-sm text-slate-400">
            Keep the creative flow with instant feedback while you code.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5">
          <p className="text-sm font-semibold text-slate-100">Shared styling</p>
          <p className="mt-2 text-sm text-slate-400">
            Tailwind utilities unify the look across React and Razor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
