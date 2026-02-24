function About() {
  return (
    <section className="rounded-3xl border border-slate-200 dark:border-slate-800/60 bg-slate-100/60 dark:bg-slate-900/60 p-8">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
        About this stack
      </h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        A modern React surface layered into ASP.NET Core, with Tailwind driving
        a consistent visual system across the project.
      </p>
      <ul className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
        <li className="rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-slate-200/40 dark:bg-slate-950/40 p-4">
          React 18 with React Router
        </li>
        <li className="rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-slate-200/40 dark:bg-slate-950/40 p-4">
          Vite build + HMR
        </li>
        <li className="rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-slate-200/40 dark:bg-slate-950/40 p-4">
          Tailwind shared utility layer
        </li>
        <li className="rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-slate-200/40 dark:bg-slate-950/40 p-4">
          Razor Pages for server views
        </li>
      </ul>
    </section>
  );
}

export default About;
