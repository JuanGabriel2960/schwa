import { NavbarLinks } from "../interfaces";
import { Props as SkillsCard } from '../components/SkillsCard';
import { Props as CoursesCard } from '../components/CoursesCard';
import { Props as TestimonialsCard } from '../components/TestimonialsCard';
import { advancedCover, intermediateCover, beginnerCover, listeningIcon, readingIcon, speakingIcon, writingIcon, testimonial1, testimonial2, testimonial3, testimonial4, testimonial5 } from "../assets";

export const navbarLinks: NavbarLinks[] = [
    {
        text: 'Home',
        href: '#home'
    },
    {
        text: 'Skills',
        href: '#skills'
    },
    {
        text: 'Courses',
        href: '#courses'
    },
    {
        text: 'Testimonials',
        href: '#testimonials'
    },
]

export const heroStatistics: any[] = [
    {
        count: '300+',
        text: 'Different Topics'
    },
    {
        count: '200+',
        text: 'Test Questions'
    },
    {
        count: '30+',
        text: 'Class Units'
    }
]

export const skillsCard: SkillsCard[] = [
    {
        icon: listeningIcon,
        title: 'Listening',
        description: 'One of the most frequent problems when learning English is the level of listening. Our program is designed so that each unit has a series of audios of conversations related to the subject matter.'
    },
    {
        icon: speakingIcon,
        title: 'Speaking',
        description: 'Speech is the most important communication skill as it allows us to be understood and makes it easier for us to interact with other people. This is strongly related to our level of listening.'
    },
    {
        icon: readingIcon,
        title: 'Reading',
        description: 'Improving reading comprehension and interpretation of the language will help you understand stories, books or scientific articles, with us you will be able to learn a lot of new words and sentences.'
    },
    {
        icon: writingIcon,
        title: 'Writing',
        description: 'Writing is the basis for learning a new language, with us you will learn from 0 how to write and translate sentences from one language to another using the correct functioning of grammar.'
    },
]

export const coursesCard: CoursesCard[] = [
    {
        image: beginnerCover,
        title: 'Beginner',
        description: 'Can understand and use familiar expressions and very basic phrases aimed at the satisfaction of specific needs. They can introduce themselves and others and answer personal questions.',
        units: 10
    },
    {
        image: intermediateCover,
        title: 'Intermediate',
        description: 'Handles the main points on family matters that are regularly encountered at work, school, leisure, etc. Can produce simple, connected texts on topics of personal interest.',
        units: 10
    },
    {
        image: advancedCover,
        title: 'Advanced',
        description: 'Understands a wide range of demanding texts. They can express themselves fluently and use language flexibly and effectively for social, academic, and professional purposes.',
        units: 10
    },
]

export const testimonialsCard: TestimonialsCard[] = [
    {
        image: testimonial1,
        title: 'The Best Way To Learn',
        description: 'It is a fully interactive platform, all units and levels of learning are very well focused for continuous learning. The platform is perfect for students of all levels.',
        name: 'Carl Johnson',
        position: 'Software Developer',
        stars: 5
    },
    {
        image: testimonial2,
        title: 'Amazing Courses',
        description: 'There are a wide variety of options to learn the language, I love that because I practice with lessons, audios and interactive tests. Totally recommended!',
        name: 'César Vialpando',
        position: 'Student',
        stars: 5
    },
    {
        image: testimonial3,
        title: 'Amazing Courses',
        description: "Schwa totally adapts to my time, rhythm of life and tasks, since you don't need to follow a class schedule and you can enter! You enter when you want.",
        name: 'Catalina López',
        position: 'Photographer',
        stars: 5
    },
    {
        image: testimonial4,
        title: 'Amazing Courses',
        description: "I love the platform and the different educational proposals they use to capture our attention and keep our interest in the subject while we learn.",
        name: 'Melvin Harris',
        position: 'Musician',
        stars: 5
    }
]

export const footerMedias: any[] = [
    {
        icon: '/twitter.png',
        href: '/',
    },
    {
        icon: '/facebook.png',
        href: '/',
    },
    {
        icon: '/youtube.png',
        href: '/',
    },
    {
        icon: '/git.png',
        href: 'https://github.com/JuanGabriel2960/schwa',
    },
]