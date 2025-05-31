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
    href: 'mailto:francis.pham.ca@gmail.com',
    text: 'francis.pham.ca@gmail.com',
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
    title: 'Frontend Developer',
    type: 'Full-time',
    company: 'Betr Holdings, Inc.',
    location: 'Miami, Florida · Remote',
    period: '2023 - 2025',
    descriptions: [
      'Developing and launching multiple high-traffic betting platforms across Android, iOS and Web using React Native, supporting over 200,000 active users.',
      'Enhancing productivity and streamlined development workflows by integrating AI-powered GitHub CodePilot, driving efficiency in daily tasks and code management.',
      'Spearheading multiple integrations with technology partners and 3rd party services to enrich the product with advanced features and enhanced functionality.',
    ],
    website: 'https://www.betr.app',
  },
  {
    title: '',
    company: 'FansUnite Entertainment Inc.',
    location: '(Acquihired by Betr) · Vancouver, BC · Remote',
    period: '2021 - 2023',
    descriptions: [
      'Building the front end of a SaaS platform that lets clients manage White Labels and access advanced reporting tools.',
      'Working closely with a Product Manager and UI/UX Designers to refine scope and project deliverables.',
      'Enhancing code quality through unit as well as assisting in the investigation and resolution of support issues.',
    ],
    website: 'https://www.fansunite.com',
  },
  {
    title: 'Frontend Developer',
    type: 'Contract',
    company: 'Spinndle Inc.',
    location: 'Vancouver, BC · Remote',
    period: '2020 - 2021',
    descriptions: [
      'Developing a SaaS Web Application for e-learning with guided roadmap and efficient real-time check-in system.',
    ],
    website: 'https://www.linkedin.com/in/spinndle-inc-b7404018a/',
  },
  {
    title: 'Full Stack Developer',
    type: 'Contract',
    company: 'AssistList Association',
    location: 'Vancouver, BC · Remote',
    period: '2019 - 2020',
    descriptions: [
      'Developing a marketplace platform that empowers the community to buy, sell, and donate medical equipment.',
    ],
    website: 'https://www.assistlist.ca',
  },
]

export const SKILLS = [
  'ReactJS',
  'TypesScript',
  'NextJS',
  'React Native',
  'TanStack Query',
  'Zustand',
  'CSS3',
  'HTML5',
  'RESTful APIs',
  'JavaScript',
  'Styled Components',
  'Tailwind CSS',
  'Redux',
  'Git/GitHub',
  'CI/CD',
  'NodeJS',
  'Ruby on Rails',
  'PostgreSQL',
  'Laravel',
  'MongoDB',
  'XState',
  'AWS',
  'GraphQL Client',
]

export const PROJECTS = [
  {
    title: 'E-commerce Web Applications',
    year: '2022',
    description:
      'A blazing-fast online store built in the Node.js ecosystem, featuring real-time inventory management via a cloud database and integration with the Shopify Storefront API. Developed using Next.js, React, Shopify API, and deployed on Vercel.',
    website: 'https://www.onepriceauto.co',
  },
  {
    title: 'Personal Portfolio Website',
    year: '2021',
    description:
      'A professional portfolio website for a web application developer, featuring a resume and deployed on Netlify. Built with GatsbyJS  using GraphQL and Styled Components for a fast, modern experience.',
    website: 'https://francispham.ca',
  },
]

export const EDUCATION = [
  {
    title: 'Web Application Development Diploma',
    year: '2018',
    description:
      'Developer Bootcamp focus on full-stack development with JavaScript, ReactJS, React Native, Ruby on Rails, PostgreSQL, HTML5 & CSS3',
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
