import config from '~/config.json';

export const navLinks = [
  {
    label: 'Home',
    pathname: '/',
  },
  {
    label: 'Engineering Courses',
    pathname: '/#formation',
  },
  {
    label: 'Projects',
    pathname: '/#experiences',
  },
  {
    label: 'Skills',
    pathname: '/#competences',
  },
  {
    label: 'Mobility',
    pathname: '/#mobilite',
  },
  {
    label: 'Civic Engagement',
    pathname: '/#engagement',
  },
  {
    label: 'Sports & Activities',
    pathname: '/#activites',
  },
  {
    label: 'About',
    pathname: '/#profile',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'email',
  },
];
