// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'stavspirid', // Your GitHub org/user name. (This is the only required config)
  },
  // Add custom avatar URL
  avatar: 'https://raw.githubusercontent.com/stavspirid/portfolio/main/resources/profile_avatar.jpg',
  bio: 'Engineering and Space Enthusiast.\nCurrently an Embedded Software Engineer at SpaceDot.',
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // The order of repositories in this array determines the display order.
        projects: [
		  'stavspirid/Microprocessors-and-Peripherals',
          'stavspirid/fp-mult-IEEE754-SV',
          'stavspirid/HW1-ECE-AUTh',
          'stavspirid/DICD-TUe-VLSI',
          'stavspirid/Helmetino',
          'gsklaven/MusePath',
		  'stavspirid/pokerbot',
          'stavspirid/Constellation-Modeling',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CubeSat Hands-On Workshop',
          description:
            'I organized and conducted SpaceDot\'s CubeSat Hands-On workshops for university students, teaching them all about satellite design and development.',
          imageUrl:
            'https://raw.githubusercontent.com/stavspirid/portfolio/main/resources/1U_cubesat.png',
          link: 'https://gitlab.com/acubesat/education/cubesat-workshop',
        },
        {
          title: 'PRIMAVERA',
          description:
            'Satellite Phase-0 Design for Venusean Mission during ESA Acadmy\'s Concurrent Engineering Workshop.\n The project\'s paper was accepted at IAC 2025',
          imageUrl:
            'https://raw.githubusercontent.com/stavspirid/portfolio/main/resources/PRIMAVERA_logo.jpg',
          link: 'https://www.linkedin.com/posts/stavros-spiridopoulos-669259238_esa-concurrentengineering-venusmission-activity-7243991943976812545-GfTP?utm_source=share&',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Stavros Spyridopoulos', description: 'Engineering and Space Enthusiast', imageURL: '' },
  social: {
    linkedin: 'stavros-spyridopoulos',
    gitlab: 'stavspirid',
    leetcode: 'stavspirid',
    github: 'stavspirid',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'stavspirid@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/stavspirid/portfolio/main/resources/Engineering_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'FreeRTOS',
    'ARM Assembly',
    'Verilog',
    'SystemVerilog',
    'Python',
    'MATLAB',
    'Bash/Shell',
    'VLSI Design',
    'KiCad',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'SpaceDot',
      position: 'Embedded Software Engineer',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/spacedot/',
    },
  ],
  certifications: [
    {
      name: 'Concurrent Engineering Workshop',
      body: 'ESA Academy\'s Concurrent Engineering Workshop conducted at ESEC Galaxia in Belgium',
      year: 'October 2024',
      link: '',
    },
    {
      name: 'ANSYS HFSS Training',
      body: 'Introduction to: High Frequency Electromagnetics & Electronics Simulation Training with ANSYS HFSS',
      year: 'May 2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Aristotle University of Thessaloniki',
      degree: 'Electrical and Computer Engineering',
      from: '2021',
      to: '2026',
    },
    {
      institution: 'Eindhoven University of Technology',
      degree: 'Electrical Engineering - Erasmus+ Exchange Studentship',
      from: 'September 2024',
      to: 'February 2025',
    },
  ],
  publications: [
    {
      title: 'preliminary design of primavera: preliminary investigation mission to achieve venusian reconnaissance in atmosphere',
      conferenceName: 'IAC 2025',
      journalName: '',
      authors: '',
      link: 'https://raw.githubusercontent.com/stavspirid/portfolio/main/resources/IAC_2025_PRIMAVERA_paper.pdf',
      description:
        'The abstract accepted at IAC 2025, which describes the Phase-0 design of a Venusian Mission, named PRIMAVERA during ESA Academy\'s Concurrent Engineering Workshop.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-0EFTMF71LY', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
