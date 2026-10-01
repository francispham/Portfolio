import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaSnowboarding,
  FaHiking,
} from 'react-icons/fa'
import { GiSpiderWeb, GiKnifeFork, GiHeadphones } from 'react-icons/gi'

export const LINKS = [
  {
    icon: FaEnvelope,
    href: 'mailto:hello@francispham.ca',
    text: 'hello@francispham.ca',
  },
  {
    icon: GiSpiderWeb,
    href: 'https://www.francispham.ca/',
    text: 'francispham.ca',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/francispham23/',
    text: '/francispham23',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/francisphamca/',
    text: '/in/francisphamca',
  },
]

export const WORK_EXPERIENCE = [
  {
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    company: 'DelGate Logistics / It’s Here Delivery',
    location: 'Vancouver, BC · Onsite',
    period: 'Jul 2026 - Present',
    descriptions: [
      'Introduced AI-agent engineering workflows with Figma and route validation plus responsive screenshot diffs to automate UI checks before merge.',
      'Led React, TypeScript, and Vite delivery from scaffold to production across warehouses, orders, customers, settings, and billing.',
      'Built reusable layouts, settings shells, and UI patterns; migrated key detail pages to reduce duplication and accelerate feature delivery.',
    ],
  },
  {
    title: 'Software Engineer',
    type: 'Full-time',
    company: 'Betr Holdings, Inc.',
    location: 'Miami, FL · Remote',
    period: '2023 - 2025',
    descriptions: [
      'Built and launched React and React Native betting experiences for web, iOS, and Android, supporting 200,000+ active users.',
      'Integrated technology partners and third-party services; improved development workflows with GitHub Copilot.',
    ],
    website: 'https://www.betr.app',
    stack: '',
  },
  {
    title: '',
    company: 'FansUnite Entertainment Inc.',
    location: 'Vancouver, BC · Acquihired by Betr',
    period: '2021 - 2023',
    descriptions: [
      'Built a React SaaS platform with white-label management and reporting, and a Next.js sportsbook for EU clients.',
      'Worked with product and design teams; contributed unit tests and investigated production support issues.',
    ],
    website: 'https://www.fansunite.com',
    stack: 'React, Next.js, TypeScript, TanStack Query, Zustand, GraphQL',
  },
  {
    title: 'Frontend Developer',
    type: 'Full-time contract',
    company: 'Spinndle Inc.',
    location: 'Vancouver, BC · Remote',
    period: '2020 - 2021',
    descriptions: [
      'Built React and Redux features for an e-learning SaaS platform with guided roadmaps and real-time check-ins.',
    ],
    website: 'https://spinndle.com',
    stack: 'React, Redux, JavaScript, Styled Components, Django',
  },
  {
    title: 'Full Stack Developer',
    type: 'Part-time contract',
    company: 'AssistList Association',
    location: 'Vancouver, BC · Remote',
    period: '2019 - 2020',
    descriptions: [
      'Helped launch a medical-equipment marketplace with React and Rails; reviewed code for quality and performance.',
    ],
    website: 'https://www.assistlist.ca',
    stack: 'React, Ruby on Rails, PostgreSQL, Docker',
  },
]

export const SKILLS = [
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Expo',
  'TypeScript',
  'JavaScript',
  'TanStack Query',
  'Zustand',
  'Redux',
  'Convex',
  'CSS',
  'HTML',
  'CI/CD',
  'AWS',
  'GraphQL Client',
  'Styled Components',
  'Tailwind CSS',
  'PostgreSQL',
  'RESTful API',
  'Docker',
  'Git/GitHub',
]

export const PROJECTS = [
  {
    title: 'Glossé Nails Website',
    year: '2025',
    description:
      'Next.js business website with responsive UI, SEO, analytics, and booking integration.',
    website: 'https://glossenails.ca',
  },
  {
    title: 'Glossé Staff Application',
    year: '2025 - Present',
    description:
      'Internal business application in development using React Native, Expo, and Convex.',
  },
  {
    title: 'One Price Auto Storefront',
    year: '2022',
    description:
      'Next.js storefront with product and inventory data from the Shopify Storefront API.',
    website: 'https://www.onepriceauto.co',
  },
]

export const EDUCATION = [
  {
    title: 'Web Application Development Diploma',
    year: '2018',
    description: 'Full-stack development with React, React Native, and Rails',
    school: 'CodeCore College',
  },
  {
    title: 'Bachelor of Arts',
    year: '2015',
    description: 'Economics Major & Business Administration Minor',
    school: 'Simon Fraser University',
  },
]
export const LANGUAGES = [
  {
    name: 'English',
    proficiency: 'Bilingual Proficiency',
  },
  {
    name: 'Vietnamese',
    proficiency: 'Native',
  },
]

export const INTERESTS = [
  { icon: FaSnowboarding, label: 'Snowboarding' },
  { icon: FaHiking, label: 'Hiking' },
  { icon: GiKnifeFork, label: 'Cooking' },
  { icon: GiHeadphones, label: 'Music' },
]
