module.exports = {
  siteTitle: 'Xavier Hollingsworth | Software Engineer',
  siteDescription:
    'Xavier Hollingsworth is a software engineer based in Orlando, FL who has a passion for space and renewable engergy. I write code for a non profit organization called Open Learning Exhange.',
  siteKeywords:
    'Xavier Hollingsworth, Xavier Elon Hollingsworth, Xavier Elon, XavierElon Xavier, Hollingsworth, Elon, xavierh93, software engineer, front-end engineer, web developer, javascript, oregon state university',
  siteUrl: 'https://www.xavierelon.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Xavier Hollingsworth',
  location: 'Orlando, FL',
  email: 'xavierelon93@gmail.com',
  github: 'https://github.com/xavierh93',
  twitterHandle: '@xavierelon',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/xavierh93',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/xavier-hollingsworth-524144127/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/xavierelon',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/elon_xavier',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
