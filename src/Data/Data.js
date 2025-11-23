// portfolio data
const portfolio_demo = [
    {
        id: 1,
        title: 'MyStore  — MERN eCommerce',
        img: '/assets/images/portfolio/mystore-ecommerce.png',
        description: 'A production-level eCommerce system with admin dashboard, role-based authorization, cart, Stripe payment, order tracking, and email notifications.',
        category: 'Web',
        code_link: 'https://github.com/SohelTanbir/my-store',
        live_demo: 'https://mystore-ecommerce-app.netlify.app'
    },
    {
        id: 2,
        title: 'Exotics Aquatics — Full-Featured eCommerce',
        img: '/assets/images/portfolio/exotics-aquatics.png',
        description: `A complete eCommerce platform with authentication, order
tracking, invoice emails, and payment integration (COD & bKash).`,
        category: 'Web',
        code_link: '#',
        live_demo: 'https://exoticaquaticsbd.com'
    },
    {
        id: 3,
        title: 'FusionCart — Multi Vendors Grocery Website',
        img: '/assets/images/portfolio/fusioncart.png',
        description: `A multi-vendor grocery web app built with Next.js, Tailwind CSS,
and Redux Toolkit, optimized for speed and modern UI.
`,
        category: 'Web',
        code_link: '#',
        live_demo: 'https://fusioncart-lime.vercel.app'
    },
    {
        id: 4,
        title: 'Metrocery — Multi Vendors Admin Dashboard',
        img: '/assets/images/portfolio/metrocery dashboard.png',
        description: `A fully responsive multi-vendor grocery admin dashboard developed with HTML, CSS, Bootstrap 5, JavaScript, and jQuery, enhanced with Chart.js visualizations, slick sliders, and dynamic data tables for efficient management.
`,
        category: 'Admin Dashboard',
        code_link: '#',
        live_demo: 'https://metrocery-dashboard-v1.netlify.app'
    },
    {
        id: 5,
        title: 'Inilabs School Landing page',
        img: '/assets/images/portfolio/inilabs-landing-page.png',
        description: 'A fully responsive school landing page built with HTML and Tailwind CSS, featuring optimized layout structure, modern font styling, and a clean UI tailored for educational institutions.',
        category: 'Landing Page',
        code_link: '#',
        live_demo: 'https://inilabs-tailwindcss.netlify.app/'
    },
    {
        id: 6,
        title: 'Appri App Landing page',
        img: '/assets/images/portfolio/appri.png',
        description: 'Appri is a app landing page.it is  a full responsive website Template.To make it I used only HTML and CSS',
        category: 'Landing Page',
        code_link: 'https://github.com/SohelTanbir/Appri-App-landing-page',
        live_demo: 'https://soheltanbir.github.io/Appri-App-landing-page/'
    },
    {
        id: 7,
        title: 'Franchise Supplier',
        img: '/assets/images/portfolio/franchise-supplier.png',
        description: 'A user-friendly supplier database for franchises, built with HTML, CSS and JavaScript. Includes a clean, responsive UI.',
        category: 'Landing Page',
        code_link: '#',
        live_demo: 'https://franchise-supplier.netlify.app'
    },
    {
        id: 8,
        title: 'Youbie',
        img: '/assets/images/portfolio/youbie.png   ',
        description: 'A decentralized, crypto-powered live streaming platform built with React and CSS, featuring uncensored streaming and a sleek UI.',
        category: 'Web',
        code_link: '#',
        live_demo: 'https://voluble-narwhal-f6eeed.netlify.app/'
    },
    {
        id: 9,
        title: 'Al Quran App',
        img: '/assets/images/portfolio/al-quran.png',
        description: 'Al Quran web application for muslim people.This is a amazing application with three mode to use it.I use React js for Front and use Free API for Back end',
        category: 'Web',
        code_link: 'https://github.com/SohelTanbir/Vaid-tech/tree/Al-Quran',
        live_demo: 'https://al-quran-mern-app.netlify.app/'
    },
    {
        id: 10,
        title: 'E-Store ',
        img: '/assets/images/portfolio/estore.png',
        description: "E-Store is an E-commerce Website.customer can buy their cloth from the website.To make it I used Only HTML and CSS",
        category: 'Web Design',
        code_link: 'https://github.com/SohelTanbir/E-Store',
        live_demo: 'https://soheltanbir.github.io/E-Store/index.html'
    },
    {
        id: 11,
        title: 'Color Picker App',
        img: '/assets/images/portfolio/color-picker.png',
        description: "This is a simple color picker app. user can pick up any from the application with hex or rgb color code.",
        category: 'Web',
        code_link: "https://github.com/SohelTanbir/Color-Picker-App",
        live_demo: 'https://soheltanbir.github.io/Color-Picker-App/'
    },
    {
        id: 12,
        title: 'Finix Web Template ',
        img: '/assets/images/portfolio/finix.png',
        description: "Finix is beautiful get appoint web Template .To make it I used only HTML and CSS",
        category: 'Web Design',
        code_link: 'https://github.com/SohelTanbir/Finix',
        live_demo: 'https://soheltanbir.github.io/Finix/index.html'
    },
    {
        id: 13,
        title: 'NewBiz Template ',
        img: '/assets/images/portfolio/nebize.png',
        description: "NewBiz is beautiful Business solution web Template .To make it I used only HTML and CSS",
        category: 'Web Design',
        code_link: 'https://github.com/SohelTanbir/NewBiz-webiste',
        live_demo: 'https://soheltanbir.github.io/NewBiz-webiste/'
    },
    {
        id: 14,
        title: 'Noxia Web Template',
        img: '/assets/images/portfolio/noxia.png',
        description: "Noxia is Service provided website, .To make it I used only HTML and CSS",
        category: 'Web Design',
        code_link: 'https://github.com/SohelTanbir/Noxia-website',
        live_demo: 'https://soheltanbir.github.io/Noxia-website/'
    },
]

