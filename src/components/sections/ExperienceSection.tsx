import { portfolioData } from '../../data/portfolio'

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white px-6 py-20 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Experience</h2>
          <p className="mt-3 text-base text-slate-500">
            Roles that have shaped my experience as a software engineer
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-18 top-0 hidden h-full w-px bg-slate-200 sm:block" />
          <div className="space-y-10">
            {portfolioData.experience.map((item) => {
              const periodParts = item.period.split(' - ')
              const displayParts =
                periodParts.length === 2
                  ? [periodParts[1], periodParts[0]]
                  : periodParts

              return (
                <article
                  key={item.id}
                  className="relative flex flex-col gap-6 sm:flex-row"
                >
                  <div className="flex w-full flex-row items-center justify-start gap-4 sm:w-36 sm:flex-col sm:items-center sm:justify-center sm:gap-5 sm:pt-1">
                    <div className="flex h-24 min-w-24 items-center justify-center rounded-lg border border-slate-200 bg-white px-2 text-sm font-semibold text-slate-600 shadow-sm sm:h-14 sm:w-14 sm:min-w-14 sm:rounded-full sm:px-0 sm:text-[11px]">
                      <span className="text-center leading-tight sm:hidden">
                        {periodParts.length === 2 ? (
                          <>
                            <span className="block">{periodParts[1]}</span>
                            <span className="block text-slate-300">|</span>
                            <span className="block">{periodParts[0]}</span>
                          </>
                        ) : (
                          <span className="block">{item.period}</span>
                        )}
                      </span>
                      <span className="hidden text-center leading-tight sm:block">
                        {displayParts.map((part) => (
                          <span key={part} className="block">
                            {part}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex h-24 flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md sm:h-36 sm:w-36 sm:flex-none">
                      <img
                        src={item.logoSrc}
                        alt={item.logoAlt ?? `${item.company} logo`}
                        className="h-full w-full object-contain p-3 sm:h-24 sm:w-24 sm:p-0"
                      />
                    </div>
                  </div>
                  <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-1">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.role}
                      </h3>
                      <p className="text-sm text-slate-500">{item.company}</p>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">
                      {item.summary}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-500">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
