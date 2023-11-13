import Img1 from '../src/assets/images/profile.png'
import Img2 from '../src/assets/images/github.png'
import Img3 from '../src/assets/images/baby.png'
import Img4 from '../src/assets/images/fuel.png'
import Img5 from '../src/assets/images/stats.png'

const logotext = "ANALYTICS ALLY";
const meta = {
    title: "Harun",
    description: "I’m Harun data analysis specialist, currently working in Toronto",
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
    aboutme: "I am a data analysis specialist currently working for a major financial institution. ",
};
const worktimeline = [{
        jobtitle: "Manager, Economics & Analytics",
        where: "Toronto",
        date: "2020",
    },
    {
        jobtitle: "Manager, Financial Reporting & Analysis",
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
        name: "Looker/Power BI/Superset/Tableau",
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
    // You can add an image that represents your GitHub profile or a generic placeholder image
    img: Img2,
    description: "Discover a world of innovation and creativity! Dive into my GitHub portfolio to explore the full spectrum of all my projects and coding adventures.",
    link: "https://github.com/HrMav",
    },
    {
    img: Img3,
    description: "Unravel the secrets of baby naming trends with our dynamic Apache Superset dashboard – your gateway to the art and science of names!",
    link: "https://github.com/HrMav/US-Baby-Names-Superset",
    },
    {
    img: Img4,
    description: "Steer through the energy efficiency of vehicles with our Looker Studio dashboard – your ultimate guide to smarter, greener driving choices!",
    link: "https://github.com/HrMav/EnerGuide-FuelConsumption-Looker-Studio",
    },
    {
    img: Img5,
    description: "Comprehensive Analysis of Diverse Health-Related Queries Using R: A Statistical Exploration",
    link: "https://github.com/HrMav/Health-Analytics-Statistics-Inferences-R",
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