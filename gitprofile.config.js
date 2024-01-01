// gitprofile.config.js

const config = {
  github: {
    username: 'OIS202', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'omar-shehata-01b3a6206',
    phone: '+1 514-572-2226',
    email: 'i.omarshehata@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/16J5MJDcyGqDeTqtr-RA6roHqvvIY8xXJ/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Express.js',
    'JavaScript',
    'React.js',
    'Node.js',
    'Passport.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'HTML',
    'Embedded Javascript (EJS)',
    'CSS',
    'Linux',
    'Python',
    'Numpy',
    'Pandas',
    'Seaborn',
    'Matplotlib',
    'Sklearn',
    'Tensorflow',
    'Java',
    'C',
    'C++',
    'Clojure',
    'Next.js',
  ],
  experiences: [
    {
      company: 'BRP (Bombardier Recreational Products',
      position: 'Data Governance Intern ',
      from: 'January 2023',
      to: 'November 2023',
      companyLink: 'https://brp.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Concordia University',
      degree: 'Software Engineering',
      from: '2020',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'YelpCamp',
      description:
        'Employing Express.js for the backend and crafting a frontend with Embedded JavaScript, HTML, and CSS. Utilized MongoDB and implemented Joi Schemas to establish robust form validation and data storage.Designed and implemented a robust authorization and authentication framework leveraging Passport.js to enhance system security and user authentication processes.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Warzone',
      description:
        'Leveraged pointers and employed STL containers, including vectors, to implement diverse game features such as maps, orders, and commands. Applied an MVC design pattern to systematically separate concerns and modularize autonomous code components. Utilized inheritance to promote code reusability and enhance specificity in design implementation.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Music Database',
      description:
        'Utilized Axios for efficient communication with the MusixMatch API, seamlessly integrated with Node.js for code optimization. Implemented a pool connection object in Node.js to establish a remote connection to our local PostgreSQL instance. Designed and populated multiple tables through Data Definition Language (DDL), organizing data retrieved from API calls. Executed data queries, incorporating select statements with join, where, and having clauses to generate insightful reports as per project requirements.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
