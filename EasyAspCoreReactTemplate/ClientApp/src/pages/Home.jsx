function Home() {
  return (
    <section className="space-y-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-100 to-sky-50 dark:from-sky-900/10 dark:to-slate-900/5"></div>
        <div className="relative rounded-3xl border border-slate-200/60 dark:border-slate-800/40 backdrop-blur-xl overflow-hidden bg-white/60 dark:bg-slate-950/95">
          {/* Gradient background */}
          <div className="absolute inset-0 opacity-60 dark:opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-slate-100 dark:from-sky-900/10 dark:via-slate-900/5 dark:to-slate-900"></div>
          </div>

          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 dark:bg-sky-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 -mr-48 -mt-48"></div>

          {/* Content */}
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"></div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 px-3 py-1 rounded-full">
                  Starter template
                </p>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                React + Vite meets <span className="bg-gradient-to-r from-sky-500 to-sky-700 dark:from-sky-400 dark:to-sky-600 bg-clip-text text-transparent">ASP.NET Core</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Build fast, ship confident. This app runs under <code className="bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-sky-300 px-2 py-1 rounded">/app</code> with hot module replacement and shares the same Tailwind design system as the Razor pages. Everything is styled for seamless dark and light mode support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-800 dark:from-sky-500 dark:to-sky-700 text-white font-bold shadow-md hover:shadow-lg hover:shadow-sky-600/50 dark:hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-semibold hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 - Hot Reload */}
        <div className="group relative rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-950 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:border-sky-200 dark:hover:border-sky-900/40">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-100 to-transparent opacity-0 dark:opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-4 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Lightning Fast HMR
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Keep the creative flow with instant feedback while you code. Vite's Hot Module Replacement is blazingly fast.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/40">
              <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">Vite</span>
            </div>
          </div>
        </div>

        {/* Feature 2 - Shared Styling */}
        <div className="group relative rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-950 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:border-violet-200 dark:hover:border-violet-900/40">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-100 to-transparent opacity-0 dark:opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 mb-4 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 3.75A2 2 0 0010 15H6" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Shared Design System
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Tailwind utilities unify the look across React components and Razor pages for complete consistency.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/40">
              <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Feature 3 - Dark Mode */}
        <div className="group relative rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-950 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:border-amber-200 dark:hover:border-amber-900/40">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-100 to-transparent opacity-0 dark:opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-4 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 015.646 5.646 9.003 9.003 0 0015.354 20.354z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Beautiful Dark Mode
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Thoughtfully crafted light and dark themes with smooth transitions. Easy on the eyes, any time of day.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/40">
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-8 text-center">
          <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-500 to-sky-700 dark:from-sky-400 dark:to-sky-600 bg-clip-text text-transparent mb-2">
            100%
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">TypeScript Ready</p>
        </div>
        <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-8 text-center">
          <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-500 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent mb-2">
            0ms
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Bundle Size</p>
        </div>
        <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-8 text-center">
          <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent mb-2">
            100%
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Accessible</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
