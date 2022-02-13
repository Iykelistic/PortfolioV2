/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋,",
  title2: "Ikechukwu",
  logo_name: "James()",
  nickname: "Kaykaymaestro",
  full_name: "Ikechukwu Madubuike",
  subTitle:
    "A Full Stack Developer, and an Open Source Enthusiast 🔥.",
  resumeLink:
    "https://drive.google.com/open?id=1jL8oxcFxbXIKqe7q0rYgS5awT8D8zdwL&authuser=ikechukwujames902%40gmail.com&usp=drive_fs",
  mail: "ikechukwujames902@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/iykelistic",
  linkedin: "https://www.linkedin.com/in/ikechukwu-madubuike-54084514a/",
  gmail: "ikechukwujames902@gmail.com",
  /*gitlab: "https://gitlab.com/harikanani",*/
  facebook: "https://www.facebook.com/ikechukwu.madubuike/",
  twitter: "https://twitter.com/kaykaymaestro",
  instagram: "https://www.instagram.com/kaykaymaestro",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        /*"⚡ Developing mobile applications using Flutter and Android",*/
        "⚡ Creating application backend in Node, Express & MongoDB",
        "⚡ Integration of third party services such as Azure / Digital Ocean"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
         {
           skillName: "GraphQL",
           fontAwesomeClassname: "simple-icons:graphql",
           style: {
             color: "#DE33A6",
           },
         },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        /*"⚡ Experience working on multiple cloud platforms",*/
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        /*{
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },*/
      ],
    },
  ],
};



// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I currently work with Efull Technology as a FullStack Engineer, prior to getting here is a journey i would love to share..Jobs, Internshps, Volunteership",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Efull Technology",
          company_url: "https://www.efulltech.com.ng/",
          logo_path: "efull.jpg",
          duration: "Dec 2021 - Present",
          location: "Office",
          description:
         `
          Work closely with the Project Manager and Team Leads on change request functions.
          Develop new and maintain existing applications.
          The backend use of Nodejs, Expressjs, MongoDB & Mongoose, to provide RESTful APIs.
          `,
          color: "#0071C5",
        },
        {
          title: "Frontend Developer",
          company: "SwirgePay",
          company_url: "https://www.swirge.com/",
          logo_path: "swirge.jpg",
          duration: "April 2021 - Nov2021",
          location: "Remote",
          description:
          `
          Implemented visual and interactive elements that users engage with in a web application.
          Suggested improvements to the interface to enhance the user experience on the frontend which boosted organic web traffic by 10%.
          Collaborated well with other team members to determine the best design specifications and details.
          `,
          color: "#ee3c26",
        },
        {
          title: "Full Stack Developer Intern",
          company: "Mira Technologies",
          company_url: "https://miratechnologiesng.com/",
          logo_path: "mira.jpg",
          duration: "Aug2020 - Dec2020",
          location: "Onsite",
          description:
          `Worked in a team environment wih Agile methodology, transformed complex concepts into simple, elegant services and products.
          Implemented visual and interactive elements that users engage with in a web application.
          Analyzed UI/UX design for responsive layouts and improved usability.
          Assisted in designing and implementing database structures.
          `,
          color: "#0071C5",
        },
        {
          title: "Network Engineering Intern",
          company: "Hiit PlC",
          company_url: "https://hiitplc.com/",
          logo_path: "HiiT Plc.png",
          duration: "Sept 2019 - Dec 2019",
          location: "Onsite",
          description:
          `Trained on Cisco - CCNA.
          Hands on experience working with Cisco routers and switches, Mikrotik routers etc.
          Investigating faults on a network.
          Configuring firewalls, routing and switching to maximize network efficiency and security.
          `,
          color: "#196acf",
        },

        {
          title: "Network Engineering Intern",
          company: "Tizeti Network Limited",
          company_url: "https://www.tizeti.com/",
          logo_path: "Tizeti Ltd.jpg",
          duration: "May 2019 - AuG 2019",
          location: "Onsite",
          description:
          `Plan, implement and oversee router configuration that supports in-house voice, data, video and wireless network services.
          `,
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "IEEE STUDENT MEMBER (FUTO)",
          company: "IEEE",
          company_url: "https://www.ieee.org/",
          logo_path: "ieee_logo_official.jpg",
          duration: "Feb 2016 - Mar 2021",
          location: "FUTO Campus",
          description:
            "Major responsibilities were to help students plan and execute electrical & elctronic projects, review issues and ensure smooth progress.",
          color: "#4285F4",
        },
        {
          title: "Campus Ambassador",
          company: "FDLN",
          company_url: "https://feladurotoye.net/",
          logo_path: "FDLN.png",
          duration: "May 2018 - June 2019",
          location: "FUTO Campus",
          description: "Help inspire my peers on how to live a lifestyle of leadership and excellence for accelerated development in their personal and professional lives.",
          color: "#196acf",
        },
        {
          title: "MicroSoft Student Member",
          company: "MicroSoft Nigeria",
          company_url: "https://www.microsoft.com/",
          logo_path: "Msft.png",
          duration: "Nov 2019 - July 2021",
          location: "FUTO Campus",
          description:
          "Spread awareness of Microsoft new Technologies (Azure, office 365) etc. And opportunities for the student community.",
          color: "#040f26",
        },
        {
          title: "GDG Student Volunteer Owerri",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Remote",
          description:
            "Google Developer Group Owerri, Student Volunteer and Member.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ikechukwu.png",
    description:
      "Please do well to reach me through the links below. Would respond ASAP!!. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/kaykaymaestro",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Efu-School",
      url: "https://school.efulltech.com.ng",
      description: "Efu-School is a digital platform designed to boost school administrator's productivity and transform classrooms into tech-centric learning environments",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "Swirge Website",
      url: "https://www.swirge.com",
      description:
        "A decentralized social media, marketplace, and payment platform, built on the blockchain.",
      languages: [
        
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "2",
      name: "My-readsapp",
      url: "https://my-readsapp.netlify.app",
      description:
        "A virtual bookcase to store your books and track what you're reading.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Xamapp",
      url: "https://xamap-fe.herokuapp.com",
      description:
        "A facial recognition system.",
      languages: [
        
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "node_express_crud_libray",
      url: "https://github.com/Iykelistic/library-app.git",
      description:
        "Simple NodeJS Express CRUD Operations Library management system.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
