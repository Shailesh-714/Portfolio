// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
  buttonColor: "#4305ba",
  LinkHighlightColor: "#4305ba",
};

// Transitions
const transitions = {
  active: true, // activate for all sections
  onlyLanding: false, // activate only for initial load of landing page
  showOnce: true, // transition only once
  thresholdOption: 0.2, // indicates at what percentage of the sections visibility the transition should start
};

// Splash Screen
const splashScreen = true; // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
  intro: "Hello 👋, my name is",
  name: "Shaileshwaran",
  message:
    "I'm a Full stack developer skilled in MongoDB, Express.js, React.js, React Native and Node.js. Passionate about building dynamic web and android/iOS applications with a focus on user experience, attractive UI and scalability.",
  basedLocation: "India",
  resumeLink:
    "https://drive.google.com/file/d/1Oimi7v5OIDREni7gqagtqwjIqMaZ2i5w/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
  logo: {
    link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
    custom: true, // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
  },
  portraitLinkDark: "images/mainIconsdark.svg",
  portraitLinkLight: "images/mainIcons.svg",
};

const socialMediaLinks = {
  github: "https://github.com/Shailesh-714",
  linkedin: "https://linkedin.com/in/shaileshwaran-s-57111625a",
  instagram: "https://www.instagram.com/",
  gmail: "mailto:shaileshwaran.s2022it@sece.ac.in",
  xtwitter: "x.com",
}; // to add any additional social media links check out the README.md or src/icons.js file
// --- 😎 About Section ---
const about = {
  autobiography: [
    "I'm Shaileshwaran, a dedicated full-stack developer pursuing a B.Tech in Information Technology. Proficient in React.js and React Native, I specialize in crafting websites and mobile apps. Passionate about deep learning and neural networks, I'm eager to explore the latest innovations in technology.",
    "With over two years of programming experience and a knack for problem-solving, I excel both independently and in team settings. Currently, I'm gaining practical experience through projects and active participation in hackathons and coding events.",
  ], // Separated items are paragraphs
  techStack: [
    "React,js",
    "React-Native",
    "Python",
    "JavaScript",
    "Express.js",
    "MongoDB",
    "Deep Learning",
    "Neural Networks",
    "C",
    "Java",
  ],
  photo1Link: "images/portrait1.jpeg",
  photo2Link: "images/portrait2.jpeg",
  photo3Link: "images/portrait3.jpeg",
  photo4Link: "images/portrait4.jpeg",
};

// --- 🛡️ Experience Section ---
const experiences = [
  {
    position: "React Intern",
    company: {
      name: "Plotch.ai",
      link: "https://plotch.ai/",
    },
    duration: "August 2024 - Present",
    bulletPoints: [
      "I worked on developing industry production levle projects in developing frontend web interfaces",
      "I designed and implemented pages, routing, form validations, responsive UI and more for an e-commerce web appication using React. ",
      "Additionally, I also worked on integrating API to dynamically recieve data to the web pages from the server.",
    ],
    hashtags: ["HTML", "CSS", "React.js", "API Integration", "Git"],
  },
  {
    position: "Machine Learning Intern",
    company: {
      name: "V3 Analytics",
      link: "https://www.v3analytics.in/",
    },
    duration: "July 2024 - August 2024",
    bulletPoints: [
      "I worked on data processing and analysis on machine learning projects.",
      "I designed and implemented models using deep learning techniques, including CNNs and RNNs.",
      "Additionally, I conducted experiments to optimize model performance and accuracy.",
      "I collaborated with the team to integrate machine learning models into production systems.",
    ],
    hashtags: [
      "MachineLearning",
      "DataProcessing",
      "DeepLearning",
      "CNN",
      "RNN",
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    position: "Full-Stack Intern",
    company: {
      name: "Hubspire Technologies",
      link: "https://www.hubspire.com/",
    },
    duration: "Feb 2024 - March 2024",
    bulletPoints: [
      "I developed and styled webpages using HTML, CSS, and Sass, integrating Figma designs. I created dynamic webpages and reusable components with React.js, utilizing useState and useEffect.",
      "I designed and implemented screens and navigations for an e-commerce app using React-Native and Expo, including form validations. ",
      "Additionally, I developed back-end functionalities, creating servers with Express.js and managing data with MongoDB Atlas.",
    ],
    hashtags: [
      "HTML",
      "CSS",
      "Sass",
      "React.js",
      "React-Native",
      "Expo",
      "Express.js",
      "MongoDB",
      "Git",
    ],
  },
];

// --- 💻 Work Section ---
const works = [
  {
    projectName: "Ecommerce Application",
    yearCompleted: "2024",
    description:
      "The Ecommerce Application, built on the MERN stack, offers an intuitive interface for browsing, purchasing, and managing products, ensuring seamless user experiences and efficient management of catalogs, orders, and payments.",
    techStack: "React Native, Node.js, Express.js",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/Shailesh-714/Ecommerce_Application_Using_ReactNative.git",
      },
      {
        label: "",
        type: "external",
        url: "https://expo.dev/artifacts/eas/dRQRHWm2a53arYgQaG9VKH.apk",
      },
    ],
    imageLink: "images/impulse.png",
    alignLeft: false,
  },
  {
    projectName: "Fraud Detection using LSTM in Banking Sector",
    yearCompleted: "2023",
    description:
      "The Identity Theft Detection Model employs LSTM neural network technology for AI training, integrating biometric verification, document authentication, and behavioral analysis techniques to enhance identity validation.",
    techStack: "Python, Neural Networks, LSTM",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/Shailesh-714/Fraud_Detection_AI_For_Banking_Sector.git",
      },
    ],
    imageLink: "images/fraudDetection.png",
    alignLeft: true,
  },
  {
    projectName: "Inter-connected Wearable Safety Band",
    yearCompleted: "2023",
    description:
      "The Interconnected Wearable Safety Band project enhances Indian Navy weather deck workers' safety using Ultra-Wideband (UWB) technology. Developed for DRDO's IDEX challenge, it creates a wearable device to generate alerts and accurately locate workers during emergencies like man overboard situations.",
    techStack: "UWB network, Thread Mesh Network",
    links: [],
    imageLink: "images/drdo.png",
    alignLeft: false,
  },
  {
    projectName: "CCTV Metadata Generator AI",
    yearCompleted: "2023",
    description:
      "The Automatic Object Detection and Summarization project uses the YOLOv8 model for precise object detection and JavaScript for summary conversion. It efficiently generates concise textual summaries, streamlining data analysis processes.",
    techStack: "Python, YOLOv8",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/Shailesh-714/CCTV_Footage_Metadata_Generator_AI.git",
      },
    ],
    imageLink: "images/cctv_ai.jpg",
    alignLeft: true,
  },
];

const archiveLink = "https://github.com/Shailesh-714?tab=repositories";

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
  externalLink: {
    shortTitle: "Get in Touch",
    note: [
      "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Please feel free to reach out to me via Email",
    ], // paragraph breaks will be entered after each item,
    link: {
      email: "shaileshwaran.s2022it@sece.ac.in", // email takes precedance
      other: "",
    },
    responseTimeMessage: "",
  },
  formEmbedLink: "", // inclusion of this link will take precedance
};

export default {
  colors,
  transitions,
  splashScreen,
  greeting,
  socialMediaLinks,
  about,
  experiences,
  works,
  archiveLink,
  contact,
};
