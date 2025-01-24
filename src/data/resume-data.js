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
    title: 'Software Engineer',
    company: 'Betr Holdings, Inc.',
    location: 'Miami, Florida · Remote',
    period: '2023 - Present',
    achievements: [
      'Developing and launching multiple high-traffic betting platforms across Android, iOS and Web using React Native, supporting over 200,000 active users.',
      'Enhancing productivity and streamlined development workflows by integrating AI-powered GitHub CodePilot, driving efficiency in daily tasks and code management.',
      'Spearheading multiple integrations with technology partners and 3rd party services to enhance enrich the product with advanced features and enhanced functionality.',
    ],
    stack:
      'TypeScript, React Native, ReactJS, TanStack Query, Zustand, RESTful API, Laravel, MySQL.',
    website: 'https://www.betr.app',
  },
  {
    title: 'Frontend Developer',
    company: 'FansUnite Entertainment Inc.',
    location: 'Vancouver, BC · Remote',
    period: '2021 - 2023',
    achievements: [
      'Developing the front-end of a customer-facing platform, enabling users to manage their White Label configurations and access detailed reporting features.',
      'Working closely with a Product Manager and UI/UX Designers to refine scope and project deliverables.',
      'Ensuring code quality through unit testing as well as assist in investigation and resolution of support issues.',
    ],
    stack:
      'TypeScript, React Native, ReactJS, NextJS, XState, Styled Components, RESTful API, Django.',
    website: 'https://www.fansunite.com',
  },
  {
    title: 'Frontend Developer',
    company: 'Spinndle Inc. and AssistList Association',
    location: 'Vancouver, BC · Remote',
    period: '2019 - 2021',
    achievements: [
      'Building a SAAS Web Application that provides a online learning environment for high school teachers and students with an effective check-in system.',
      'Creating new features from scratch using ReactJS & Redux with Thunk for front-end based on UI/UX requirements from Design & Product Owners.',
      'Fixing bugs and testing code for efficiency to ensure better user experience and application quality.',
    ],
    stack:
      'ReactJS, Redux, Redux Thunk, HTML5, CSS3, CSS Variables, Styled Components, RESTful API, Django, Ruby on Rails, PostgreSQL, Git/GitHub.',
    website: ['https://app.spinndle.com', 'https://www.assistlist.ca'],
  },
]

export const SKILLS = [
  'TypesScript',
  'ReactJS',
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
  'MySQL',
  'AWS',
  'Git/GitHub',
]

export const PROJECTS = [
  {
    title: 'E-commerce Web Applications',
    year: '2022',
    description:
      'A Blazing fast online store built in NodeJS Ecosystem. The website owner can post products/servers online connected with Cloud Database for Inventory System with Shopify Storefront API. Building stack including NextJS, ReactJS, Shopify API, Vercel.',
    website: 'https://www.onepriceauto.co',
  },
  {
    title: 'Personal Portfolio Website',
    year: '2021',
    description:
      'A Professional Web Application Developer Portfolio Website with Resume, served on Netlify Server, building with GatsbyJS site generator on top of ReactJS with GraphQL, Styled Component.',
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
