import Img1 from '../src/assets/images/profile.png'
import Img2 from '../src/assets/images/fuel.png'
import Img3 from '../src/assets/images/baby.png'

const logotext = "ANALYTICS ALLY";
const meta = {
    title: "Harun",
    description: "I’m Harun data analyst specialist, currently working in Toronto",
};

const introdata = {
    title: "I’m Harun",
    animated: {
        first: "I love data",
        second: "I mine cool data",
        third: "I develop awesome dashboards",
    },
    description: "The Future is Data-Driven. Are You?",
    your_img_url: Img1,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I am a data analyst specialist currently working for a major financial institution. ",
};
const worktimeline = [{
        jobtitle: "Manager, Economics and Analytics",
        where: "Toronto",
        date: "2020",
    },
    {
        jobtitle: "Manager, Finanical Reporting",
        where: "Toronto",
        date: "2013",
    },
];

const skills = [{
        name: "Python",
        value: 85,
    },
    {
        name: "R",
        value: 90,
    },
    {
        name: "SQL",
        value: 85,
    },
    {
        name: "Power BI/Superset/Tableau",
        value: 85,
    },
    {
        name: "React",
        value: 60,
    },
];

const services = [{
        title: "Exploratory Data Analyis",
        description: "Everthing starts with EDA.",
    },
    {
        title: "Data Visualization",
        description: "Proficient in numerous business intelligence tools.",
    },
    {
        title: "Transform analytics to insights",
        description: "Ability to translate boring data into fun metrics.",
    },
];

const dataportfolio = [{
        img: Img2,
        description: "Fuel Consumption ratings.",
        link: "#",
    },
    {
        img: Img3,
        description: "Top baby names since 1880.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "hcoolj@gmail.com",
    YOUR_FONE: "Email preferred please",
    description: "If you have any questions about my work projects, feel free to contact me. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/HrMav",
    linkedin: "https://linkedin.com/in/harun-joseph-60829b109",
    
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};