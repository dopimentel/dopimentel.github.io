// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Marcos',
  middleName: '',
  lastName: 'Pimentel',
  message:
    ' Committed to harnessing the power of technology to create meaningful and transformative solutions. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/dopimentel',
    },

    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/marcoscoutinho/',
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink:
    'https://avatars.githubusercontent.com/u/106275499?v=4',
  imageSize: 375,
  message:
    "Hello world, welcome! I'm Marcos, a financier in career transition in Information Technology. I have approximately 5 years of experience in the payments market (acquiring and banking) in Customer Experience. I like playing chess and running.",
  resume:
    'https://docs.google.com/document/d/1zgDeWt6J2qOZCXQ5k5p9y3pSOyVEDnkmidIe3j9YFMs/edit?usp=sharing',
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "dopimentel", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'Python', value: 20 },
    { name: 'SQL', value: 90 },
    { name: 'Data Structures', value: 85 },
    { name: 'Node.JS', value: 95 },
    { name: 'JavaScript', value: 95 },
    { name: 'React', value: 85 },
    { name: 'HTML/CSS', value: 75 },
    { name: 'Sequelize', value: 90 },
  ],
  softSkills: [
    { name: 'Collaboration', value: 90 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 85 },
    { name: 'Empathy', value: 95 },
    { name: 'Creativity', value: 90 },
    { name: 'Organization', value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I am actively seeking employment opportunities in the field of full-stack development as a junior professional! Should you be aware of any open positions, have inquiries, or simply wish to reach out and say hello, please don't hesitate to contact me via email at: ",
  email: 'mpc_marcos@hotmail.com',
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
