import { NavbarLinks } from "../interfaces";
import { Props as SkillsCard } from '../components/SkillsCard';
import { listeningIcon, readingIcon, speakingIcon, writingIcon } from "../assets";

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