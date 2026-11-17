import { semesters } from "@/lib/semester-data";

export function SemesterTimeline() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
          Trajetória
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          Timeline do curso
        </h2>
      </div>

      <ol className="relative border-s border-slate-800 ms-3">
        {semesters.map((semester) => (
          <li key={semester.label} className="mb-10 ms-6">
            <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-base">
              {semester.icon}
            </span>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-sky-300">
                  {semester.label}
                </h3>
                <span className="text-xs text-slate-500">{semester.period}</span>
              </div>

              <ul className="mt-3 space-y-2">
                {semester.projects.map((project) => (
                  <li key={project.name} className="text-sm">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-slate-100 hover:text-sky-400 underline underline-offset-2"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <span className="font-medium text-slate-100">
                        {project.name}
                      </span>
                    )}
                    <p className="text-slate-400">{project.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
