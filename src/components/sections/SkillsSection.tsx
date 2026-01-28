import {
  Bolt,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Palette,
  Server,
  Shield,
  Smartphone,
  Terminal,
  type LucideIcon,
} from 'lucide-react'

import {
  portfolioData,
  type ToolCategory,
  type ToolItem,
  type SkillIconName,
} from '../../data/portfolio'

const iconMap: Record<SkillIconName, LucideIcon> = {
  code: Code,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  palette: Palette,
  bolt: Bolt,
  terminal: Terminal,
  cpu: Cpu,
  globe: Globe,
  shield: Shield,
  smartphone: Smartphone,
  server: Server,
}

const categoryLabels: Record<ToolCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  design: 'Design',
  '3d': '3D',
  devops: 'DevOps',
  ecommerce: 'Ecommerce',
}

function ToolCard({ tool }: { tool: ToolItem }) {
  const Icon = iconMap[tool.icon]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
          <Icon className={`h-5 w-5 ${tool.accentClass}`} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{tool.name}</p>
          {tool.note ? (
            <p className="text-xs text-slate-500">{tool.note}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function ToolsSection() {
  const groupedTools = portfolioData.tools.reduce<
    Record<ToolCategory, ToolItem[]>
  >(
    (acc, tool) => {
      acc[tool.category] = [...(acc[tool.category] ?? []), tool]
      return acc
    },
    {
      frontend: [],
      backend: [],
      design: [],
      '3d': [],
      devops: [],
      ecommerce: [],
    },
  )

  return (
    <section id="skills" className="bg-slate-50 px-6 py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">My Stack</h2>
          <p className="mt-3 text-base text-slate-500">
            Tools and platforms I rely on to build, ship, and design products
          </p>
        </div>
        <div className="space-y-10">
          {(Object.keys(groupedTools) as ToolCategory[]).map((category) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                {categoryLabels[category]}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {groupedTools[category].map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
