import config from '~/config.json';

export const navLinks = [
  {
    label: 'Accueil',
    pathname: '/',
  },
  {
    label: 'Formation',
    pathname: '/#formation',
  },
  {
    label: 'Expériences',
    pathname: '/#experiences',
  },
  {
    label: 'Compétences',
    pathname: '/#competences',
  },
  {
    label: 'Mobilité',
    pathname: '/#mobilite',
  },
  {
    label: 'Engagement',
    pathname: '/#engagement',
  },
  {
    label: 'Activités',
    pathname: '/#activites',
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
