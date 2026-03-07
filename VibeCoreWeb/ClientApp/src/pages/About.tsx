function About() {
  const features = [
    {
      title: "React 18 with Router",
      description: "Modern React patterns with client-side routing",
      icon: "⚛️",
      color: "from-sky-500 to-sky-700",
    },
    {
      title: "Vite Build + HMR",
      description: "Lightning-fast build tool with hot module replacement",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Tailwind CSS System",
      description: "Utility-first styling shared across React and Razor",
      icon: "🎨",
      color: "from-teal-500 to-teal-700",
    },
    {
      title: "Razor Pages",
      description: "Server-rendered views with seamless ASP.NET integration",
      icon: "🔗",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Dark/Light Modes",
      description: "Beautifully crafted themes with smooth transitions",
      icon: "🌙",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Fully Responsive",
      description: "Mobile-first design that works on any screen size",
      icon: "📱",
      color: "from-rose-500 to-rose-700",
    },
  ];

  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"></div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 px-3 py-1 rounded-full">
              About this stack
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Modern Stack for Modern Web Apps
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            A thoughtfully designed combination of React, Vite, and ASP.NET Core that gives you the best of both frontend and backend worlds. Everything is configured for optimal performance, developer experience, and stunning visual presentation.
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-950 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl"
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>

            <div className="relative">
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-8 sm:p-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Complete Tech Stack
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div>
            <h4 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              </span>
              Frontend
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span><strong>React 18</strong> for UI components</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span><strong>React Router</strong> for navigation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span><strong>Vite</strong> for blazing fast builds</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span><strong>Tailwind CSS</strong> for styling</span>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h4 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 11-2 0V5H5v14h6a1 1 0 110 2H4a1 1 0 01-1-1V4z" /></svg>
              </span>
              Backend
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                <span><strong>ASP.NET Core</strong> web framework</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                <span><strong>Razor Pages</strong> for server views</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                <span><strong>Entity Framework Core</strong> for data</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                <span><strong>ASP.NET Identity</strong> for auth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white dark:bg-slate-950 p-8 sm:p-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Why This Stack?
        </h3>

        <div className="space-y-4">
          {[
            {
              title: "Best of Both Worlds",
              desc: "Get the modern frontend experience of React with the proven backend reliability of ASP.NET Core.",
            },
            {
              title: "Developer Experience",
              desc: "Fast builds, hot reload, and smooth workflow with industry-standard tools and practices.",
            },
            {
              title: "Performance",
              desc: "Optimized from the ground up with Vite, tree-shaking, and lazy loading for lightning-fast apps.",
            },
            {
              title: "Consistency",
              desc: "Single design system (Tailwind) ensures visual coherence across React and Razor Pages.",
            },
            {
              title: "Scalability",
              desc: "ASP.NET Core handles enterprise-grade requirements while React manages complex UI state.",
            },
            {
              title: "Community",
              desc: "Both technologies have massive communities and ecosystems with endless resources and libraries.",
            },
          ].map((benefit, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b border-slate-200/60 dark:border-slate-800/40 last:border-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-semibold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
