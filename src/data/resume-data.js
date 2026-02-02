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
    title: 'Software Engineer',
    type: 'Permanent Full-time',
    company: 'Betr Holdings, Inc.',
    location: 'Startup · Miami, Florida · Remote',
    period: '2023 - 2025',
    descriptions: [
      'Built and launched multiple high-traffic betting platforms across Android, iOS and Web using React and React Native, supporting over 200,000 active users.',
      'Enhanced productivity and streamlined development workflows by integrating AI-powered GitHub CodePilot, driving efficiency in daily tasks and code management.',
      'Spearheaded multiple integrations with technology partners and 3rd party services to enrich the product with advanced features and enhanced functionality.',
    ],
    website: 'https://www.betr.app',
    stack: '',
  },
  {
    title: '',
    company: 'FansUnite Entertainment Inc.',
    location: '(Acquihired by Betr) · Vancouver, BC · Remote',
    period: '2021 - 2023',
    descriptions: [
      'Built front-end experiences for a React SaaS platform with advanced white-label management and reporting, and delivered a Next.js sportsbook application for EU clients.',
      'Collaborated closely with a Product Manager and UI/UX Designers in an agile environment to refine scope and project deliverables.',
      'Enhanced code quality through unit as well as assisting in the investigation and resolution of support issues.',
    ],
    website: 'https://www.fansunite.com',
    stack:
      'React, NextJS, React Native, TypeScript, NodeJS, CSS, HTML, TanStack Query, Zustand, GraphQL, RESTful API, Styled Components, GitHub',
  },
  {
    title: 'Frontend Developer',
    type: 'Full-time Contract',
    company: 'Spinndle Inc.',
    location: 'Startup · Vancouver, BC · Remote',
    period: '2020 - 2021',
    descriptions: [
      'Developed a SaaS Web Application for e-learning with guided roadmap and efficient real-time check-in system.',
      'Built new React & Redux features with based on UI/UX specs from Design and Product teams.',
    ],
    website: 'https://www.linkedin.com/in/spinndle-inc-b7404018a/',
    stack:
      'React, Redux, Redux Thunk, JavaScript, CSS, HTML, NodeJS, CSS Variables, Styled Components, Reactstrap, Python, Django, Git/GitLab',
  },
  {
    title: 'Full Stack Developer',
    type: 'Part-time Contract',
    company: 'AssistList Association',
    location: 'Startup · Vancouver, BC · Remote',
    period: '2019 - 2020',
    descriptions: [
      'Launched a marketplace platform that empowers the community to buy, sell, and donate medical equipment.',
      'Performed code peer reviews to maintain quality standards, improve performance, and provide credibility.',
    ],
    website: 'https://www.assistlist.ca',
    stack: 'React, Semantic UI React, Ruby on Rails, PostgreSQL, Docker',
  },
]

export const SKILLS = [
  'React',
  'React Native',
  'NextJS',
  'NodeJS',
  'Convex',
  'TypeScript',
  'JavaScript',
  'TanStack Query',
  'Zustand',
  'Redux',
  'CSS3',
  'HTML5',
  'CI/CD',
  'RESTful APIs',
  'GraphQL Client',
  'Styled Components',
  'Tailwind CSS',
  'ExpressJS',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Git/GitHub',
]

export const PROJECTS = [
  {
    title: 'Business Website - Glossé Nails',
    year: '2025',
    description:
      'Built a production-grade NextJS application with responsive UI, SEO optimization, analytics integrations, and booking system integration.',
    website: 'https://glossenails.ca',
  },
  {
    title: 'E-commerce Web Application - One Price Auto',
    year: '2022',
    description:
      'Built and deployed a high-performance, SEO-friendly NextJS storefront with real-time inventory updates backed by the Shopify Storefront API to power product/catalog experiences.',
    website: 'https://www.onepriceauto.co',
  },
]

export const EDUCATION = [
  {
    title: 'Web Application Development Diploma',
    year: '2018',
    description:
      'Developer Bootcamp focus on full-stack development with React, React Native, and Rails',
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
