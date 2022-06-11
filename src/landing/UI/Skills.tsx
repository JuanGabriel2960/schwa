import React from 'react'
import { SkillsCard } from '../components/SkillsCard';
import { skillsCard } from '../data/index';

export const Skills = () => {
    return (
        <div className='bg-white py-6 px-6 lg:py-12 lg:px-12 flex flex-col lg:items-center gap-4 lg:gap-9'>
            <h2 className='text-font-strong font-bold text-3xl lg:text-5xl text-justify'>Improve These Skills With Us</h2>
            <p className='text-2xl text-justify lg:max-w-3xl text-font-light lg:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tincidunt ex, nec auctor tellus. Cras sagittis at tortor vel dictum.</p>
            <div className='flex justify-center gap-8 lg:gap-16 my-4 flex-wrap'>
                {
                    skillsCard.map(({ icon, title, description }) => (
                        <SkillsCard key={title} icon={icon} title={title} description={description} />
                    ))
                }
            </div>
        </div>
    )
}
