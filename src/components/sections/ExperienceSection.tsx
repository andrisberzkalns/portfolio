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
          <div className="absolute left-18 top-0 h-full w-px bg-slate-200" />
          <div className="space-y-10">
            {portfolioData.experience.map((item) => {
              const periodParts = item.period.split(' - ')
              const displayParts =
                periodParts.length === 2
                  ? [periodParts[1], periodParts[0]]
                  : periodParts

              return (
                <article key={item.id} className="relative flex gap-6">
                  <div className="flex w-36 flex-col items-center gap-5 pt-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-[11px] font-semibold text-slate-600 shadow-sm">
                      <span className="text-center leading-tight">
                        {displayParts.map((part) => (
                          <span key={part} className="block">
                            {part}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex h-36 w-36 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md">
                      <img
                        src={item.logoSrc}
                        alt={item.logoAlt ?? `${item.company} logo`}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
