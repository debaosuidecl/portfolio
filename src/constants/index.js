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
    pland,
    jobit,
    tripguide,
    threejs,
    fdn,
    ysp,
    fiverr,
    ysppage,
    geet,
    comp
} from "../assets";

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
        title: "ReactJS Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Node.JS Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
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
        title: "Senior Software Engineer",
        company_name: "Fresh Data Now",
        icon: fdn,
        iconBg: "#383E56",
        date: "Oct 2019 - Present",
        points: [
            "Designed several large scale software, used by 100,000 users a day using React JS, Typescript, Node.JS MongoDB, Redis and AWS",
            "Automated deployment procedures (devops) with Terraform and Github Actions",
            "Developing a mobile SMS Application with Dart, Flutter and Kotlin",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Chief Technological Officer",
        company_name: "Your Study Path",
        icon: ysp,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - Feb 2023",
        points: [
            'Lead the Team to in building the "Your Study Path" software from frontend to backend using ReactJS Typescript Node.JS and AWS Servers.',
            'Developing and maintaining ',
            'Automated deployment procedures using github actions and terraform',
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelance on Fiverr",
        icon: fiverr,
        iconBg: "#383E56",
        date: "July 2017 - Sept 2019",
        points: [
            "Developed landing pages with mobile responsive designs for internation clients",
            "Coded Web bots to crawl the web and scrape data",
            "Developed several SaaS platforms for clients with Stripe payment integration",

        ],
    },

];

const testimonials = [
    {
        testimonial:
            "All of his projects were completed with Perfection.Clement overcame every challenge and hurdle there was along all the difficult processes with precision and amazing intuition. One of the most brilliant young minds in his field.",
        name: "Jared",
        designation: "CEO",
        company: "Fresh Data Now",
        image: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8c5b5fc9d8bc009507872b5c84340f95-1652669636135/49d34058-2f78-4c04-b2ad-4723558bd090.png",
    },
    {
        testimonial:
            "I've never met a software developer with such a vast knowledge of frontend development and product design.",
        name: "Daniel",
        designation: "CEO",
        company: "Your Study Path",
        image: "https://media.licdn.com/dms/image/C4E03AQF_f5YQxIa08Q/profile-displayphoto-shrink_400_400/0/1653520169496?e=1687996800&v=beta&t=APM8fxJCb_hthV2cRKwCNkaHhvNqVSPr89jn9Hjp5QA",
    },
    {
        testimonial:
            "Clement did a great job creating a simple Chrome Extension automating a process on a website. Fast delivery and reliable communication. In case I have a similar project coming up I would like Clement to get involved again.",
        name: "Tobias Weber",
        designation: "Client",
        company: "Upwork",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Power SMS Land",
        description:
            "Web-based CRM platform that allows users to send bulk sms to their leads, purchase domains and track clickers and conversions. I connected several SMS ejoin modules in parallel to interface with a user friendly and responsive interface ",
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
                name: "node.js",
                color: "red-text-gradient",
            },
            {
                name: "redis",
                color: "pink-text-gradient",
            },
        ],
        image: pland,
        source_code_link: "https://github.com/debaosuidecl/POWER-SMS-LAND-RE",
    },
    {
        name: "Your Study Path",
        description:
            "Web application that teaches curriculum based learning to students between the ages of 8 and 16 years of age. Hosts both pre recorded classes and live tutorials on the Digital ocean servers.",
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
            {
                name: "cloud computing",
                color: "pink-text-gradient",
            },
        ],
        image: ysppage,
        source_code_link: "https://github.com/YourStudyPath",
    },
    {
        name: "Geetico",
        // description:
        //     "A comprehensive seller booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        description:
            "A comprehensive platform for sellers to upload their physical, fresh food and non perishable products to sell to their customers. Customers can also make custom orders to their preferred sellers",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: geet,
        source_code_link: "https://github.com/debaosuidecl/geeticofullcode",
    },
];

export { services, technologies, experiences, testimonials, projects, comp };