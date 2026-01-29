export type HeroContent = {
  name: string
  role: string
  tagline: string
  ctaLabel: string
  ctaHref: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  url: string
  tags: Array<string>
  gradientClass: string
  imageSrc: string
  imageAlt?: string
}

export type SkillIconName =
  | 'code'
  | 'layers'
  | 'database'
  | 'cloud'
  | 'palette'
  | 'bolt'
  | 'terminal'
  | 'cpu'
  | 'globe'
  | 'shield'
  | 'smartphone'
  | 'server'

export type Skill = {
  id: string
  label: string
  icon: SkillIconName
  accentClass: string
}

export type ToolCategory =
  | 'frontend'
  | 'backend'
  | 'design'
  | '3d'
  | 'devops'
  | 'ecommerce'

export type ToolItem = {
  id: string
  name: string
  category: ToolCategory
  note?: string
  icon: SkillIconName
  accentClass: string
}

export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  logoSrc: string
  logoAlt?: string
  summary: string
  highlights: Array<string>
}

export type SocialLink = {
  id: string
  label: string
  href: string
}

export type ContactInfo = {
  email: string
  location: string
}

export const portfolioData: {
  hero: HeroContent
  projects: Array<Project>
  skills: Array<Skill>
  tools: Array<ToolItem>
  experience: Array<ExperienceItem>
  socialLinks: Array<SocialLink>
  contact: ContactInfo
} = {
  hero: {
    name: 'Andris Bērzkalns',
    role: 'Software Engineer',
    tagline:
      'Building thoughtful web experiences, scalable systems, and delightful interfaces.',
    ctaLabel: 'Contact me',
    ctaHref: '#contact',
  },
  projects: [
    {
      id: 'project-aribabox',
      title: 'Aribabox',
      subtitle: 'Shopify',
      description:
        "Woodworking design e-commerce store. It's a Shopify store with a customized theme. It is being used and gets clients every day.",
      url: 'https://www.aribabox.com/',
      tags: ['Shopify'],
      gradientClass: 'bg-gradient-to-br from-rose-500/90 to-amber-500/80',
      imageSrc: '/project/aribabox-website.jpg',
      imageAlt: 'Aribabox website preview',
    },
    {
      id: 'project-jdk-marupe',
      title: 'JDK Mārupe',
      subtitle: 'Laravel',
      description:
        "Latvian folk dance group's website. First website I've ever made, for my at the time dance group. It's still up and running!",
      url: 'https://www.jdkmarupe.lv/',
      tags: ['Laravel', 'JavaScript', 'PHP', 'MySQL'],
      gradientClass: 'bg-gradient-to-br from-sky-500/90 to-indigo-600/80',
      imageSrc: '/project/jdkmarupe.jpg',
      imageAlt: 'JDK Mārupe preview',
    },
    {
      id: 'project-vardulis',
      title: 'Vārdulis',
      subtitle: 'Expo.dev',
      description:
        'Latvian "Wordle" clone. Made in spare time as a fun project. It\'s a word guessing game where you have to guess a word in 5 tries. Had to figure out how to scrape a coherent list of words in latvian. It is being played by hundreds of people every day.',
      url: 'https://vardulis.lv/',
      tags: ['Expo.dev'],
      gradientClass: 'bg-gradient-to-br from-emerald-500/90 to-lime-500/80',
      imageSrc: '/project/vardulis.jpg',
      imageAlt: 'Vārdulis preview',
    },
    {
      id: 'project-strawberry',
      title: 'Strawberry',
      subtitle: 'ThreeJS',
      description:
        "The first 3D project I've ever made. It's a 3D strawberry model with a simple animation. It's a simple project, but it was a big step for me in learning 3D web design.",
      url: 'https://strawberry.berzkalns.com/',
      tags: ['ThreeJS'],
      gradientClass: 'bg-gradient-to-br from-pink-500/90 to-fuchsia-600/80',
      imageSrc: '/project/strawberry.jpg',
      imageAlt: 'Strawberry preview',
    },
    {
      id: 'project-3dconnect4',
      title: '3DConnect4',
      subtitle: 'ThreeJS',
      description:
        "It's a simple game, but was a good excercise to use Prisma with NextJS and implement real time player to player interactions.",
      url: 'https://3dconnect4.berzkalns.com/',
      tags: ['ThreeJS', 'TypeScript', 'ReactJS', 'Prisma', 'NextJS'],
      gradientClass: 'bg-gradient-to-br from-orange-400/90 to-amber-600/80',
      imageSrc: '/project/3dconnect4.jpg',
      imageAlt: '3DConnect4 preview',
    },
    {
      id: 'project-atom',
      title: 'ATOM',
      subtitle: 'ThreeJS',
      description:
        "A fun project for visualizing the periodic table atoms. It's a simple project that uses ThreeJS with ReactJS and NextJS.",
      url: 'https://atom.berzkalns.com/atom/13',
      tags: ['ThreeJS', 'TypeScript', 'ReactJS', 'NextJS'],
      gradientClass: 'bg-gradient-to-br from-slate-500/90 to-slate-700/80',
      imageSrc: '/project/atom.jpg',
      imageAlt: 'ATOM preview',
    },
    {
      id: 'project-chocolate',
      title: 'Chocolate',
      subtitle: 'ThreeJS',
      description:
        'I like chocolate. So I decided to challenge myself and make a commercial astetique website for a chocolate brand. It\'s a simple project, but it was a good excercise in design and layout.',
      url: 'https://chocolate.berzkalns.com/',
      tags: ['ThreeJS', 'Drei', 'TypeScript', 'ReactJS', 'NextJS'],
      gradientClass: 'bg-gradient-to-br from-slate-700/90 to-slate-900/80',
      imageSrc: '/project/chocolate.jpg',
      imageAlt: 'Chocolate preview',
    },
  ],
  skills: [
    {
      id: 'skill-html',
      label: 'HTML',
      icon: 'code',
      accentClass: 'text-orange-500',
    },
    {
      id: 'skill-css',
      label: 'CSS',
      icon: 'palette',
      accentClass: 'text-sky-500',
    },
    {
      id: 'skill-js',
      label: 'JavaScript',
      icon: 'bolt',
      accentClass: 'text-yellow-400',
    },
    {
      id: 'skill-ts',
      label: 'TypeScript',
      icon: 'layers',
      accentClass: 'text-blue-500',
    },
    {
      id: 'skill-node',
      label: 'Node.js',
      icon: 'server',
      accentClass: 'text-green-500',
    },
    {
      id: 'skill-react',
      label: 'ReactJS',
      icon: 'globe',
      accentClass: 'text-cyan-400',
    },
    {
      id: 'skill-next',
      label: 'NextJS',
      icon: 'globe',
      accentClass: 'text-slate-600',
    },
    {
      id: 'skill-expo',
      label: 'Expo.dev',
      icon: 'smartphone',
      accentClass: 'text-indigo-400',
    },
    {
      id: 'skill-meteor',
      label: 'MeteorJS',
      icon: 'cloud',
      accentClass: 'text-sky-400',
    },
    {
      id: 'skill-three',
      label: 'ThreeJS',
      icon: 'cpu',
      accentClass: 'text-teal-400',
    },
    {
      id: 'skill-shopify',
      label: 'Shopify',
      icon: 'globe',
      accentClass: 'text-emerald-500',
    },
    {
      id: 'skill-servicenow',
      label: 'ServiceNow',
      icon: 'shield',
      accentClass: 'text-amber-500',
    },
    {
      id: 'skill-firebase',
      label: 'Firebase',
      icon: 'bolt',
      accentClass: 'text-orange-400',
    },
    {
      id: 'skill-mongodb',
      label: 'MongoDB',
      icon: 'database',
      accentClass: 'text-emerald-500',
    },
    {
      id: 'skill-mysql',
      label: 'MySQL',
      icon: 'database',
      accentClass: 'text-blue-600',
    },
    {
      id: 'skill-postresql',
      label: 'PostreSQL',
      icon: 'database',
      accentClass: 'text-indigo-500',
    },
    {
      id: 'skill-github',
      label: 'GitHub',
      icon: 'terminal',
      accentClass: 'text-slate-700',
    },
    {
      id: 'skill-docker',
      label: 'Docker',
      icon: 'server',
      accentClass: 'text-sky-500',
    },
    {
      id: 'skill-chackra',
      label: 'ChackraUI',
      icon: 'palette',
      accentClass: 'text-purple-500',
    },
    {
      id: 'skill-tailind',
      label: 'TailindCSS',
      icon: 'palette',
      accentClass: 'text-teal-500',
    },
    {
      id: 'skill-photoshop',
      label: 'Adobe Photoshop',
      icon: 'palette',
      accentClass: 'text-blue-500',
    },
    {
      id: 'skill-davinci',
      label: 'DaVinci Resolve',
      icon: 'palette',
      accentClass: 'text-red-500',
    },
  ],
  tools: [
    {
      id: 'tool-photoshop',
      name: 'Adobe Photoshop',
      category: 'design',
      icon: 'palette',
      accentClass: 'text-blue-500',
    },
    {
      id: 'tool-figma',
      name: 'Figma',
      category: 'design',
      icon: 'palette',
      accentClass: 'text-pink-500',
    },
    {
      id: 'tool-react',
      name: 'ReactJS',
      category: 'frontend',
      icon: 'globe',
      accentClass: 'text-cyan-400',
    },
    {
      id: 'tool-next',
      name: 'NextJS',
      category: 'frontend',
      icon: 'layers',
      accentClass: 'text-slate-600',
    },
    {
      id: 'tool-three',
      name: 'ThreeJS',
      category: '3d',
      icon: 'cpu',
      accentClass: 'text-teal-400',
    },
    {
      id: 'tool-tailwind',
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: 'palette',
      accentClass: 'text-teal-500',
    },
    {
      id: 'tool-blender',
      name: 'Blender',
      category: '3d',
      icon: 'cpu',
      accentClass: 'text-orange-500',
    },
    {
      id: 'tool-shopify',
      name: 'Shopify',
      category: 'ecommerce',
      icon: 'globe',
      accentClass: 'text-emerald-500',
    },
    {
      id: 'tool-vercel',
      name: 'Vercel',
      category: 'devops',
      icon: 'cloud',
      accentClass: 'text-slate-700',
    },
    {
      id: 'tool-aws',
      name: 'AWS',
      category: 'devops',
      icon: 'cloud',
      accentClass: 'text-amber-500',
    },
    {
      id: 'tool-postgres',
      name: 'PostgreSQL',
      category: 'backend',
      icon: 'database',
      accentClass: 'text-indigo-500',
    },
    {
      id: 'tool-mysql',
      name: 'MySQL',
      category: 'backend',
      icon: 'database',
      accentClass: 'text-blue-600',
    },
    {
      id: 'tool-typescript',
      name: 'TypeScript',
      category: 'frontend',
      icon: 'layers',
      accentClass: 'text-blue-500',
    },
    {
      id: 'tool-node',
      name: 'Node.js',
      category: 'backend',
      icon: 'server',
      accentClass: 'text-green-500',
    },
  ],
  experience: [
    {
      id: 'exp-giraffe360',
      role: 'Senior Programmer',
      company: 'Giraffe360',
      period: '2024 - Present',
      logoSrc: '/experience/giraffe360.jpg',
      logoAlt: 'Giraffe360 logo',
      summary:
        'Real estate media platform that turns property scans into floor plans, virtual tours, and listing-ready marketing assets.',
      highlights: [
        "Front-end web development and maintenance of Giraffe360's floor plan editor and related projects.",
      ],
    },
    {
      id: 'exp-swedbank',
      role: 'Software Engineer',
      company: 'Swedbank',
      period: '2020 - 2024',
      logoSrc: '/experience/swedbank.jpg',
      logoAlt: 'Swedbank logo',
      summary:
        'Risk and Compliance Platform department. Development and implementation in ServiceNow GRC applications.',
      highlights: [
        'Implemented the Business Continuity Management application.',
        'Built a standardized PDF document generation solution.',
        'Created scripts and tools to improve team workflow.',
      ],
    },
    {
      id: 'exp-d8',
      role: 'Programmer',
      company: 'D8Corporation',
      period: '2019 - 2020',
      logoSrc: '/experience/d8.jpg',
      logoAlt: 'D8Corporation logo',
      summary:
        'Software development company.',
      highlights: [
        'Banking related software maintenance and feature development.',
        'Work with NodeJS, ReactJS, Backbone, Jenkins, SQL.',
      ],
    },
    {
      id: 'exp-dtg',
      role: 'Programming Technician',
      company: 'Datu tehnoloģiju grupa',
      period: '2018 - 2019',
      logoSrc: '/experience/dtg.jpg',
      logoAlt: 'Datu tehnoloģiju grupa logo',
      summary:
        'Software and Hardware company.',
      highlights: [
        'Development related to Worktime management software. User interface and server-side development.',
        'Primarily developed in JavaScript (React, Meteor, MongoDB).',
        'Hardware integration for facial recognition hardware in C#.',
      ],
    },
  ],
  socialLinks: [
    { id: 'social-github', label: 'GitHub', href: 'https://github.com/andrisberzkalns' },
    { id: 'social-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/andris-b-584265a5/' }
  ],
  contact: {
    email: 'andris@berzkalns.com',
    location: 'Riga, Latvia',
  },
}
