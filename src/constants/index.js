import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hotel,
  school,
  university,
} from "../assets";

//"../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
  title: "Frontend Developer",
  company_name: "University Computer Science Club",
  icon: html,
  iconBg: "#383E56",
  date: "March 2020 - April 2021",
  points: [
    "Built and maintained simple yet functional web applications as part of my learning journey in frontend development.",
    "Worked closely with fellow club members and mentors to understand web development concepts and best practices.",
    "Experimented with basic technologies like HTML, CSS, and JavaScript to create responsive user interfaces.",
    "Gained hands-on experience with frameworks like React.js by contributing to small club projects.",
    "Participated in peer-led code reviews to improve my skills and learn collaborative development processes.",
  ],
},

  {
  title: "Android App Development",
  company_name: "Software Development Club",
  icon: mobile,
  iconBg: "#E6DEDD",
  date: "Jan 2021 - Feb 2022",
  points: [
    "Designed and developed high-performance Android applications to improve user experience and functionality.",
    "Collaborated with cross-functional teams to integrate cutting-edge features into Safaricom's mobile applications.",
    "Optimized application performance to ensure smooth operation across various Android devices.",
    "Implemented secure and efficient code to safeguard user data and maintain high application standards.",
    "Conducted user testing and debugging to identify and resolve issues, enhancing overall app quality.",
  ],
},
{
    title: "Web Developer",
    company_name: "Shopify company",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
  "Designed and developed user-friendly web interfaces to enhance customer experience and drive engagement.",
  "Optimized website performance, reducing load times and improving SEO rankings across multiple projects.",
  "Integrated third-party APIs and services to enhance functionality and deliver seamless user experiences.",
  "Collaborated with UI/UX designers to implement visually appealing and highly functional design concepts.",
  "Conducted thorough testing and debugging to identify and resolve issues, ensuring the highest quality standards.",
],

  },
  {
    title: "Full stack Developer",
    company_name: "freelancer",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but David proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like David does.",
    name: "Dan Kush",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After David optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Teresa Graces",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Food Ordering Web Application",
    description:
      "A web-based platform that allows users to browse menus, place food orders, and track their deliveries in real time. It provides a seamless and convenient online ordering experience for both customers and restaurant owners.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/codeby-david",
  },
  {
    name: "School Web Application",
    description:
      "A fully functional web app designed for managing school operations with CRUD (Create, Read, Update, Delete) functionality. It allows administrators to manage students, teachers, classes, and announcements efficiently. Built with a modern tech stack, it ensures a seamless user experience with a responsive design.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "postresql",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link: "https://github.com/codeby-david",
  },
  {
    name: "University Website",
    description:
      "A web application designed for universities to manage bookings efficiently. It allows students and staff to book facilities such as lecture halls, meeting rooms, and study spaces with real-time availability. Featuring full CRUD (Create, Read, Update, Delete) functionality, it ensures smooth scheduling,and an intuitive interface.",
    tags: [
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: university,
    source_code_link: "https://github.com/codeby-david",
  },
];

export { services, technologies, experiences, testimonials, projects };