export default portfolio_demo;

// education information
export const education = [
    {
        degree: "BSc in Computer Science and Engineering.",
        institution: "Canadian University of Bangladesh",
        year: "2023 - 2026"
    },
    {
        degree: "Diploma in Computer Engineering.",
        institution: "Thakurgaon Polytechnic Institute",
        year: "2017 - 2021"
    }
];

// work experience
export const experience = [
    {
        position: "Software Engineer",
        company: "Binary Fusion",
        year: "2023 - Present"
    },
    // {
    //     position: "Frontend Developer",
    //     company: "Vaid Tech Services (Intern)",
    //     year: "2021 - 2022"
    // }
];

// contact information
export const personalInfo = {
    name: "Sohel Rana",
    phone: "+8801774232515",
    email: "soheltanbir19@gmail.com",
    location: "Dhaka, Bangladesh",
    facebook: "https://www.facebook.com",
    linkedin: "https://www.linkedin.com/in/sohelrana515",
    github: "https://github.com/SohelTanbir",
    twitter: "https://twitter.com/soheltanbir",
    resume: 'https://drive.google.com/uc?export=download&id=1VeZJ64jGba4gtHn9p2nGudliD2ggrQGL',
    aboutMe: `I'm Sohel Rana, a MERN Stack Developer specializing in scalable, high-performance web applications using React, Next.js, Node.js, and MongoDB.
With strong skills in Redux Toolkit, RTK Query, and Framer Motion, I build clean, responsive, and engaging user experiences that perform flawlessly across platforms.`,
    aboutMeShort: `MERN Stack Developer crafting scalable, high-performance web apps with React, Next.js, Node.js, and MongoDB, focused on clean code, smooth UI, and great user experiences.`
}

// tech stack
export const CoreTechnologies = [
    "Tailwind CSS",
    "React, Next.js",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
];

export const Blogs = [
    {
        id: 1,
        title: "প্রম্পট ইঞ্জিনিয়ারিং: AI কে বোঝানোর সহজ কৌশল।",
        date: "Sep 12, 2025",
        link: "https://sohelrana.hashnode.dev",
        thumbnail: '/assets/images/blogs/prompt-engineering.png',
        category: 'AI',
    },
    {
        id: 2,
        title: "সিনক্রোনাস ও অ্যাসিনক্রোনাস প্রোগ্রামিং ইন জাভাস্ক্রিপ্ট।",
        date: "Oct 19, 2024",
        link: "https://synchronous-asynchronous.hashnode.dev",
        thumbnail: '/assets/images/blogs/synchronous-asynchronous.png',
        category: 'JavaScript',
    },
    {
        id: 3,
        title: "এক পলকে Git stash.",
        date: "Dec 28, 2024",
        link: "https://git-stash.hashnode.dev/",
        thumbnail: '/assets/images/blogs/git stash-cover.webp',
        category: 'Git',
    },
]

