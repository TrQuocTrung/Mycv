import nestImg from 'assets/project/nestjs.png';
import nextjsImg from 'assets/project/nextjs.jpeg';
import reactNativeImg from 'assets/project/react-native.png';
import reactUltimateImg from 'assets/project/react-ultimate.png';
import springMvcImg from 'assets/project/spring-mvc.png';
import springRestImg from 'assets/project/spring-rest.png';
export const APP_DATA = {
    YOUTUBE_URL: "https://www.youtube.com/",
    TIKTOK_URL: "https://www.tiktok.com/",
    FACEBOOK_URL: "https://www.facebook.com/"
}
export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Lập Trình Viên",
            en: "Fullstack Developer"
        },
        company: {
            vi: "Công ty ABCXYZ Ltd.",
            en: "ABCXYZ Ltd."
        },
        duration: {
            vi: "Jan 2024 - Hiện tại",
            en: "Jan 2024 - Present"
        }
    },
    {
        id: 2,
        title: {
            vi: "Lập Trình Viên",
            en: "Fullstack Developer"
        },

        company: {
            vi: "Công ty F (freelancer)",
            en: "F (freelancer)"
        },
        duration: {
            vi: "Tháng 6/2022 - Tháng 1/2024",
            en: "Jun 2022 - Jan 2024"
        }
    },
    {
        id: 3,
        title: {
            vi: "Dự án tự làm",
            en: "Self Employed"
        },
        company: {
            vi: "Học kiến thức mới mỗi ngày",
            en: "Code and build something in everyday."
        },
        duration: {
            vi: "Tháng 1/2020 - Hiện tại",
            en: "Jan 2020 - Present"
        }
    }
]
export const PROJECT = () => [
    {
        id: 1,
        imgPath: reactNativeImg,
        title: "React Native Basic",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        githubLink: "",
        demoLink: ""
    },
    {
        id: 2,
        imgPath: springRestImg,
        title: "Java Spring REST",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        githubLink: "",
        demoLink: ""
    },
    {
        id: 3,
        imgPath: springMvcImg,
        title: "Java Spring MVC",
        description: "",
        githubLink: "",
        demoLink: ""
    },
    {
        id: 4,
        imgPath: nextjsImg,
        title: "React ProMax with Next.js",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        githubLink: "",
        demoLink: ""
    },
    {
        id: 5,
        imgPath: nestImg,
        title: "Nest.js Basic",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        githubLink: "",
        demoLink: ""
    },
    {
        id: 6,
        imgPath: reactUltimateImg,
        title: "React Ultimate",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        githubLink: "",
        demoLink: ""
    }
]
export const SKILLS_DATA = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Next JS',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'AWS',
    'Bootstrap',
    'Docker',
    'Figma',
    'Java',
    'Spring Boot',
]